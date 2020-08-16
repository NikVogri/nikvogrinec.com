import { useState, useCallback } from "react"

const useLocalStorage = () => {
  const [data, setData] = useState(null)

  const addToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  const getFromlocalStorage = key => {
    const data = JSON.parse(localStorage.getItem(key))
    setData(data)
  }

  const removeFromLocalStorage = key => {
    localStorage.removeItem(key)
    setData(null)
  }

  return {
    data,
    addToLocalStorage,
    getFromlocalStorage,
    removeFromLocalStorage,
  }
}

export default useLocalStorage
