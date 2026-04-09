import { useState } from 'react'
import './App.css'
import {
  Navigation,
  Hero,
  Specialization,
  HowItWorks,
  Differentiation,
  CTA,
  Footer,
  Wizard,
} from './components'

function App() {
  const [wizardOpen, setWizardOpen] = useState(false)

  const openWizard = () => setWizardOpen(true)
  const closeWizard = () => setWizardOpen(false)

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navigation onFindSpecialist={openWizard} />
      <main className="pt-24">
        <Hero onFindSpecialist={openWizard} />
        <Specialization />
        <HowItWorks />
        <Differentiation />
        <CTA onFindSpecialist={openWizard} />
      </main>
      <Footer />
      {wizardOpen && <Wizard onClose={closeWizard} />}
    </div>
  )
}

export default App
