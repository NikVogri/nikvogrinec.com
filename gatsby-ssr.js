import React from "react"
import Provider from "./src/Context/ThemeContext"

export const wrapRootElement = Provider

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Poppins-Light.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Poppins-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Poppins-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
    <link
      rel="preload"
      href="/fonts/Poppins-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ])
  setPostBodyComponents([
    <script
      src="https://cdn.telemetrydeck.com/websdk/telemetrydeck.min.js"
      data-app-id="5B2883ED-92CC-4588-A8BC-88002875F5DC"
    ></script>,
  ])
}
