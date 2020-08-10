import React from "react"

import "../styles/sass/button.scss"

const Button = ({ link, text }) => {
  return (
    <a href={link} className="button">
      {text}
    </a>
  )
}

export default Button
