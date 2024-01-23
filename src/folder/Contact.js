import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import Login from "./Login";
import { NavLink } from 'react-router-dom';

const Contact = () => {
    const [user, setUser] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem("value"))
        // console.log(getData);
        setUser([getData])
    }, [])


    const messageSend = (e) => {
        e.preventDefault()

        let dataFilter = user?.filter((el) => el?.email === email)
        console.log("ddd", dataFilter);

        if (name === "") {
            alert("enter your name")
        } else if (email === "") {
            alert("enter your email")
        } else if (message === "") {
            alert("Enter your Message")
        } else {
            alert("Message Successfully")
            setEmail("")
            setName("")
            setMessage("")
        }
    }
    return (
        <>
            <h2 style={{ textAlign: 'center', }}>Contact</h2>

            
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.322717796029!2d72.89482447592165!3d21.219047781214304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f62b7f55549%3A0x4683d1e9e82792f!2s6WC2%2BQ28%20Royal%20Plaza%2C%2051%2C%20Laxmibai%20Nagar%20Society%2C%20Simada%20Gam%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1701927862707!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referRerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginLeft: "33%",
                    marginTop: "20px",
                    outline: "none"
                }}
            >
                <input
                    type="text"
                    name="Name"
                    required
                    autoComplete='off'
                    placeholder='Enter Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    name="Email"
                    placeholder='Enter Email'
                    required
                    autoComplete='off'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                    type="text"
                    name='Message'
                    placeholder='Enter your Message'
                    autoComplete='off'
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ width: "400px", height: "100px" }}

                ></textarea>

            </div>

            <button
                className='btn btn-outline-primary'
                style={{ marginLeft: "33%", marginTop: "10px" }}
                onClick={messageSend}
            >
                Send
            </button>
            
        </>
    )
}

export default Contact