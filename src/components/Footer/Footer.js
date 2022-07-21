import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div>
        <p className="footer__sub">Make with love by</p>
        <img className="footer__logo" src="/images/icons/isologo-blanco.png" alt="MiLogo"/>
        <div className="footer__redes">
          <a href="https://linkedin.com/in/ariel-segovia">
            <img className="footer__icons" src="images/icons/linkedin.svg" alt="in"/>
          </a>
          <a href="https://www.instagram.com/alarse.ph/">
            <img className="footer__icons" src="images/icons/ig.svg" alt="ig"/>
          </a>
          <a href="https://open.spotify.com/playlist/4crebZdYRj1T9nDbpTvHJG?si=54e81e79b2d8459a">
            <img className="footer__icons" src="images/icons/spotify.svg" alt="spotify"/>
          </a>
          <a href="mailto:segovia.a.ariel@gmail.com">
            <img className="footer__icons" src="images/icons/emailw.svg" alt="email"/>
          </a>
        </div>
    </div>
    <div className="copyright">
        <p className="copyright__text">2022 | SEGOVIA FrontEnd Developer</p>
    </div>
</footer>
  )
}

export default Footer