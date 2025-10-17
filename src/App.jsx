import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Sahyogi from './pages/Sahyogi'
import About from './pages/About'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'
import Industries from './pages/Industries';
import Careers from './pages/footer/Careers';
import CaseStudies from './pages/footer/CaseStudies';
import CustomSoftwareDevelopment from './pages/services/CustomSoftwareDevelopment';
import CloudDevOps from './pages/services/CloudDevOps';
import Cybersecurity from './pages/services/Cybersecurity';
import DataAnalyticsAI from './pages/services/DataAnalyticsAI';
import ITConsulting from './pages/services/ITConsulting';
import ITInfrastructure from './pages/services/ITInfrastructure';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Home />
              <Services />
              <Industries />
              <Sahyogi />
              <About />
              <Contact />
              <BlogPage />
            </main>
          } />
          
          {/* Service Detail Pages */}
          <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
          <Route path="/services/cloud-devops" element={<CloudDevOps />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/data-analytics-ai" element={<DataAnalyticsAI />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />

          {/* Other Pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App