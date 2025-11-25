
import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Navbar, Footer } from './components/Layout';

// --- Lazy Load Pages ---

// Core & Product
const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const Specs = lazy(() => import('./pages/Specs'));
const Manifesto = lazy(() => import('./pages/Manifesto'));
const Faith = lazy(() => import('./pages/Faith'));

// Engagement
const Missions = lazy(() => import('./pages/Missions'));
const Give = lazy(() => import('./pages/Give'));
const Join = lazy(() => import('./pages/Join'));
const Contact = lazy(() => import('./pages/Contact'));

// Legal & Compliance
const Disclosure = lazy(() => import('./pages/Disclosure'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// System
const NotFound = lazy(() => import('./pages/NotFound'));

// --- Utility Components ---

/**
 * ScrollToTop
 * Resets the window scroll position to (0,0) whenever the route pathname changes.
 * Ensures users start at the top of the page when navigating.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * LoadingFallback
 * A centered spinner displayed within the main content area while code chunks are loading.
 */
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh] pt-24 text-white/20" aria-label="Loading content...">
    <Loader2 className="w-6 h-6 animate-spin" />
  </div>
);

// --- Main Application ---

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
        {/* Navigation Utilities */}
        <ScrollToTop />
        
        {/* Header */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow relative w-full">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Landing */}
              <Route path="/" element={<Home />} />
              
              {/* Platform & Philosophy */}
              <Route path="/product" element={<Platform />} />
              <Route path="/specs" element={<Specs />} />
              <Route path="/manifesto" element={<Manifesto />} />
              <Route path="/faith" element={<Faith />} />
              
              {/* Involvement */}
              <Route path="/missions" element={<Missions />} />
              <Route path="/give" element={<Give />} />
              <Route path="/join" element={<Join />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Legal */}
              <Route path="/disclosure" element={<Disclosure />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
