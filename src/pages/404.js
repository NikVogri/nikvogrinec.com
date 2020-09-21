import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

import NotFound from "../images/icons/not_found.svg"

import "../styles/sass/errorPage.scss"

const ErrorPage = () => (
  <Layout>
    <SiteMetadata title="Error 404" description="The page doesn't exists" />
    <div className="container error-page  flex flex-col items-center justify-center w-full ">
      <img src={NotFound} alt="Not found" className="mb-6" />
      <h1>
        <span>404 |</span> This page does not exist
      </h1>
    </div>
  </Layout>
)

export default ErrorPage
