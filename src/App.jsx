import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Rounds from './components/Rounds';
import Highlights from './components/Highlights';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-gray-300 font-sans selection:bg-neon-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <EventDetails />
        <Rounds />
        <Highlights />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
