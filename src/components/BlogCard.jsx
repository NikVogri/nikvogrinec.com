import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ title, image, date, description, link }) => {
  return (
    <div className="shadow-md rounded-lg overflow-hidden card hover:shadow-lg transition-all duration-500">
      <div className="card-image-container">
        <Link to={link}>
          <img src={image} alt="blog" className="w-full" />
        </Link>
      </div>
      <div className="card-info p-8">
        <Link to={link}>
          <p className="my-4 card-title">{title}</p>
        </Link>
        <span class="mt-3 inline-block">{date}</span>
        <p className="my-12">{description}</p>
      </div>
    </div>
  )
}

export default BlogCard
