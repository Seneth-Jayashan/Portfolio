import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animate } from 'animejs';
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
import WebGLBackground from './components/WebGLBackground';
import RouteTransitionOverlay from './components/RouteTransitionOverlay';
import { experienceTuning } from './config/experienceTuning';

function App() {
  const location = useLocation();
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return undefined;

    const pageMotion = animate(pageRef.current, {
      opacity: [0, 1],
      y: [18, 0],
      duration: 640,
      ease: 'outExpo',
    });

    return () => {
      pageMotion.pause?.();
    };
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <WebGLBackground preset={experienceTuning.webglPreset} />
      <RouteTransitionOverlay routeKey={location.pathname} preset={experienceTuning.routeTransitionPreset} />
      <div className="ambient-orb one" />
      <div className="ambient-orb two" />
      <div className="ambient-orb three" />
      <Navbar />
      <main className="app-main" ref={pageRef}>
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
      </main>
      <Footer />
    </div>
  );
}

export default App
