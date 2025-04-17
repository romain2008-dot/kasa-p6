import { useState, useEffect } from 'react'
import '../saas/Carrousel.scss'
import arrow from '../assets/chevron-up.svg'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Préchargement unique des images au montage
  useEffect(() => {
    pictures.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, []) // Tableau de dépendances vide = exécution unique au montage
  
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1)
  }
  
  const goToNext = () => {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1)
  }

  if (pictures.length <= 1) {
    return (
      <div className="slideshow">
        <img src={pictures[0]} alt="Logement" className="slideshow__image" />
      </div>
    )
  }

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt="Logement" className="slideshow__image" />
      
      <button onClick={goToPrevious} className="slideshow__button slideshow__button--prev">
        <img src={arrow} alt="Précédent" className="slideshow__arrow slideshow__arrow--prev" />
      </button>
      
      <button onClick={goToNext} className="slideshow__button slideshow__button--next">
        <img src={arrow} alt="Suivant" className="slideshow__arrow slideshow__arrow--next" />
      </button>
      
      <div className="slideshow__counter">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Slideshow