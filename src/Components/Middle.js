import React from 'react'
import { Link } from "react-router-dom";

const Middle = () => {
  return (
    <>
    <div className="middle_section">
          <div className="middle_part1">
            <div className="middle_img">
              <img src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/icon-img/1.png" alt="logo"></img><span className="span_gp">100% genuine Products</span>
            </div>

            <div className="mainheading">
              <h1> Tasty & Healthy <br />
                Organic Food

              </h1>
            </div>

            <div style={{ marginTop: "3.8rem" }}>
             <Link to="/data"> <button className="ep_btn">Explore Products</button></Link>
            </div>
          </div>

          <div className="main_img">
            <img src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/slider/23.png" alt="logo"></img>
          </div>


        </div>
    
    </>
  )
}

export default Middle
