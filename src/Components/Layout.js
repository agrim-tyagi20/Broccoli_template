
import React from 'react'
import "../Components/CSS/style.css"
import Header from "./Header"

import Middle from "./Middle"


const Layout = () => {
  return (
    <>
      <div className="container" >
        <header >
          <Header/>


          <div className="second_header" style={{margin:" 2rem 9rem 0 0"}}>

            <div className="img1">
              <img src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/logo.png" alt="logo" ></img>
            </div>

            <div className="ul-items">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>News</li>
                <li>Pages</li>
                <li>Contact</li>
                <li style={{ color: "white", padding: "26px 33px", background: "#80B500", marginLeft: ".7rem" }}>GET A QUOTE</li>
              </ul>

            </div >

            <div className="second_icons">
              <div><i className="fa-solid fa-magnifying-glass"></i></div>
              <div>  <i className="fa-regular fa-user"></i></div>

              <div><i className="fa-solid fa-cart-shopping" ><span style={{ fontSize: ".9rem", position: "relative", left: "6px", bottom: "10px" }}>2</span></i></div>

            </div>

          </div>
        </header>


        <Middle/>

      </div>
    </>
  )
}

export default Layout
