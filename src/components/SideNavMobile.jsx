import React from "react"
import { Link } from "gatsby"

const MobileNav = ({ links, isOpen }) => {
  return (
    <>
      <div
        className={`mobile-nav-background block sm:hidden ${
          isOpen ? "open" : ""
        }`}
      ></div>
      <div class={`mobile-nav block sm:hidden p-8 ${isOpen ? "open" : ""}`}>
        {links.map(link => (
          <Link to={link.to}>{link.name}</Link>
        ))}
      </div>
    </>
  )
}

export default MobileNav
