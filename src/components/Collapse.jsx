import { useState } from 'react'
import '../saas/Collapse.scss'
import chevron from '../assets/chevron-up.svg'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapse__title">{title}</span>
        <span className={`collapse__arrow ${isOpen ? 'collapse__arrow--up' : ''}`}>
          <img src={chevron} alt="chevron vers le haut" className="collapse__icon" />
        </span>
      </button>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  )
}

export default Collapse