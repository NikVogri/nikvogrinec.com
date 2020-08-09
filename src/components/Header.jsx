import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import ToggleDarkSvg from "../../public/images/toggle-dark.svg"
import SideNavMobile from "./SideNavMobile"
import "../styles/sass/header.scss"

const Header = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false)

  const mobileNavToggle = () => {
    !openMobileNav
      ? (document.body.style = "overflow: hidden;")
      : (document.body.style = "overflow-x: hidden;")

    setOpenMobileNav(!openMobileNav)
  }

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <>
      <nav className="navigation m-0 py-4 sm:py-8 fixed sm:relative z-10">
        <div className="flex justify-between items-center px-6 sm:px-0">
          <Link to="/">
            <p class="p-0 m-0 name">
              Nik<span>Vogrinec</span>
            </p>
          </Link>
          <div className="hidden sm:block links">
            {site.data.menu.map((link, key) => (
              <Link
                key={`menu_desktop_link${key}`}
                className="ml-6 sm:ml-8"
                to={link.to}
              >
                {link.name}
              </Link>
            ))}
            <img
              src={ToggleDarkSvg}
              alt="toggles dark mode"
              title="Dark Mode"
              className="ml-6 sm:ml-8 cursor-pointer"
            />
          </div>
          <div className="block sm:hidden flex align-center">
            <img
              src={ToggleDarkSvg}
              alt="toggles dark mode"
              title="Dark Mode"
              className="cursor-pointer mr-10"
            />
            <div className="burger-menu" onClick={mobileNavToggle}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <SideNavMobile links={site.data.menu} isOpen={openMobileNav} />
      </nav>
      <hr />
    </>
  )
}

export default Header
