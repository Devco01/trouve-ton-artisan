import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Composants de mise en page
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ArtisanDetail from './pages/ArtisanDetail';
import ArtisansList from './pages/ArtisansList';
import SearchResults from './pages/SearchResults';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

// Pages légales
const LegalPage = ({ title }) => (
  <main className="legal-page">
    <div className="container">
      <h1>{title}</h1>
      <p>Page en construction</p>
    </div>
  </main>
);

const MentionsLegales = () => <LegalPage title="Mentions légales" />;
const DonneesPersonnelles = () => <LegalPage title="Données personnelles" />;
const Accessibilite = () => <LegalPage title="Déclaration d'accessibilité" />;
const Cookies = () => <LegalPage title="Politique de cookies" />;

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            {/* Pages principales */}
            <Route path="/" element={<Home />} />
            <Route path="/artisans/:artisanId" element={<ArtisanDetail />} />
            <Route path="/artisans" element={<ArtisansList />} />
            <Route path="/categories/:categorySlug" element={<ArtisansList />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            
            {/* Pages légales */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/donnees-personnelles" element={<DonneesPersonnelles />} />
            <Route path="/accessibilite" element={<Accessibilite />} />
            <Route path="/cookies" element={<Cookies />} />
            
            {/* Page 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App; 