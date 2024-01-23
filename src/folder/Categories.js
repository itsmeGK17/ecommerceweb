// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// const Categories = () => {

//     const [cdata, setCdata] = useState([])

//     const navigate = useNavigate()

//     // const {id} = useParams()

//     useEffect(() => {

//         fetch(`https://dummyjson.com/products/categories`)
//             .then((res) => res.json())
//             .then((result) => setCdata(result))
//     }, [])
//     console.log("rr", cdata);




//     return (

//         <>
//             <nav className='navbar'>

//                 <p>
//                     Shopper
//                 </p>
                
//                 <div>
                    
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Categories