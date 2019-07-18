import React from 'react'

const logoStyle = {
  color: '#fff',
  textTransform: 'uppercase',
  fontWeight: '900'
}

const Nav = () =>
  <nav className="uk-background-secondary uk-light" uk-navbar={"true"}>
      <div className="uk-navbar-left">
          <Logo link="#"/>
      </div>
  </nav>

const Logo = ({link}) =>
  <a style={logoStyle}  href={link} className="uk-navbar-item uk-logo">CRYPTO HEROES</a>

export default Nav
