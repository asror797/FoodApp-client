import { useState } from "react";
import { useEffect } from "react";
import {Link, useParams} from 'react-router-dom'
import logo from '../../../assets/deliveryapp.jpg'


function RestaurantHome() {

   const {id} = useParams()
   const [branches , setBranches ] = useState([])

   
   const [restaurants , setRestaurants] = useState([])
   
   useEffect(() => {
      fetch('http://localhost:9000/restaurants')
      .then(res => res.json())
      .then(data => {
         setRestaurants(data)
      })
   },[])

   useEffect(() => {
      if(id) {
         fetch(`http://localhost:9000/branch${id}`)
            .then(res => res.json())
            .then(data => {
               setBranches(data)
            })
      }
   },[])

   return(
      <>
         <ul className="restaurant-cards">
                  {
                     restaurants.map(e => {
                        let link = `/restaurant/${e.id}`
                        return(
                           <>
                              <li className="card-res">
                                 <Link to={link}>{e.name}</Link>
                              </li>
                           </>
                        )
                     })
                  }
         </ul>

         
      </>
   )
}

export default RestaurantHome;