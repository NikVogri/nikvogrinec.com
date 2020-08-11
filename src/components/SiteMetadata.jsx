import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

const SiteMetadata = ({ title, description, image }) => {
  const {
    site: {
      siteMetadata: { locale },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          locale
          title
        }
      }
    }
  `)

  return (
    <Helmet
      defer={false}
      defaultTitle={title}
      title={title}
      titleTemplate={`${title}`}
    >
      <html lang={locale} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
    </Helmet>
  )
}

SiteMetadata.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
}

SiteMetadata.defaultProps = {
  image: "/social.png",
}

export default SiteMetadata
