import { useEffect } from 'react';
import { ExecutiveProposalDeck } from './components/ExecutiveProposalDeck';
import { InteractiveProposalPage } from './components/InteractiveProposalPage';
import { PartnershipTeaser } from './components/PartnershipTeaser';
import { FinalProposalDeck } from './components/FinalProposalDeck';

function getView(pathname: string) {
  const path = pathname.toLowerCase();

  if (path.includes('proposta-executiva')) {
    return 'final-proposal';
  }

  if (
    path.includes('interativo') ||
    path.includes('comercial') ||
    path.includes('planos')
  ) {
    return 'interactive';
  }

  if (path.includes('projeto-piloto') || path.includes('deck-executivo')) {
    return 'proposal';
  }

  return 'teaser';
}

export default function App() {
  const view = getView(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    if (view === 'teaser') {
      document.title = 'Iparaná Export × IDS Flows';
    } else if (view === 'final-proposal') {
      document.title = 'Proposta Pós-Alinhamento | IDS × IPARANÁ';
    } else if (view === 'interactive') {
      document.title = 'Proposta Executiva | Iparaná × IDS Flows';
    } else {
      document.title = 'Projeto Piloto | Iparaná × IDS Flows';
    }
  }, [view]);

  if (view === 'final-proposal') {
    return <FinalProposalDeck />;
  }

  if (view === 'interactive') {
    return <InteractiveProposalPage />;
  }

  if (view === 'proposal') {
    return <ExecutiveProposalDeck />;
  }

  return <PartnershipTeaser />;
}
