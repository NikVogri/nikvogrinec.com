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
      <div className={`mobile-nav block sm:hidden p-8 ${isOpen ? "open" : ""}`}>
        {links.map(link => (
          <Link key={link.name} to={link.to}>
            {link.name}
          </Link>
        ))}
      </div>
    </>
  )
}

export default MobileNav
