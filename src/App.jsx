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
import CustomSoftwareDevelopment from './pages/services/CustomSoftwareDevelopment';
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
          <Route path="/services/custom-software-development" element={<CustomSoftwareDevelopment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App