import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import RiskReversal from './components/RiskReversal.jsx';
import RoiCalculator from './components/RoiCalculator.jsx';
import ProductCatalog from './components/ProductCatalog.jsx';
import BrandPortfolioSection from './components/BrandPortfolioSection.jsx';
import DocuseriesSection from './components/DocuseriesSection.jsx';
import Footer from './components/Footer.jsx';
import InspectionForm from './components/InspectionForm.jsx';
import { ExecutiveProposalDeck } from './components/ExecutiveProposalDeck';

export default function App() {
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);
  const [isProposalRoute, setIsProposalRoute] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname.toLowerCase();
        if (path.includes('projeto') || path.includes('piloto') || path.includes('proposta') || path.includes('visao')) {
          setIsProposalRoute(true);
        } else {
          setIsProposalRoute(false);
        }
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    return () => window.removeEventListener('popstate', checkRoute);
  }, []);

  const handleOpenModal = () => setIsInspectionModalOpen(true);
  const handleCloseModal = () => setIsInspectionModalOpen(false);

  // If URL path is /projeto-piloto or /projeto or /proposta, render Executive Proposal Deck
  if (isProposalRoute) {
    return <ExecutiveProposalDeck />;
  }

  // Otherwise (Root /), render the Original Customer Landing Page
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
