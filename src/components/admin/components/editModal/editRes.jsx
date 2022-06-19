
import { useEffect, useState } from 'react'

function EditRes({closeModal, id:editId}) {


   const [ name , setName ] = useState('')
   const [id , setId ] = useState(1)
   const [restaurant , setRestaurant ] = useState({})


   useEffect(() => {
      fetch(`http://localhost:9000/restaurant/${editId}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setRestaurant(data)
         })
   },[])


  


   return(
      <>
         <div className="modalBox">
               <div className="addRes">
                 <div className="modalWrapperAdd">
                     <p className="heading-text">Edit Restaurant {editId}</p>
                     <input 
                        defaultValue = { restaurant.restaurant_name}
                        onChange={e => {
                           setName(e.target.value)
                           console.log(e.target.value);
                        }}
                        type="text"
                        placeholder="Name" />

                     <select 
                        onChange={e => {
                           setId(e.target.value)
                           console.log(e.target.value);
                        }}>
                        <option
                           className="option" 
                           value={1}>
                           Fast Food
                        </option>
                        <option 
                           className="option"
                           value={2}>
                           Milliy Taom
                        </option>
                     </select>
                     <div 
                        className="modalBtns">

                        <button
                           className="cancel-btn"
                           onClick={() => {
                              closeModal(false)
                           }}>
                           Cancel
                        </button>

                        <button 
                           onClick={() => {
                                 console.log(5);
                           }}
                           className="add-btn">
                           Edit
                        </button>
                     </div>
                 </div>
               </div>
         </div>
      </>
   )
}

export default  EditRes;