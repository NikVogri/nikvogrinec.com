import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "../styles/sass/footer.scss"

const Footer = () => {
  return (
    <footer className="footer py-8 md:py-12">
      <div className=" container md:items-center md:flex md:justify-between text-center">
        <p className="m-0 mb-2 md:mb-0">Made in Slovenia</p>
        <p className="m-0 mb-6 md:mb-0">Copyright 2020. Nik Vogrinec</p>
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  links {
                    name
                    url
                    img
                  }
                }
              }
            }
          `}
          render={({ site }) => renderContent(site)}
        />
      </div>
    </footer>
  )
}

const renderContent = data => (
  <div className="flex items-center justify-center">
    {data.siteMetadata.links.map(link => (
      <a href={link.url} key={link.name}>
        <img src={`icons/${link.img}.svg`} alt={link.name} />
      </a>
    ))}
  </div>
)

export default Footer
