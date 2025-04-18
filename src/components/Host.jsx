import '../saas/Host.scss'

function Host({ name, picture }) {
  const [firstName, lastName] = name.split(' ')
  
  return (
    <div className="host">
      <div className="host__name">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <img src={picture} alt={name} className="host__picture" />
    </div>
  )
}

export default Host