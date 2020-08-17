import React from "react"
import "../styles/sass/title.scss"
import PropTypes from "prop-types"

const Title = ({ title, className }) => {
  return <h1 className={`title  ${className}`}>{title}</h1>
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Title
