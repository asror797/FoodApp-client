
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './content.css'
import DelModal from './delModal/Delrestaurant';
import EditRes from './editModal/editRes';
import Loading from './modal/loading';
import ResModal from './modal/restaurant';


function Restaurant() {
   

   const [ restaurants , setRestaurant ] = useState([])
   const [ AddModal, setAddModal ] = useState(false)
   const [ delModal , setDelModal ] = useState(false)
   const [ editModal , setEditModal ] = useState(false)
   const [ newRestaurant , setNewRestaurant ] = useState(1)
   const [ editResId , setEditId ] = useState()
   const [ delId , setDelId ] = useState()
   const [ loading , setLoading ] = useState(true)

   const HandlerDeleteBtn = () => {
      setDelModal(true)
   }

   const HandlerEditBtn = () => {
      setEditModal(true)
   }

   useEffect(() => {
      fetch('http://localhost:9000/restaurants')
         .then(res => res.json())
         .then(data => {
            console.log(newRestaurant);
            setRestaurant(data)
            if(loading) {
               setTimeout(() => {
                  setLoading(false)
               },500)
            }
         })
   },[loading]);

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
                                 <td><Link to={'/'}>Branches</Link></td>
                                 <td>
                                    <div className="btns-clmn">
                                       <button 
                                          data-id = {e.id}
                                          onClick={e => {
                                             HandlerEditBtn()
                                             setEditId(e.target.dataset.id)
                                          }} 
                                          className='btn edit-btn'>
                                          Edit
                                       </button>

                                       <button 
                                          data-id = {e.id}
                                          onClick={ e => {
                                             HandlerDeleteBtn()
                                             setDelId(e.target.dataset.id)

                                          }} 
                                          className='btn del-btn'>
                                          Delete
                                       </button>
                                    </div>
                                 </td>
                              </tr>
                           )
                        })
                     }
                  </tbody>
                  
               </table>
            </div>
            {/* {true && <Loading/>} */}
         </div>
         {AddModal && <ResModal newRestaurant = {setNewRestaurant} res = {setLoading} closeModal = { setAddModal }/>}
         {delModal && <DelModal id = {delId} res = {setLoading} closeModal = { setDelModal }/>}
         {editModal && <EditRes id = {editResId} closeModal={ setEditModal}/>}
         {loading && <Loading/>}
      </>
   )
}

export default Restaurant;