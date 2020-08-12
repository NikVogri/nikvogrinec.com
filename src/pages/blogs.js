// import { graphql } from "gatsby"
import React from "react"

import SiteMetadata from "../components/SiteMetadata.jsx"
import BlogCard from "../components/BlogCard"

import PlaceholderImage from "../images/react_wallpaper.jpg"

import Layout from "../layouts/Layout"

import "../styles/sass/card.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SiteMetadata title="Blog Title" description="Blog Description" />
      <section className="grid md:grid-cols-3 lg:grid-cols-4 gap-12  blogs-container py-20">
        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />
        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />
        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />
        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />

        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />
        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />
        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />
      </section>
    </Layout>
  )
}

export default IndexPage
