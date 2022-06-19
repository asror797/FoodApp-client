import { useEffect, useState } from "react";


function ResModal({closeModal , res}) {


   const [ name , setName ] = useState('')
   const [id , setId ] = useState(1)

   // useEffect(() => {

   // },[id])


   return(
      <>
         <div className="modalBox">
               <div className="addRes">
                 <div className="modalWrapperAdd">
                     <p className="heading-text">New Restaurant</p>
                     <input 
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
                              closeModal(false)
                              res(true)
                              fetch('http://localhost:9000/new-restaurant',{
                                 method:"POST",
                                 headers:{
                                    "Content-Type":"application/json"
                                 },
                                 body:JSON.stringify({
                                    name,
                                    id
                                 })
                              })
                                 .then(res => res.json())
                                 .then(data => {
                                    if(data) {
                                       console.log(data);
                                    }
                                 })
                                 .catch(error => {
                                    console.log(error);
                                 })
                           }}
                           className="add-btn">
                           Add
                        </button>
                     </div>
                 </div>
               </div>
         </div>
      </>
   )
}

export default  ResModal;