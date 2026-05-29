import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Spiritual from './pages/Spiritual';
import Collections from './pages/Collections';
import AIGuide from './pages/AIGuide';
import PlaceDetail from './pages/Place/[placeId]';
import About from './pages/About';
import Stories from './pages/Stories';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="min-h-screen paper-texture selection:bg-accent-light/30 dark:selection:bg-accent-dark/30">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/spiritual" element={<Spiritual />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/ai-guide" element={<AIGuide />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/about" element={<About />} />
              <Route path="/place/:placeId" element={<PlaceDetail />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
