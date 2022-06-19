import { useEffect, useState } from "react";


function EditProducts({closeModal,productId , load}) {


   const [ name , setName ] = useState('')
   const [price , setPrice ] = useState(0)
   const [product , setProduct] = useState()

   useEffect(() => {
      fetch(`http://localhost:9000/product/${productId}`)
         .then(res => res.json())
         .then(data => {
            setProduct(data)
            setPrice(data.product_price)
            setName(data.product_name)
         })
   },[])

   return(
      <>
         <div className="modalBox">
               <div className="addRes">
                 <div className="modalWrapperAdd">
                     <p className="heading-text">Edit Product</p>
                     <input 
                        defaultValue={product?.product_name}
                        onChange={e => {
                           setName(e.target.value)
                        }}
                        type="text"
                        placeholder="Name" />

                     <input 
                        defaultValue={product?.product_price}
                        onChange={e => {
                           setPrice(e.target.value)
                        }}
                        type="number"
                        placeholder="Price" />

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
                              fetch('http://localhost:9000/product',{
                                 method:"PUT",
                                 headers:{
                                    "Content-Type":"application/json"
                                 },
                                 body:JSON.stringify({
                                    name,
                                    price,
                                    id:productId
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
                           Edit
                        </button>
                     </div>
                 </div>
               </div>
         </div>
      </>
   )
}

export default  EditProducts;