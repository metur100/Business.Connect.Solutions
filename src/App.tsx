import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactBar from './components/ContactBar'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Driver from './pages/Driver'
import Fleet from './pages/Fleet'
import Events from './pages/Events'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Zum Inhalt springen</a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Services />} />
          <Route path="/leistungen/:slug" element={<ServiceDetail />} />
          <Route path="/fahrer" element={<Driver />} />
          <Route path="/flotte" element={<Fleet />} />
          <Route path="/anlaesse" element={<Events />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ContactBar />
    </>
  )
}
