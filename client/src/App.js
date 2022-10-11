import React, { useState, useEffect } from 'react'
import UploadVideo from './UploadVideo'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/test").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div>
      {
        (typeof data.test === 'undefined') ? (
          <p> Loading ... </p>
        ) :
          (data.test.map((tes, i) => (
            <p key={i}>{tes}</p>
          ))
        )
      }
      <UploadVideo />
    </div>
  )
}

export default App