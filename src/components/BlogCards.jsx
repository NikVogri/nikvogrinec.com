import React from "react"
import { Link } from "gatsby"

import Title from "./Title"
import Button from "./Button"
import BlogCard from "./BlogCard"
import PlaceholderImage from "../images/react_wallpaper.jpg"

import "../styles/sass/blog-cards.scss"
import "../styles/sass/card.scss"

const BlogCards = () => {
  return (
    <section className="blog-cards py-16" id="blog-cards">
      <Title title="Check out my blog" />
      <div className="grid md:grid-cols-3 gap-12">
        {/* card */}
        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />
        {/* card */}
        {/* card */}
        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />
        {/* card */}
        {/* card */}
        <BlogCard
          title="Your First Five React Projects"
          image={PlaceholderImage}
          date="August 17, 2020"
          description="Five Begginer to Intermidiate Friendly Projects You Should Make"
          link="#"
        />
        {/* card */}
      </div>

      <div className="text-center button-container">
        <Button text="View All" link="/blog" />
      </div>
    </section>
  )
}

export default BlogCards
