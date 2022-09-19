import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header1">


                <div className="part1" style={{ display: "flex", marginLeft: "2.3rem" }}>
                    <h3 ><span><i className="fa-solid fa-location-dot"></i></span >15/A, Nest Tower, NYC</h3>
                    <div className="email_class">
                        <h3> <span><i className="fa-regular fa-envelope"></i></span>info@webmail.com</h3>
                    </div>
                </div>


                <div className="part2">
                    <div className="english_class">
                        <h3>English<span style={{ marginLeft: ".2rem" }}><i className="fa-solid fa-arrow-down-long"></i></span></h3>
                    </div>

                    < div className="icons">
                        <a href="https://www.facebook.com/"> <i className="fa-brands fa-facebook-f"></i> </a>
                        <a href="https://twitter.com/?lang=en-in"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.instagram.com/accounts/login/"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://dribbble.com/"><i className="fa-brands fa-dribbble"></i></a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Header
