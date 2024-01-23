import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// import {backgroundImage} from "../../public/Images/backgrroundimage.png"



const About = () => {

    const navigate = useNavigate();
    return (
        <>
            <nav className='navbar'>

                <p>
                    Shopper
                </p>
                <NavLink to="/home" className="navlink" style={{ marginRight: "10px"}}>
                            Home
                        </NavLink>
                <div style={{ marginTop: "50px" }}>
                    {/* <img src='' style={{backgroundImage:URL("../../public/Images/backgrroundimage.png")}}></img> */}

                    <h2>About SHOPPER</h2>

                    <i>Welcome to SHOPPER – Your Ultimate Destination for Online Shopping!</i>


                    At SHOPPER, we believe that shopping is more than just a transaction;
                    it's an experience.
                    Our mission is to provide you with a seamless and enjoyable online shopping journey,
                    offering a wide range of high-quality products at your fingertips.

                    <h2>Our Story</h2>


                    Founded in [Year], SHOPPER emerged from a shared passion for delivering exceptional customer experiences in the digital marketplace.
                    We envisioned a platform that not only simplifies the online shopping process but also brings joy and satisfaction to our customers. <br />

                    <h6>
                        We love hearing from our customers. If you have any questions, feedback,
                        or just want to say hello,
                        don't hesitate to reach out to our friendly customer support team at [contact@shopper.com] or through our [Contact Us] page.

                        Thank you for choosing SHOPPER. Happy Shopping!
                    </h6> <br />

                    {/* <button className="btn btn-primary" onClick={() => navigate("/contact")}>Contact Us</button> */}

                    <div style={{ backgroundColor: "lightblue", marginLeft: "100px", marginTop: "100px", width: "100rem", textAlign: "center" }}>
                        <h5>Copyright@2023</h5>
                    </div>


                </div>
            </nav>
        </>

    )
}

export default About