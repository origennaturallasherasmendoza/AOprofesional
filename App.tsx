
import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import WhatIsIt from './components/WhatIsIt';
import Benefits from './components/Benefits';
import ProductInclude from './components/ProductInclude';
import NotForYou from './components/NotForYou';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import DeliveryInfo from './components/DeliveryInfo';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <PainPoints />
      <WhatIsIt />
      <Benefits />
      <ProductInclude />
      <NotForYou />
      <Bonuses />
      <Pricing />
      <DeliveryInfo />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingElements />
    </div>
  );
};

export default App;
