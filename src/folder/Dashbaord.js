  import React, { useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import "./Dashboard.css";
  import { NavLink } from 'react-router-dom';
  import { Badge } from '@material-ui/core';
  import Button from '@mui/material/Button';
  // import FontAwesomeIcon from "@fortawesome/free-regular-svg-icons"

  const Dashbaord = (props) => {

    const [Api, setApi] = useState();
    // const [info, setInfo] = useState("");
    const [cdata, setCdata] = useState([]);
    const [items, setItems] = useState("");
    const [search, setSearch] = useState("");
    const [pages, setPages] = useState(1);
    // console.log(items);
    // 
    const navigate = useNavigate();



    useEffect(() => {

      // fetch(true === "" ? 'https://dummyjson.com/products?limit=100&skip=&select=title,price,images,thumbail' : `https://dummyjson.com/products/category${items}`)
      fetch(`https://dummyjson.com/products?limit=100`)
        .then((res) => res.json())
        .then((result) => setApi(result.products));

    }, [items]);
    console.log(Api);
    // console.log("aa", Api);



    // const {id} = useParams()

    useEffect(() => {

      fetch(`https://dummyjson.com/products/categories`)
        .then((res) => res.json())
        .then((result) => setCdata(result));
    }, []);

    const PageHandler = (selected) => {
      setPages(selected)
    };

    const filterApi = Api?.filter((el) => el?.title.toLowerCase().includes(search.toLowerCase()));

    return (
      <>

        <nav className='navbar'>
          <p> Shopper </p>

          <input
            type='search'
            value={search}
            // onChange={(e) => changeHandler()}
            onInput={(e) => setSearch(e.target.value)}
          >
          </input>

          <div className="nav-div">
            <div className='nav-link' style={{ color: 'white', textDecoration: " none", }}>

              {/* <select onChange={(e) => setItems(e.target.value)} >
                <option value="">All</option>
                {
                  cdata?.map((cc) => {
                    return (
                      <>
                        <option value={cc}>{cc}</option>
                      </>
                    )
                  })
                }</select> */}

            </div>

            <div >
              <NavLink className='nav-cart'>
                {/* <Badge badgeContent={Api.length}> */}
                <i class="ri-shopping-cart-line" onClick={() => navigate(`cart`)}></i>
                {/* </Badge> */}
              </NavLink>

              <NavLink style={{ color: 'white', marginLeft: "15px", textDecoration: " none" }}>
                {/* <i class="ri-heart-line"></i> */}
              </NavLink>

              <NavLink to="/" className="navlink" style={{ marginRight: "10px" }}>
                Logout
              </NavLink>
            </div>
          </div>
        </nav>

        {filterApi?.slice(pages * 10 - 10, pages * 10).map((el) => {
          return (
            <>
              <div
                class="card"
                className='card-wrap'
                style={{ width: "250px", height: "450px" }}
              >


                <div
                  className="card col-md-12 "
                  style={{ height: "350px", borderRadius: "20px" }}
                >

                  <img
                    src={el?.images[0]}
                    style={{ borderRadius: "20px", height: "250px" }}
                    className="card-img-top"
                    alt="..."
                    onClick={() => navigate(`/product/${el.id}`)}

                  />

                  <div className="card-body" style={{ marginTop: "10px" }}>

                    <h5 className="card-title" >{el.title}</h5>
                    {/* <h5>Rating:{el.rating} <i className="ri-star-fill"></i></h5>
                    <h5>Price:${el.price}</h5> */}
                    {/* </div>

                </div>

                  <img
                    src={el.images[0]}
                    style={{ width: "200px", height: "250px" }}
                    class="card-img-top" alt="..."
                    onClick={() => navigate(`/product/${el.id}`)}
                  />

                  <div class="card-body"  >
                    <h5 class="card-title" >{el.title}</h5>
                    {/* <h5>Rating:{el.rating} <i class="ri-star-fill"></i></h5>
                    <h5>Price:${el.price}</h5> */}



                    {/* <button
                      className='btn btn-success'
                      style={{ marginRight: "5px" }}
                      onClick={() => navigate("/cart")} >
                      Add to Cart
                    </button>

                    <button type="button" class="btn btn-outline-primary">Buy Now</button> */}

                  </div>
                </div >
              </div>


            </>

          );

        })};

        <div className='page'>
          <div className='pagination'>
          {Api?.length > 0 && (

            [...Array(Api.length / 10)].map((_, i) => {
              return <Button key={i} onClick={() => PageHandler(i + 1)}>{i + 1}</Button>
            })
          )
          }
  </div>
        </div>


      </>
    );
  };

  export default Dashbaord;