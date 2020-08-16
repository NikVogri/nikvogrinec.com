import React from "react"
import ProjectCard from "./ProjectCard"
import Title from "./Title"

import Dodecahedron from "../images/shapes/dodecahedron.svg"
import Cube from "../images/shapes/cube.svg"

import "../styles/sass/projects.scss"

const Projects = () => {
  const projects = [
    {
      title: "Freecourso",
      description: `Freecourso is a free course site built with GatsbyJS in the front-end and Firebase back-end.Freecourso's goal is to provide educational tools - for free - 
        to anyone interested in learning and advancing themselves in the art of programming. As the project grows we often add additional 
        video material and small quizzes to test your knowledge.`,
      urls: [
        {
          name: "Github",
          url: "https://github.com/NikVogri/course-site",
        },
        {
          name: "Live Site",
          url: "https://freecourso.netlify.app/",
        },
      ],
    },
    {
      title: "Filmetor",
      description: `Filmetor is a social-network platform for finding movies & tv shows and rating them based on your
       viewing experience with the content. It is built with the very popular ReactJS and Redux to help with the complexity. The project also required a back-end 
       so I went with NodeJS's express framework & SocketIO for realtime communication between users. 
       `,
      urls: [
        {
          name: "Github",
          url: "https://github.com/NikVogri/movie-searcher-react",
        },
        {
          name: "Live Site",
          url: "https://filmetor.netlify.app/",
        },
      ],
    },

    {
      title: "Manineta ecommerce website",
      description: `Manineta Graviranje is an e-commerce web store for a small company. 
      The project is built in GatsbyJS an amazing framework built on React, and Contentful content management
       system for managing content displayed on the website.`,
      urls: [
        {
          name: "Github",
          url: "https://github.com/NikVogri/manineta-site",
        },
      ],
    },
    {
      title: "Restaurant CMS & Front",
      description: `
      A fully functional restaurant website built in PHP and Laravel. It is a complete CMS which allows admins and staff to edit items, 
      create payment options, manage menus, etc... And it allows visitors to order their favourite food in a matter of seconds!
      `,
      urls: [
        {
          name: "Github",
          url: "https://github.com/NikVogri/restaurant-cms-laravel",
        },
      ],
    },
    {
      title: "Complex Data Tracker",
      description: `A complex data tracker which get's the data by scraping the internet, and displays the data with a custom built API in NodeJS and express.
      Data is collected in increments of 2 hours by the scraper and gets stored to a MySQL database for 31 days.
      `,
      urls: [
        {
          name: "Scraper",
          url: "https://github.com/NikVogri/virus-table-scraper",
        },
        {
          name: "API",
          url: "https://github.com/NikVogri/virus-statistics-api",
        },
        {
          name: "Live Site",
          url: "https://virus-corona-tracker.netlify.app/",
        },
      ],
    },
  ]

  return (
    <section className="projects  py-16 md:py-0" id="projects">
      {/* <img src={Cube} alt="background" className="projects-bg-1" />
      <img src={Dodecahedron} alt="background" className="projects-bg-2" /> */}
      <Title title="Some Projects I’ve Worked On" />
      {projects.map(project => (
        <ProjectCard
          key={project.title}
          name={project.title}
          description={project.description}
          urls={project.urls}
        />
      ))}
      <div className="projects-container"></div>
    </section>
  )
}

export default Projects
