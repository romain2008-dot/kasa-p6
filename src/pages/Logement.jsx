import { useParams } from 'react-router-dom'

function Logement() {
  const { id } = useParams()
  
  return <h1>Page Logement - {id}</h1>
}

export default Logement