import logo from '../assets/logo.svg'
import '../saas/Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        <img src={logo} alt="logo du site kasa" className='footer__logo'/>
        <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer