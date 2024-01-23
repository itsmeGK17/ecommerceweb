import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { NavLink, useNavigate } from 'react-router-dom'


const Register = () => {


    const [datastore, setDataStore] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [mobileNoErr, setMobileNoErr] = useState("")
    const [passwordErr, setPasswwordErr] = useState("")
    const [cpasswordErr, setCpasswordErr] = useState("")
    const navigate = useNavigate("")

    useEffect(() => {
        let newdata = JSON.parse(localStorage.getItem("value"))
        // console.log(newdata);
        setDataStore(newdata)
    }, [])
    // console.log(datastore);

    const handleRegister = (e) => {
        e.preventDefault()

        const data = { name, email, mobileNo, password, cpassword }
        console.log(data);

        if (!name) {
            setNameErr("enter name*")
        }  if (!email) {
            setEmailErr("enter Email*")
        } if (!mobileNo) {
            setMobileNoErr("enter mobileNo*")
        } if (!password) {
            setPasswwordErr("enter password*")
        }if (!cpassword) {
            setCpasswordErr("enter Confirm password*")
        }if (password !== cpassword) {
            alert("both password are not match")
        } else {

            if (datastore?.length === undefined) {
                localStorage.setItem("value", JSON.stringify([data]))
                
                alert("register successfull")
                setName("")
                setEmail("")
                setMobileNo("")
                setCpassword("")
                setPassword("")
                navigate("/")
            } else {
                localStorage.setItem("value", JSON.stringify([...datastore, data]))

                alert("register successfull")
                setName("")
                setEmail("")
                setMobileNo("")
                setCpassword("")
                setPassword("")
                navigate("/")
            }
        }

    }


    return (
        <>
            <div>
                <h1 style={{ marginLeft: "700px", color: "blue" }}>Login</h1>
            </div>
            <TextField
                id="outlined-basic"
                type='name'
                value={name}
                style={{ margin: "10px 560px", width: "400px" }}
                label="Name"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}

            />
            <span style={{ color: "red", marginLeft: "570px" }}>{nameErr}</span>
            <TextField
                id="outlined-basic"
                type='email'
                value={email}
                style={{ margin: "10px 560px", width: "400px" }}
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
            />
            <span style={{ color: "red", marginLeft: "570px" }}>{emailErr}</span>
            <TextField
                id="outlined-basic"
                type='number'
                value={mobileNo}
                style={{ margin: "10px 560px", width: "400px" }}
                label="MobileNo"
                variant="outlined"
                onChange={(e) => setMobileNo(e.target.value)}
            />
            <span style={{ color: "red", marginLeft: "570px" }}>{mobileNoErr}</span>
            <TextField
                id="outlined-basic"
                type='password'
                value={password}
                style={{ margin: "10px 560px", width: "400px" }}
                label="Password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
            />
            <span style={{ color: "red", marginLeft: "570px" }}>{passwordErr}</span>
            <TextField
                id="outlined-basic"
                type='password'
                value={cpassword}
                style={{ margin: "10px 560px", width: "400px" }}
                label="Confirm Password"
                variant="outlined"
                onChange={(e) => setCpassword(e.target.value)}
            />
            <span style={{ color: "red", marginLeft: "570px" }}>{cpasswordErr}</span>
            <div>
                <Button
                    variant="contained"
                    style={{ margin: "10px 560px" }}
                    onClick={handleRegister}>
                    Register Now
                </Button>
            </div>
            <div>
                <span style={{ marginLeft: "720px" }} >Have An Account</span> <NavLink to={"/"}  >Sign in</NavLink>

            </div>
        </>
    )
}

export default Register