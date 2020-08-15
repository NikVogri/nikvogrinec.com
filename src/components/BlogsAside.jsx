import React from "react"
import { Link } from "gatsby"

import "../styles/sass/blogs-sidebar.scss"

const BlogsAside = () => {
  return (
    <aside className="grid-spans-1 blogs-sidebar hidden md:block relative">
      <p className="py-3 m-0">Categories</p>
      <ul className="list-none m-0 p-0">
        <li>
          <Link to="/blog/html">
            &gt; <span>HTML</span>
          </Link>
        </li>
        <li>
          <Link to="/blog/css">
            &gt; <span>CSS</span>
          </Link>
        </li>
        <li>
          <Link to="/blog/sass">
            &gt; <span>SASS</span>
          </Link>
        </li>
        <li>
          <Link to="/blog/react">
            &gt; <span>REACT</span>
          </Link>
        </li>
        <li>
          <Link to="/blog/laravel">
            &gt; <span>LARAVEL</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default BlogsAside
