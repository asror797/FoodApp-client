
import { useEffect, useState } from 'react';
import './content.css'
import ResModal from './modal/restaurant';


function Restaurant() {
   

   const [ restaurants , setRestaurant ] = useState([])
   const [ AddModal, setAddModal ] = useState(false)
   const [ newRestaurant , setNewRestaurant ] = useState({})

   useEffect(() => {
      fetch('http://localhost:9000/restaurants')
         .then(res => res.json())
         .then(data => {
            setRestaurant(data)
         })
   },[newRestaurant]);

   return(
      <>
         <div className="menu-section">
            <div className="header-section">
               <div className="header-wrapper">
                  <button
                     onClick={() => {
                        setAddModal(true)
                     }}
                     className='btn add-btn'>
                     New Restaruant
                  </button>
               </div>
            </div>
            <div className="table-wrapper">
               <table>
                  <thead>
                     <tr>
                        <th className='id-column'>id</th>
                        <th className='name-row'>Name</th>
                        <th>Category</th>
                        <th>Products</th>
                        <th>Branches</th>
                        <th>Options</th>
                     </tr>
                  </thead>

                  <tbody>
                     {
                        restaurants.map((e,i) => {
                           return(
                              <tr key={i}>
                                 <td>{i+1}</td>
                                 <td>{e.name}</td>
                                 <td className='ctgry'>{e.category_name}</td>
                                 <td>Mar</td>
                                 <td>Branches</td>
                                 <td>
                                    <div className="btns-clmn">
                                       <button className='btn edit-btn'>Edit</button>
                                       <button className='btn del-btn'>Delete</button>
                                    </div>
                                 </td>
                              </tr>
                           )
                        })
                     }
                  </tbody>
                  
               </table>
            </div>
         </div>
         {AddModal && <ResModal newRestaurant = {setNewRestaurant} closeModal = { setAddModal }/>}
      </>
   )
}

export default Restaurant;