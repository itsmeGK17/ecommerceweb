import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Dashboard.css"

import photo from "../folder/Images/istockphoto-489803256-1024x1024.jpg"
const Homepage = () => {

    return (
        <>
            <nav className='navbar'>
                <p> Shopper </p>

                <div className="nav-div">
                    <div className='nav-link'>
                        <NavLink to="/about" className="navlink" style={{ marginRight: "10px" }}>
                            About
                        </NavLink>

                        <NavLink to="/contact" className="navlink" style={{ marginTop: "1%" }}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </nav>

            <div className="shop">
                <h4>Welcome to </h4>
                <h2 style={{ color: "blue" }}>Shopper</h2>

                <p className='paragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Mollitia vero incidunt unde eum delectus eos earum minus quisquam ratione?
                    Est sequi nostrum dicta maxime voluptate doloribus unde.
                    Quis, possimus natus!</p>
            </div>

            <NavLink to="/dashboard" className="btn btn-outline-primary" style={{ marginLeft: "150px" }} >Shop Now</NavLink>

            <div className='photo' >
                <img src={photo} alt='' width="400px" height="300px" />
            </div>

        </>
    )
}

export default Homepage