import React from "react"
import PropTypes from "prop-types"

import "../styles/sass/button.scss"

const Button = ({ link, text }) => {
  return (
    <a href={link} className="button">
      {text}
    </a>
  )
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Button
