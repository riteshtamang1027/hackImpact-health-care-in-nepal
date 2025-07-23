import DoctorsSection from './components/doctorsSection'
import FooterSection from './components/footerSection'
import HealthAlertsSection from './components/healthAlertsSections'
import HealthcareSection from './components/healthCareSection'
import HeroSection from './components/heroSection'
import NavbarSection from './components/navbarSection'
import PatientSection from './components/patientSection'

export default function App() {
  return (
    <div className=''>
     <div className='sticky top-0 z-50'>
      <NavbarSection/>
     </div>
     <HeroSection/>
     <HealthcareSection/>
     <DoctorsSection/>
     <PatientSection/>
     <HealthAlertsSection/>
     <FooterSection/>

    </div>
  )
}
