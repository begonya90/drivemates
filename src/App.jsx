import { HeroSection, AboutUs, Services, FAQ, Contacts } from './components'
import './App.css'

function App() {
  return (
    <>
      <HeroSection />
      <div style={{ position: 'relative', zIndex: 1, marginTop: '100vh' }}>
        <AboutUs />
        <Services />
        <FAQ />
        <Contacts />
      </div>
    </>
  )
}

export default App
