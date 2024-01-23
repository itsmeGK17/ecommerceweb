import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import { GoogleLogin } from "@react-oauth/google"
import { NavLink } from 'react-router-dom';
import Register from './Register';

const Login = () => {

  const [user, setUser] = useState([])
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("value"))
    // console.log(getData);
    setUser(getData)
  }, [])
  // console.log("user", user);


  const submitData = (e) => {

    e.preventDefault()

    let dataFilter = user?.filter((el) => el?.email === Email)

    // console.log("dataFilter", dataFilter);

    if (dataFilter?.Email === "" && dataFilter.Password === "") {
      alert("first Register")
    }
    else if (!dataFilter?.length >= 1) {
      alert("login denied")
    } else if (!Email) {
      alert("invalid email")
    } else if (!Password) {
      alert("invalid Password")
    } else {
      alert("Login Success")
      setEmail("")
      setPassword("")
      navigate("/home")
    }


  }
  const loginHandle = () => {
    // console.log(loginHandle);
  }

  return (
    <>
      <div>
        <h1 style={{ marginLeft: "700px", color: "blue" }}>Login</h1>
      </div>
      <TextField
        id="outlined-basic"
        type='email'
        value={Email}
        style={{ margin: "10px 560px", width: "400px" }}
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        id="outlined-basic"
        type='password'
        value={Password}
        style={{ margin: "10px 560px", width: "400px" }}
        label="Password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          style={{ margin: "10px 560px" }}
          onClick={submitData}>
          Login
        </Button>


      </div>

      <div
        style={{ margin: "10px 650px" }}>
        <span>Dont have an Account?</span> <NavLink to={"/register"}> Sign up</NavLink>
      </div>
      <p style={{ marginLeft: "38%", width: "350px", marginTop: "20px" }}><b>Or</b></p>
      <div style={{ marginLeft: "30%", width: "350px", marginTop: "20px" }}>
        <GoogleLogin
          onSuccess={loginHandle}
        />
      </div>
    </>
  )
}

export default Login