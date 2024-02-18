import React from 'react'
import "./Loader.css"
import { ClipLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="loader">
        <ClipLoader color="#1838f0" />
        <p>Loading Dashboard...</p>
    </div>
  )
}

export default Loader;