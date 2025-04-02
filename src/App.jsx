import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import './styles/variables.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes as you develop other pages */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/events" element={<EventsPage />} /> */}
          {/* <Route path="/work-with-me" element={<WorkWithMePage />} /> */}
          {/* <Route path="/resources" element={<ResourcesPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;