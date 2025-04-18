import { useState, useEffect } from 'react'
import '../saas/Carrousel.scss'
import arrow from '../assets/chevron-up.svg'

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    pictures.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])
  
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1)
  }
  
  const goToNext = () => {
    setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1)
  }

  if (pictures.length <= 1) {
    return (
      <div className="carrousel">
        <img src={pictures[0]} alt="Logement" className="carrousel__image" />
      </div>
    )
  }

  return (
    <div className="carrousel">
      <img src={pictures[currentIndex]} alt="Logement" className="carrousel__image" />
      
      <button onClick={goToPrevious} className="carrousel__button carrousel__button--prev">
        <img src={arrow} alt="Précédent" className="carrousel__arrow carrousel__arrow--prev" />
      </button>
      
      <button onClick={goToNext} className="carrousel__button carrousel__button--next">
        <img src={arrow} alt="Suivant" className="carrousel__arrow carrousel__arrow--next" />
      </button>
      
      <div className="carrousel__counter">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Carrousel