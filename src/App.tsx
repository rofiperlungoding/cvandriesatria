import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages for performance
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ResultsPage = React.lazy(() => import('./pages/ResultsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
// We will create HomePage next
const HomePage = React.lazy(() => import('./pages/HomePage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                            <HomePage />
                        </Suspense>
                    } />
                    <Route path="services" element={
                        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                            <ServicesPage />
                        </Suspense>
                    } />
                    <Route path="service/:slug" element={
                        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                            <ServiceDetailPage />
                        </Suspense>
                    } />
                    <Route path="about" element={
                        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                            <AboutPage />
                        </Suspense>
                    } />
                    <Route path="results" element={
                        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                            <ResultsPage />
                        </Suspense>
                    } />
                    <Route path="contact" element={
                        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                            <ContactPage />
                        </Suspense>
                    } />
                    <Route path="privacy" element={
                        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                            <PrivacyPage />
                        </Suspense>
                    } />
                    <Route path="terms" element={
                        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                            <TermsPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
