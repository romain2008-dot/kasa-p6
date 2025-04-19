import { Link } from 'react-router-dom'
import accueilImage from '../assets/accueil-image.webp'
import logements from '../data/logements.json'
import '../saas/Home.scss'

function Home() {
  return (
    <div>
      <div className="header__home">
        <main>
          <div className="home">
            <div className="home__banner">
              <img src={accueilImage} alt="accueil" className="home__image" />
              <h1 className="home__title">Chez vous, partout et ailleurs</h1>
            </div>
          </div>

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
    </div>
  )
}

export default Home