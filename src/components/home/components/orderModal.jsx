import { useState ,useEffect } from "react";


function Order({id , closeModal}) {

   const [product , setProduct] = useState()
   const [name , setName] = useState('')
   const [phone , setPhone ] = useState(98564956)
   let today = new Date()
   let date  = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

   let hourse = new Date()
   let curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();


   useEffect(() => {
      fetch(`http://localhost:9000/product/${id}`)
         .then(res => res.json())
         .then(data => {
            setProduct(data);
         })
   },[])

   return(
      <>
         <div className="modalBox">
               <div className="modalView">
                  <div className="heading-text">Order Product {id }  { date}</div>
                  <p>{ product?.product_name}</p>
                  <p>{ product?.product_price} so'm</p>
                  <input 
                     type="text" 
                     autoFocus 
                     onChange={e => {
                        setName(e.target.value)
                     }}
                     placeholder="Your Name" />

                  <input   
                     onChange={e => {
                        setPhone(e.target.value)
                     }}
                     type="Number" 
                     placeholder="Phone" />

                  <button 
                     onClick={() => {
                        fetch('http://localhost:9000/order',{
                           method:"POST",
                           headers:{
                              "Content-Type":"application/json"
                           },
                           body:JSON.stringify({
                              name:name,
                              phone:phone,
                              id:id,
                              time:date
                           })
                        })
                           .then(res => res.json())
                           .then(data => {
                              console.log(data);
                              closeModal(false)
                           })

                     }}
                     className="btn add-btn">
                     Order
                  </button>
                  <br />
                  <button 
                     onClick={() => {
                        closeModal(false)
                     }}
                     className="btn edit-btn">
                     Cancel
                  </button>

               </div>
         </div>
      </>
   )
}


export default Order;