import { useState, useEffect } from 'react';
import { ExecutiveProposalDeck } from './components/ExecutiveProposalDeck';
import { InteractiveProposalPage } from './components/InteractiveProposalPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'proposal' | 'interactive'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('interativo') || path.includes('comercial') || path.includes('planos')) {
        return 'interactive';
      }
    }
    return 'interactive'; // Default to interactive 3-tier proposal page
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('interativo') || path.includes('comercial') || path.includes('planos')) {
        setCurrentView('interactive');
      } else {
        setCurrentView('proposal');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentView === 'interactive') {
    return <InteractiveProposalPage />;
  }

  return <ExecutiveProposalDeck />;
}
