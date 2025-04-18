import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag'
import Host from '../components/Host'
import Rating from '../components/Rating'
import Collapse from '../components/Collapse'
import logements from '../data/logements.json'
import '../saas/Logement.scss'

function Logement() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    const logement = logements.find(logement => logement.id === id)
    if (!logement) {
      navigate('/404')
    }
  }, [id, navigate])

  const logement = logements.find(logement => logement.id === id)
  
  if (!logement) {
    return null
  }

  return (
    <div>
      <Header />
      <main className="logement">
        <Carrousel pictures={logement.pictures} />
        
        <div className="logement__content">
          <div className="logement__primary">
            <h1 className="logement__title">{logement.title}</h1>
            <p className="logement__location">{logement.location}</p>
            <div className="logement__tags">
              {logement.tags.map((tag, index) => (
                <Tag key={index} text={tag} />
              ))}
            </div>
          </div>
          
          <div className="logement__secondary">
            <Rating score={parseInt(logement.rating)} />
            <Host name={logement.host.name} picture={logement.host.picture} />
          </div>
        </div>
        
        <div className="logement__details">
          <Collapse title="Description" content={logement.description} />
          <Collapse 
            title="Équipements" 
            content={
              <ul className="logement__equipments">
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            } 
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Logement