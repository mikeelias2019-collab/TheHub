import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { PropertyListings } from './components/PropertyListings';
import { SellProperty } from './components/SellProperty';
import { TransactionChat } from './components/TransactionChat';
import { InstantCashOffer } from './components/InstantCashOffer';
import { BuyWithUs } from './components/BuyWithUs';
import { MarketInsights } from './components/MarketInsights';
import { SetupGuide } from './components/SetupGuide';
import { SavedProperties } from './components/SavedProperties';
import { MortgageCalculator } from './components/MortgageCalculator';
import { NeighborhoodComparison } from './components/NeighborhoodComparison';
import { FloatingChat } from './components/AIPropertyChat';
import { ToastNotifications } from './components/ToastNotifications';
import { AppProvider } from './context/AppContext';

function AppInner() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showMortgageCalc, setShowMortgageCalc] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === 'mortgage-calculator') {
      setShowMortgageCalc(true);
      return;
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'listings': return <PropertyListings />;
      case 'buy-with-us': return <BuyWithUs />;
      case 'sell': return <SellProperty />;
      case 'chat': return <TransactionChat />;
      case 'cash-offer': return <InstantCashOffer />;
      case 'market-insights': return <MarketInsights />;
      case 'setup-guide': return <SetupGuide />;
      case 'saved': return <SavedProperties onNavigate={handleNavigate} />;
      case 'neighborhood-comparison': return <NeighborhoodComparison />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <FloatingChat />
      <ToastNotifications />
      {showMortgageCalc && (
        <MortgageCalculator onClose={() => setShowMortgageCalc(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}

export default App;
