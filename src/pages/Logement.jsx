import { useParams, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slideshow from '../components/Carrousel'
import logements from '../data/logements.json'

function Logement() {
  const { id } = useParams()
  const logement = logements.find(logement => logement.id === id)
  
  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div>
      <Header />
      <main>
        <Slideshow pictures={logement.pictures} />
      </main>
      <Footer />
    </div>
  )
}

export default Logement