import React, { useState } from "react"

export const myContext = React.createContext()

const Provider = props => {
  const [isDark, setDarkMode] = useState(true)

  return (
    <myContext.Provider
      value={{
        isDark,
        setDarkMode: val => setDarkMode(val),
      }}
    >
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
