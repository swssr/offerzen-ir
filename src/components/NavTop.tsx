import React from 'react'
import logo from "../assets/logo.svg"

export const NavTop = () => {
  return (
    <nav className="nav nav--top">
      <div className="content-wrapper content-wrapper--nav">
        <img src={logo} alt="offerzen logo" />
      </div>
    </nav>
  )
}

export default NavTop
