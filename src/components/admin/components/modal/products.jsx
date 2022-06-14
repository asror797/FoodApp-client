import { useEffect, useState } from "react";


function ProductModal({closeModal}) {


   const [ name , setName ] = useState('')
   const [id , setId ] = useState(1)
   const [branch_id , setBranchId ] = useState(1)
   const [restaurants , setRestaurant ] = useState([])
   const [branches , setBranches ] = useState([])
   const [price , setPrice ] = useState(0)

   useEffect(() => {
      fetch('http://localhost:9000/restaurants')
         .then(res => res.json())
         .then(data => {
            setRestaurant(data)
         })
   },[])

   useEffect(() => {
      fetch('http://localhost:9000/branches')
         .then(res => res.json())
         .then(data => {
            setBranches(data)
         })
   })


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

                     <select 
                        onChange={e => {
                           setId(e.target.value)
                           console.log(e.target.value);
                        }}>
                           {
                              branches.map((e,i) => {
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
                              fetch('http://localhost:9000/new-product',{
                                 method:"POST",
                                 headers:{
                                    "Content-Type":"application/json"
                                 },
                                 body:JSON.stringify({
                                    name,
                                    price,
                                    branch_id,
                                    id
                                 })
                              })
                                 .then(res => res.json())
                                 .then(data => {
                                    console.log(data);
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

export default  ProductModal;