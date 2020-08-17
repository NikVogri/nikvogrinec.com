import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [isDark, setDarkMode] = useState(false)

  return (
    <myContext.Provider
      value={{
        isDark,
        setDarkMode: val => setDarkMode(val || !isDark),
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
