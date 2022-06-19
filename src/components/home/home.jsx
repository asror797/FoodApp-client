import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/deliveryapp.jpg'
import './home.css'


function Home() {

   const [restaurants , setRestaurant ] = useState([])

   useEffect(() => {
      fetch('http://localhost:9000/restaurants')
         .then(res => res.json())
         .then(data => {
            setRestaurant(data)
         })
   },[])


   return(
      <>
         <div className="container">
            <div className="header-home">
                  <img width={295} src={logo} alt="logo" />
            </div>
            <div className="wrapper">
               <Outlet/>
            </div>
         </div>
      </>
   )
}

export default Home;