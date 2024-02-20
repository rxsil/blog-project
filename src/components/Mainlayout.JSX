import React from 'react'

const MAINLAYOUT = ({children}) => {
  return (
    <div>
        <header/>
        {children}
        <footer/>
     </div>
  )
}

export default MAINLAYOUT