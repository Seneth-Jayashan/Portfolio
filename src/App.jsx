import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animate } from 'animejs';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import WebGLBackground from './components/WebGLBackground';
import RouteTransitionOverlay from './components/RouteTransitionOverlay';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contacts';
import RoadMap from './pages/RoadMap';
import Skills from './pages/Skills';

/* Project detail pages */
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

import { experienceTuning } from './config/experienceTuning';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const pageRef  = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return undefined;
    const motion = animate(pageRef.current, {
      opacity: [0, 1],
      y: [20, 0],
      duration: 680,
      ease: 'outExpo',
    });
    return () => motion.pause?.();
  }, [location.pathname]);

  return (
    <>
      {/* Dynamic SEO meta tags + structured data */}
      <SEOHead />

      <div className="app-shell">
        {/* Visual layers */}
        <WebGLBackground preset={experienceTuning.webglPreset} />
        <RouteTransitionOverlay
          routeKey={location.pathname}
          preset={experienceTuning.routeTransitionPreset}
        />

        {/* Ambient lighting orbs */}
        <div className="ambient-orb one" aria-hidden="true" />
        <div className="ambient-orb two" aria-hidden="true" />
        <div className="ambient-orb three" aria-hidden="true" />

        <ScrollToTop />
        <Navbar />

        <main
          className="app-main"
          ref={pageRef}
          id="main-content"
          tabIndex={-1}
          aria-label="Main content"
        >
          <Routes location={location} key={location.pathname}>
            {/* Primary pages */}
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills"   element={<Skills />} />
            <Route path="/roadmap"  element={<RoadMap />} />
            <Route path="/contact"  element={<Contact />} />

            {/* Project detail routes */}
            <Route path="/projects/khb"          element={<KHB />} />
            <Route path="/projects/cleanwave"     element={<CleanWave />} />
            <Route path="/projects/chrysletours"  element={<Chrysle />} />
            <Route path="/projects/petshop"       element={<PnPPetShop />} />
            <Route path="/projects/pocketpilot"   element={<PocketPilot />} />
            <Route path="/projects/cltowing"      element={<ClTowing />} />
            <Route path="/projects/kasss"         element={<Kasss />} />
            <Route path="/projects/moodmeals"     element={<MoodMeals />} />
            <Route path="/projects/nkasl"         element={<Nkasl />} />
            <Route path="/projects/comingsoon"    element={<ComingSoon />} />

            {/* 404 fallback */}
            <Route
              path="*"
              element={
                <section className="page-wrap flex flex-col items-center justify-center text-center" aria-label="Page not found">
                  <p className="section-kicker">404</p>
                  <h1 className="section-title mt-3 mb-5">Page Not Found</h1>
                  <p className="section-copy mb-7">
                    The page you're looking for doesn't exist or has been moved.
                  </p>
                  <a href="/" className="btn-primary">Back to Home</a>
                </section>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;