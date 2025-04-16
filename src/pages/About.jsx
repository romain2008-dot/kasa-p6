import Header from '../components/Header'
import Footer from '../components/Footer'
import accueilImage from '../assets/propos-image.webp'

function About() {
  return(
    <div>
      <Header />
      <div className="home__banner">
        <img src={accueilImage} alt="accueil" className="home__image" />
      </div>
      <Footer />
    </div>
  ) 
}

export default About