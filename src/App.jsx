import React from 'react';
import { Routes,Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contacts';
import RoadMap from './pages/RoadMap';
import Footer from './components/Footer';
import Skills from './pages/skills';
import KHB from './projects/khb';
import CleanWave from './projects/cleanwave';
import Chrysle from './projects/chrysletours';
import PnPPetShop from './projects/petshop';
import PocketPilot from './projects/pocketpilot';
import ClTowing from './projects/cltowing';
import Kasss from './projects/kasss';
import MoodMeals from './projects/moodmeals';
import Nkasl from './projects/nkasl';
import ComingSoon from './projects/comingsoon';
import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects/khb" element={<KHB />} />
        <Route path="/projects/cleanwave" element={<CleanWave />} />
        <Route path="/projects/chrysletours" element={<Chrysle />} />
        <Route path="/projects/petshop" element={<PnPPetShop />} />
        <Route path="/projects/pocketpilot" element={<PocketPilot />} />
        <Route path="/projects/cltowing" element={<ClTowing />} />
        <Route path="/projects/kasss" element={<Kasss />} />
        <Route path="/projects/moodmeals" element={<MoodMeals />} />
        <Route path="/projects/nkasl" element={<Nkasl />} />
        <Route path="/projects/comingsoon" element={<ComingSoon />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App
