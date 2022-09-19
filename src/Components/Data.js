import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import { Link } from "react-router-dom";

const Data = () => {

    const [info, setInfo] = useState([]);
    const [query,setQuery] = useState("");
    console.log(query)

    useEffect(() => {
        const fetchApi = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
            const response = await fetch(url);

            const dataJson = await response.json();
            //console.log(dataJson.main);
            console.log(dataJson.drinks)
            setInfo(dataJson.drinks);
        }

        fetchApi();



    }, [])

    return (
        <>
            <div style={{
                backgroundImage: "url(https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/bg/9.jpg)",
                backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "50rem", filter: "brightness(0.6)"
            }}>

                <div className="second_header" style={{ position: "relative", top: "2.5rem", position: "sticky" }}>

                    <div className="img1">
                        <img src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/logo-2.png" alt="logo"></img>
                    </div>

                    <div className="ul-items">
                        <ul>
                            <li style={{ color: "white" }}>Home</li>
                            <li style={{ color: "white" }}>About</li>
                            <li style={{ color: "white" }}>Shop</li>
                            <li style={{ color: "white" }}>News</li>
                            <li style={{ color: "white" }}>Pages</li>
                            <li style={{ color: "white" }}>Contact</li>
                            <li style={{ color: "white", padding: "26px 33px", background: "#80B500", marginLeft: ".7rem" }}>GET A QUOTE</li>
                        </ul>

                    </div >

                    <div className="second_icons">
                        <div><i className="fa-solid fa-magnifying-glass"></i></div>
                        <div>  <i className="fa-regular fa-user"></i></div>

                        <div><i className="fa-solid fa-cart-shopping" ><span style={{ fontSize: ".9rem", position: "relative", left: "6px", bottom: "10px" }}>2</span></i></div>

                    </div>

                </div>

                <div className="pg2-heading">
                    <div style={{position:"relative",right:"22rem"}}>
                    <div className="head1_pg2">
                        <h3>// WELCOME TO OUR COMPANY</h3>
                    </div>
                    <div className="head2_pg2">
                        <h1>Shop</h1>
                    </div>
                    </div>

                    <div className="redirect_class">
                        <ul>
                           <Link to="/"><li style={{position:"relative",left:"3rem",fontSize:"1.5rem",color:"white"}}>Home</li> </Link> 
                            <li style={{fontWeight:"bold",fontSize:"1.4rem",color:"white"}}>|</li>
                            <li  style={{position:"relative",right:"3rem",color:"#76a900",fontSize:"1.5rem"}}>Shop</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="search_class">
                <input type="text" placeholder="Search" value={query} onChange={(e)=>setQuery(e.target.value)}></input>
            </div>


           <Cards info={info} query={query}/>

        </>
    );
}

export default Data
