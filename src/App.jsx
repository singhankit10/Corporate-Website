import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Sahyogi from './pages/Sahyogi'
import About from './pages/About'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'
import Industries from './pages/Industries';
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Services />
        <Industries />
        <Sahyogi />
        <About />
        <BlogPage />
        <Contact />
      
      </main>
      <Footer />
    </div>
  )
}

export default App