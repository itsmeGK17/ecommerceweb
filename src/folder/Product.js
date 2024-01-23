import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Dashboard.css"

// import Dashbaord from './Dashbaord'

const Product = ({ addToCart }) => {

  let { id } = useParams()
  const [store, setStore] = useState();

  const navigate = useNavigate()

  useEffect(() => {

    const fetchData = () => {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((result) => setStore((result)));


    }

    fetchData()
  }, [])
  console.log("call", store);

  // const handlecart = () => {
  //   addToCart(store)
  
  // }



  return (
    <>

      <div
        id="carouselExample"
        className="carousel slide">

        <div className="carousel-inner">

          <div className="carousel-item active">

            <img
              src={store?.images[0]}
              className="d-block"
              alt="..."
              style={{ width: "auto", height: "200px", marginLeft: "33%", marginTop: "50px" }}
            />
            {/* <img
              src={store?.images[1]}
              className="d-block"
              alt="..."
              style={{ width: "auto", height: "200px", marginLeft: "33%", marginTop: "50px" }}
            />
            <img
              src={store?.images[2]}
              className="d-block"
              alt="..."
              style={{ width: "auto", height: "200px", marginLeft: "33%", marginTop: "50px" }}
            />
            <img
              src={store?.images[3]}
              className="d-block"
              alt="..."
              style={{ width: "auto", height: "200px", marginLeft: "33%", marginTop: "50px" }}
            /> */}
          </div>


          <div
            className="card-body"
            style={{ marginTop: "300px", marginLeft: "33%" }}>

            <h5
              className="card-title">
              {store?.title}
            </h5>

            <h5
              className="card-title"
              style={{ color: "blue" }}>
              $ {store?.price}
            </h5>

            <h5
              className="card-title"
              style={{ color: "orange" }}>
              Rating:{store?.rating}
            </h5>

            <h5>
              {store?.discountPercentage}% OFF
            </h5>

            <p
              className="card-text"
              style={{ color: "black", fontWeight: "normal" }}
            >
              About:{store?.description}
            </p>

           <a
              hreFor=""
              className="btn btn-primary"
              style={{ width: "300px" }}
              onClick={() => {
                addToCart(store)
                navigate("/cart")
              } 
              }
            >
              Add to cart
            </a>

            <a
              hreFor=""
              className="btn btn-outline-primary"
              style={{ width: "300px", display: "flex", marginTop: "15px" }}
            >
              Buy Now
            </a>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>





      {/* <div className="card-detail" style={{ width: "18rem" }}>
        <img src={store.images} className="card-img-top" alt="..." />
        <img src={store.images} className="card-img-top1"  alt="..." />
        <img src={store.images} className="card-img-top2" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{store.title}</h5>
          <h5 className="card-title" style={{color:"blue"}}>$ {store.price}</h5>
          <h5 className="card-title" style={{color:"orange"}}>Rating:{store.rating}</h5>
          <h5>{store.discountPercentage}% OFF</h5>
          <p className="card-text" style={{ color: "black"}}>{store.description}</p>
          <a href="#" className="btn btn-primary" style={{width:"300px"}}> Add to cart</a>
   
        </div>
      </div> */}
    </>
  )
}

export default Product