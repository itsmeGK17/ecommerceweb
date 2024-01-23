import Login from "./folder/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./folder/Register";
import Navbar from "./folder/Navbar"
import Dashbaord from "./folder/Dashbaord";
import About from "./folder/About"
import Product from "./folder/Product";
import Contact from "./folder/Contact";
import Homepage from "./folder/Homepage"
import { createContext, useState } from "react";
// import { NavLink } from "react-router-dom";
import Cart from "./folder/Cart";
import Categories from "./folder/Categories";

export const context = createContext()
// import folder from "./folder/Images/images.jpeg"
// import FontAwesomeIcon from "@fortawesome/free-regular-svg-icons"


function App() {

  const [Data, setData] = useState([])
  console.log("op", Data);

  const addToCart = (qq) => {

    setData([...Data, qq])
    console.log("gd", qq);
  }

  // {...qq,quantity:1}
  // count={Data.length}
  return (

    <div className="App">
      {/* // */}
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashbaord />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Homepage />} />
        {/* <context.provider  > */}
          <Route path="/cart" element={<Cart Data={Data} />} />
        {/* </context.provider> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>

    </div>
  );
}

export default App;
