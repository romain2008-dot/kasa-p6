import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import accueilImage from '../assets/accueil-image.webp'
import logements from '../data/logements.json'
import '../saas/Home.scss'

function Home() {
  return (
    <div>
      <main>
        <Banner 
          image={accueilImage} 
          title="Chez vous, partout et ailleurs"
        />
        <div className="home__gallery">
          {logements.map(logement => (
            <Link
              key={logement.id}
              to={`/logement/${logement.id}`}
              className="home__gallery__card"
            >
              <article>
                <img src={logement.cover} alt={logement.title} />
                <h2>{logement.title}</h2>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home