import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";
import ScrollToTop from "components/ScrollToTop";

import KitchenRemodeling from "pages/KitchenRemodeling";
import BathroomRemodeling from "pages/_BathroomRemodeling";

import CustomCabinets from "pages/_CustomCabinets";
import ExteriorPainting from "pages/services/_ExteriorPainting";
import DrywallSheetrock from "pages/services/_DrywallSheetrock";
import PatiosConcrete from "pages/services/_PatiosConcrete";
import Plumbing from "pages/services/_Plumbing";
import Electrical from "pages/services/_Electrical";
import FencingDriveways from "pages/services/_FencingDriveways";
import Closets from "pages/services/_Closets";
import Remodeling from "pages/_Remodeling";
import PaintingFinishesHub from "pages/_PaintingFinishesHub";
import OutdoorStructuralHub from "pages/_OutdoorStructuralHub";
import UtilitiesHub from "pages/_UtilitiesHub";
import Siding from "pages/services/Siding";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/kitchen-remodeling"
          element={<KitchenRemodeling />}
        />
        <Route
          path="/services/bathroom-remodeling"
          element={<BathroomRemodeling />}
        />
        <Route path="/services/painting" element={<PaintingFinishesHub />} />
        <Route path="/services/custom-cabinets" element={<CustomCabinets />} />
        <Route
          path="/services/exterior-painting"
          element={<ExteriorPainting />}
        />{" "}
        {/* <-- fix */}
        <Route
          path="/services/drywall-sheetrock"
          element={<DrywallSheetrock />}
        />
        <Route path="/services/patios-concrete" element={<PatiosConcrete />} />
        <Route path="/services/plumbing" element={<Plumbing />} />
        <Route path="/services/electrical" element={<Electrical />} />
        <Route
          path="/services/fencing-driveways"
          element={<FencingDriveways />}
        />
        <Route path="/services/siding" element={<Siding />} />
        <Route path="/services/closets" element={<Closets />} />
        <Route path="/services/remodeling" element={<Remodeling />} />
        <Route path="/services/outdoor" element={<OutdoorStructuralHub />} />
        <Route path="/services/utilities" element={<UtilitiesHub />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
