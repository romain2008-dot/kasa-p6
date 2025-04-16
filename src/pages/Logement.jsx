import { useParams, Navigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
      <h1>Page Logement - {id}</h1>
      <Footer />
    </div>
  )
}

export default Logement