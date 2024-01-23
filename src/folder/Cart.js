import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import "./Cart.css";
import { Badge } from '@material-ui/core';
// import  context from "../folder"

const Cart = ({ Data }) => {
  const [count, setCount] = useState(0)


  // const value = useContext()
  // console.log("uuuu", Data);

  // const [save, setSave] = useState()

  // useEffect(() => {

  //   const fetchData = () => {

  //     fetch(`https://dummyjson.com/products/`)
  //       .then((res) => res.json())
  //       .then((result) => setSave(result))

  //   }
  //   fetchData()
  // }, [])





  return (


    <>

      <nav className='navbar'>
        <p> Shopper </p>
        {/* <h4>{props.count}</h4> */}
        <NavLink className='nav-cart2'>
          <i class="ri-shopping-cart-line"></i>
        </NavLink>

      </nav>
      {
        Data?.map((dataItem, index) => {

          // console.log("dddd",dataItem);

          return (
            <>
              <div
                class="card "
                className='card-wrap'
                style={{ width: "350px", height: "300px" }}

              >
                <div
                  className="card"
                  style={{ height: "300px", marginTop: "40px", borderRadius: "20px" }}
                >

                  <img
                    src={dataItem.images[0]}
                    style={{ borderRadius: "20px",width:"300px", height: "250px" }}
                    className="card-img-top"
                    alt="..."
                  />


                </div>
                <div className="card-body1" style={{ marginTop: "10px" }}>

                  <div className="title1">
                    <h5>{dataItem.title}</h5>
                    <h5>Rating:{dataItem.rating} </h5>
                    <h5>Price:${dataItem.price}</h5>
                    {/* <h5>Description:{dataItem.description}</h5> */}
                    {/* <button className='btn5' onClick={() => setCount(count - 1)}>-</button>
                    <h4>{dataItem.quantity}</h4> 
                    <button className='btn5' onClick={() => setCount(count + 1)}>+</button> */}
                  </div>
                </div>

              </div>
              {/* <Badge badgeContent={Data?.length}>

              </Badge> */}

            </>
          )
        })
      }
      <div className='btn5 '>
        <button onClick={() => setCount(count - 1)} style={{ width: "35px", backgroundColor: "lightblue" }}>-</button>
        <h4>{count}</h4>
        <button onClick={() => setCount(count + 1)} style={{ width: "35px", backgroundColor: "lightblue" }}>+</button>
      </div>


    </>
  )
}

export default Cart