import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import RiskReversal from './components/RiskReversal.jsx';
import RoiCalculator from './components/RoiCalculator.jsx';
import ProductCatalog from './components/ProductCatalog.jsx';
import BrandPortfolioSection from './components/BrandPortfolioSection.jsx';
import DocuseriesSection from './components/DocuseriesSection.jsx';
import Footer from './components/Footer.jsx';
import InspectionForm from './components/InspectionForm.jsx';

export default function App() {
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);

  const handleOpenModal = () => setIsInspectionModalOpen(true);
  const handleCloseModal = () => setIsInspectionModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Top Navbar */}
      <Navbar onOpenInspectionModal={handleOpenModal} />

      {/* Main Sections */}
      <main className="flex-grow">
        <HeroSection onOpenInspectionModal={handleOpenModal} />
        <RiskReversal onOpenInspectionModal={handleOpenModal} />
        <ProductCatalog onOpenInspectionModal={handleOpenModal} />
        <BrandPortfolioSection onOpenInspectionModal={handleOpenModal} />
        <RoiCalculator onOpenInspectionModal={handleOpenModal} />
        <DocuseriesSection onOpenInspectionModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer onOpenInspectionModal={handleOpenModal} />

      {/* Inspection Modal */}
      <InspectionForm isOpen={isInspectionModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
