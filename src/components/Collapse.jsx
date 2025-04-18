import { useState, useRef, useEffect } from 'react'
import '../saas/Collapse.scss'
import chevron from '../assets/chevron-up.svg'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)
  
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`)
    }
  }, [isOpen])
  
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <button className="collapse__button" onClick={toggleCollapse}>
        <span className="collapse__title">{title}</span>
        <span className={`collapse__arrow ${isOpen ? 'collapse__arrow--up' : ''}`}>
          <img src={chevron} alt="chevron vers le haut" className="collapse__icon" />
        </span>
      </button>
      <div 
        className="collapse__content"
        style={{ height: isOpen ? contentHeight : 0 }}
      >
        <div 
          ref={contentRef}
          className={`collapse__inner ${isOpen ? 'collapse__inner--visible' : ''}`}
        >
          {content}
        </div>
      </div>
    </div>
  )
}

export default Collapse