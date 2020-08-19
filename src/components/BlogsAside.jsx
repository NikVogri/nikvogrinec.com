import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import "../styles/sass/blogs-sidebar.scss"

const BlogsAside = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              categories {
                items
              }
            }
          }
        }
      `}
      render={({ site }) => renderContent(site)}
    />
  )
}

const renderContent = data => (
  <aside className="grid-spans-1 blogs-sidebar hidden md:block relative">
    <p className="py-3 m-0">Categories</p>
    <ul className="list-none m-0 p-0">
      {data.siteMetadata.categories.items.map(item => (
        <li key={item}>
          <Link to={`/blog/${item.toLowerCase()}`}>
            &gt; <span>{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  </aside>
)

export default BlogsAside
