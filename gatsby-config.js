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
      { name: "PROJECTS", to: "/#projects" },
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
    title: `Nik Vogrinec Portfolio`,
    description: `Portfolio for full stack web developer Nik Vogrinec located in Slovenia.`,
    author: `@nikvogrinec`,
    categories: {
      items: ["PROGRAMMING", "DESIGN", "LIFE"],
    },
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
        name: `Nik Vogrinec Portfolio Site`,
        short_name: `nikvogrinecportfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2f80ed`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
