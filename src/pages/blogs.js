// import { graphql } from "gatsby"
import React from "react"

import SiteMetadata from "../components/SiteMetadata.jsx"
import BlogCard from "../components/BlogCard"
import BlogsAside from "../components/BlogsAside"

import PlaceholderImage from "../images/react_wallpaper.jpg"

import Layout from "../layouts/Layout"

import bgFade from "../images/shapes/bg-fade.svg"

import "../styles/sass/blog.scss"

const BlogPage = () => {
  return (
    <Layout>
      <SiteMetadata
        title="Blogs | Nik Vogrinec"
        description="Check out my blogs on web development. I make a blog whenever I feel like it!"
      />
      <header className="blogs-header relative md:pt-20">
        <img src={bgFade} alt="test" className="test" />
        <h1>My Blog</h1>
        <p>
          Mostly whatever is on my mind mixed with web development tips and
          tricks.
        </p>
      </header>
      <hr />
      <section className="md:grid grid-cols-3 gap-20 mt-8">
        <div className="col-span-2 w-full ">
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
            className="my-4"
            description="Five Begginer to Intermidiate Friendly Projects You Should Make"
            link="#"
          />
          <BlogCard
            title="Your First Five React Projects"
            image={PlaceholderImage}
            date="August 17, 2020"
            className="my-4"
            description="Five Begginer to Intermidiate Friendly Projects You Should Make"
            link="#"
          />
        </div>
        <BlogsAside />
      </section>
    </Layout>
  )
}

export default BlogPage
