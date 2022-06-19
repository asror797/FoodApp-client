import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Order from "./orderModal";


function ProductRes() {

   const { id } = useParams()
   const [ProductId , setId ] = useState()

   const [products , setProduct] = useState([])
   const [modal , setModal ] = useState(false)

   useEffect(() => {
      fetch(`http://localhost:9000/branch/product/${id}`)
         .then(res => res.json())
         .then(data => {
            setProduct(data)
         })
   },[id])
   return(
      <>
         <ul className="restaurant-cards">
            {
               products.map((e,i) => {
                  let link = `/restaurant/branch/${e.id}`
                  return(
                     <li className="card-res">
                       { e.product_name} <br />
                       <button 
                           data-id = {e.id}
                           onClick={e => {
                              setModal(true)
                              setId(e.target.dataset.id)
                           }}
                           className="btn add-btn">
                           Buy
                        </button>
                     </li>
                  )
               })
            }
         </ul>
            {modal && <Order id = {ProductId} closeModal ={setModal}/>}
      </>
   )
}

export default ProductRes;