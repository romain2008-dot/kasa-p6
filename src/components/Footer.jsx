import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

function Footer() {
  return (
    <footer>
        <img src={logo} alt="logo du site kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer