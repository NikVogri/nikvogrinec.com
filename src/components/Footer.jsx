import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import "../styles/sass/footer.scss"

const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            name
            url
            img
          }
        }
      }
    }
  `)

  return (
    <footer className="footer">
      <div className=" container items-center flex justify-between h-full">
        <p>Made in Slovenia</p>
        <p>Copyright 2020. Nik Vogrinec</p>
        <div className="flex items-center">
          {links.map(link => (
            <Link to={link.url}>
              <img
                src={`images/icons/${link.img}.svg`}
                alt={`${link.name} link`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
