import React from "react"
import { Link } from "gatsby"

import Title from "./Title"
import Button from "./Button"

import PlaceholderImage from "../images/react_wallpaper.jpg"

import "../styles/sass/blog-cards.scss"

const BlogCards = () => {
  return (
    <section className="blog-cards py-16" id="blog-cards">
      <Title title="Check out my blog" />
      <div className="grid md:grid-cols-3 gap-12">
        {/* card */}
        <div className="shadow-md rounded-lg overflow-hidden">
          <div className="card-image-container">
            <Link to="#">
              <img src={PlaceholderImage} alt="blog" className="w-full" />
            </Link>
          </div>
          <div className="card-info p-8">
            <Link to="#">
              <h4 className="my-4">Your First Five React Projects</h4>
            </Link>
            <span>August 17, 2020</span>
            <p className="my-12">
              Five Begginer to Intermidiate Friendly Projects You Should Make
            </p>
          </div>
        </div>
        {/* card */}
        {/* card */}
        <div className="shadow-md rounded-lg overflow-hidden">
          <div className="card-image-container">
            <img src={PlaceholderImage} alt="blog" className="w-full" />
          </div>
          <div className="card-info p-8">
            <Link to="#">
              <h4 className="my-4">Your First Five React Projects</h4>
            </Link>
            <span>August 17, 2020</span>
            <p className="my-12">
              Five Begginer to Intermidiate Friendly Projects You Should Make
            </p>
          </div>
        </div>
        {/* card */}
        {/* card */}
        <div className="shadow-md rounded-lg overflow-hidden">
          <div className="card-image-container">
            <img src={PlaceholderImage} alt="blog" className="w-full" />
          </div>
          <div className="card-info p-8">
            <Link to="#">
              <h4 className="my-4">Your First Five React Projects</h4>
            </Link>
            <span>August 17, 2020</span>
            <p className="my-12">
              Five Begginer to Intermidiate Friendly Projects You Should Make
            </p>
          </div>
        </div>
        {/* card */}
      </div>

      <div className="text-center button-container">
        <Button text="View All" link="/blog" />
      </div>
    </section>
  )
}

export default BlogCards
