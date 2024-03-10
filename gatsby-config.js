require("dotenv").config({
  path: "./config.env",
})

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "HOME", to: "/" },
      { name: "ABOUT", to: "/#about" },
      { name: "BLOG", to: "/blog" },
    ],
    links: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nik-vogrinec/",
        img: "FaLinkedin",
      },
      {
        name: "Github",
        url: "https://github.com/NikVogri",
        img: "FaGithub",
      },
      {
        name: "CodePen",
        url: "https://codepen.io/nickvogri",
        img: "FaCodepen",
      },
    ],
    locale: "en",
    title: `Nik Vogrinec`,
    description: `My name is Nik Vogrinec and I am full-stack web developer located in Slovenia. 
    I work with Laravel, PHP, Node, Express, React, Gatsby, CSS, JS, HTML5, MySQL, Bootstrap, and various other technology.`,
    author: `@nikvogrinec`,
    categories: {
      items: ["PROGRAMMING", "LIFE"],
    },
    siteUrl: "https://www.nikvogrinec.com",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nik Vogrinec`,
        short_name: `nikvogrinecportfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2f80ed`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {path
              context {
                lastModifiedDate
              }}
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: `${site.siteMetadata.siteUrl}${edge.node.path}`,
              lastmod: edge.node.context.lastModifiedDate
                ? edge.node.context.lastModifiedDate.substring(0, 10)
                : null,
              priority: 0.7,
            }
          }),
      },
    },
  ],
}
