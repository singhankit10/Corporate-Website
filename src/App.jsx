import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Services />
      </main>
      <Footer />
    </div>
  )
}

export default App