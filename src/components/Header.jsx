import React from 'react'
import {images} from "../constants"

const Header = () => {
  return (
   <section>
   <header>
    <div>
      <img src={images.Logo} alt="logo"/>
    </div>
    
    <div>
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/">Article</a></li>
    <li><a href="/">Page</a></li>
    <li><a href="/">Pricing</a></li>
    <li><a href="/">Faq</a></li>

      </ul>
     </div>

    </header>
   </section>
  )
}

export default Header