import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div>
        <header/>
        {children}
        <footer/>
     </div>
  )
}

export default MainLayout