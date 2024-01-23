import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <NavLink className="navbar-brand"  >Navbar</NavLink>

                    <div className="nav-item ">
                        <NavLink className="navbar-brand" to={"/home  "}>Homepage</NavLink>
                        <NavLink className="navbar-brand" to={"/product"}>Product</NavLink>
                        <NavLink className="navbar-brand" to={"/cart"}>Cart</NavLink>
                    </div>
                </div>



            </nav>
        </div>
    )
}

export default Navbar