import '../saas/Rating.scss'
import starActive from '../assets/star-active.svg'
import starInactive from '../assets/star-inactive.svg'

function Rating({ score }) {
  const stars = [1, 2, 3, 4, 5]
  
  return (
    <div className="rating">
      {stars.map((level) => (
        <img
          key={level}
          src={level <= score ? starActive : starInactive}
          alt={`${level}/5`}
          className="rating__star"
        />
      ))}
    </div>
  )
}

export default Rating