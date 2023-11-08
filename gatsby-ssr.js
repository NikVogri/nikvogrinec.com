import React from "react"
import Provider from "./src/Context/ThemeContext"

export const wrapRootElement = Provider

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
      data-app-id="5B2883ED-92CC-4588-A8BC-88002875F5DC"
    ></script>,
  ])
}
