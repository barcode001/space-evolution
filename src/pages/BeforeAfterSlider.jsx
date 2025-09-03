import React, { useEffect, useRef, useState } from "react";
import defaultAfter from "../assets/images/after-image9.png";
import defaultBefore from "../assets/images/before-image2.jpg";

/**
 * Auto-Play Before/After Slider (no dragging)
 * - Click/tap (or Space/Enter) toggles pause/play
 * - Animates between min..max bounds
 */
export default function BeforeAfterSlider({
  beforeSrc = defaultBefore,
  afterSrc = defaultAfter,
  beforeAlt = "Before",
  afterAlt = "After",
  /** starting position (%) */
  initial = 50,
  /** show small "Before/After" chips */
  showLabels = true,
  className = "",
  /** autoplay settings */
  autoplay = true,
  min = 0, // left bound (%)
  max = 100, // right bound (%)
  speed = 0.45, // % per frame @ ~60fps
}) {
  const [percent, setPercent] = useState(
    Math.min(100, Math.max(0, Number(initial) || 50))
  );
  const [paused, setPaused] = useState(false);
  const dir = useRef(1); // 1→right, -1→left
  const rafId = useRef(null);

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  // Auto-play bounce animation
  useEffect(() => {
    if (!autoplay) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tick = () => {
      if (!paused && !document.hidden) {
        setPercent((p) => {
          let next = p + dir.current * speed;
          if (next >= max) {
            next = max;
            dir.current = -1;
          }
          if (next <= min) {
            next = min;
            dir.current = 1;
          }
          return next;
        });
      }
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [autoplay, paused, min, max, speed]);

  // Click / keyboard toggle
  const toggle = () => setPaused((v) => !v);
  const onKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={`bas ${paused ? "is-paused" : ""} ${className}`}
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyDown={onKeyDown}
      aria-pressed={paused ? "true" : "false"}
      aria-label="Before and after showcase (click to pause or play)"
      style={{ "--pos": `${percent}%` }}
    >
      {/* After (base) */}
      <img className="bas__img bas__img--after" src={afterSrc} alt={afterAlt} />

      {/* Before (overlay, clipped by CSS using --pos) */}
      <div className="bas__before">
        <img
          className="bas__img bas__img--before"
          src={beforeSrc}
          alt={beforeAlt}
        />
      </div>

      {/* Soft feather + divider + handle */}
      <div className="bas__feather" aria-hidden="true" />
      <div className="bas__divider" aria-hidden="true" />
      <div className="bas__handle" aria-hidden="true">
        <span className="bas__grip" />
      </div>

      {showLabels && (
        <>
          <span className="bas__label bas__label--before">Before</span>
          <span className="bas__label bas__label--after">After</span>
        </>
      )}

      <div className="bas__controls" aria-hidden="false">
        <button
          type="button"
          className="bas__control"
          onClick={(e) => {
            e.stopPropagation();
            setPaused((p) => !p);
          }}
          aria-label={paused ? "Play" : "Pause"}
          title={paused ? "Play" : "Pause"}
        >
          {/* Simple icon using CSS; or put an SVG here */}
          <span
            className={`bas__icon ${
              paused ? "bas__icon--play" : "bas__icon--pause"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
