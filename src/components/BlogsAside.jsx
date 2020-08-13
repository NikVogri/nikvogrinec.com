import React from "react"

import "../styles/sass/blogs-sidebar.scss"

const BlogsAside = () => {
  return (
    <aside className="grid-spans-1 blogs-sidebar hidden md:block relative">
      <p className="py-3 m-0">Categories</p>
      <ul className="list-none m-0 p-0">
        <li>
          <a href="/blogs/html">
            &gt; <span>HTML</span>
          </a>
        </li>
        <li>
          <a href="/blogs/css">
            &gt; <span>CSS</span>
          </a>
        </li>
        <li>
          <a href="/blogs/sass">
            &gt; <span>SASS</span>
          </a>
        </li>
        <li>
          <a href="/blogs/react">
            &gt; <span>REACT</span>
          </a>
        </li>
        <li>
          <a href="/blogs/laravel">
            &gt; <span>LARAVEL</span>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default BlogsAside
