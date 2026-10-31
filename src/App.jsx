import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RouteEffects from './components/RouteEffects'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Tendas from './pages/Tendas'
import Galeria from './pages/Galeria'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <RouteEffects />
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tendas" element={<Tendas />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
