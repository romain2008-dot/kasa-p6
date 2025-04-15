import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import accueilImage from '../assets/accueil-image.webp'
import logements from '../data/logements.json'
import '../styles/Home.css'

function Home() {
  return (
    <div>
      <div className="header__home">
        <Header />
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
      <Footer />
    </div>
  )
}

export default Home