import { useEffect, useState } from "react";


function BranchModel({closeModal,load}) {


   const [ name , setName ] = useState('')
   const [id , setId ] = useState(1)
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
         <div className="modalBox">
               <div className="addRes">
                 <div className="modalWrapperAdd">
                     <p className="heading-text">New Branch</p>
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
                           {
                              restaurants.map((e,i) => {
                                 return(
                                    <option 
                                       key={i}
                                       className="option"
                                       value={e.id}>
                                       {e.name}
                                    </option>
                                 )
                              })
                           }
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
                              fetch('http://localhost:9000/new-branch',{
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
                                    load(true)
                                    closeModal(false)
                                    // console.log(data);
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

export default  BranchModel;