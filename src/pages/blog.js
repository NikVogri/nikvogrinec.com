import { graphql } from "gatsby"
import React from "react"

import SiteMetadata from "../components/SiteMetadata.jsx"
import BlogCard from "../components/BlogCard"
import BlogsAside from "../components/BlogsAside"

import Layout from "../layouts/Layout"

import bgFade from "../images/shapes/bg-fade.svg"

import "../styles/sass/blog.scss"

const BlogPage = ({ data }) => {
  const {
    allContentfulBlog: { edges },
  } = data

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
          {edges.map(({ node }) => (
            <BlogCard
              key={node.slug}
              title={node.title}
              image={node.headingImage.file.url}
              date={node.date}
              description={node.excerpt.excerpt}
              link={`/blog/${node.slug}`}
            />
          ))}
        </div>
        <BlogsAside />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query AllBlogs {
    allContentfulBlog(limit: 3) {
      edges {
        node {
          slug
          title
          excerpt {
            excerpt
          }
          date(formatString: "DD.MM.YYYY")
          headingImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default BlogPage
