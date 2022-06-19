
import { useEffect, useState } from "react";
import ProductModal from "./modal/products";
import EditProducts from "./editModal/editProduct";
import Loading from "./modal/loading";
import ProductDel from "./delModal/delProduct";


function Product() {

   const [modal , setModal ] = useState(false)
   const [ products , setProduct ] = useState([])
   const [editModal , setEditModal ] = useState(false)
   const [delModal , setDelModal ] = useState(false)
   const [delProduct , setDelProduct ] = useState()
   const [loading, setLoading ] = useState(true)
   const [product_id , setProductId] = useState(0)

   useEffect(() => {
      fetch('http://localhost:9000/products')
         .then(res => res.json())
         .then(data => {
            setProduct(data)
            if(loading) {
               setTimeout(() => {
                  setLoading(false)
               },500)
            }
         })
   },[loading])

   return(
      <>
         <div className="menu-section">
            <div className="header-section">
               <div className="header-wrapper">
                  <button 
                     onClick={() => {
                        setModal(true)
                     }}
                     className='btn add-btn'>New Product</button>
               </div>
            </div>
            <div className="table-wrapper">
               <table>
                  <thead>
                     <tr>
                        <th className='id-column'>id</th>
                        <th className='name-row'>Name</th>
                        <th>Price</th>
                        <th>Branch</th>   
                        <th>Restaurant</th>
                        <th>Options</th>
                     </tr>
                  </thead>

                  <tbody>
                     {
                        products.map((e,i) => {
                           return(
                              <tr key={i}>
                                 <td>{i+1}</td>
                                 <td>{e.product_name}</td>
                                 <td>{e.product_price} so'm</td>
                                 <td>{e.branch_name}</td>
                                 <td>{e.restaurant_name}</td>
                                 <td>
                                    <div className="btns-clmn">
                                       <button
                                          data-id = {e.id}
                                          onClick={e => {
                                             setEditModal(true)
                                             setProductId(e.target.dataset.id)
                                          }} 
                                          className='btn edit-btn'>
                                          Edit
                                       </button>

                                       <button 
                                          data-id = {e.id}
                                          onClick={e => {
                                             setDelModal(true)
                                             setDelProduct(e.target.dataset.id)
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
         </div>
         {modal && <ProductModal load = {setLoading} closeModal={ setModal }/>}

         {editModal && <EditProducts load= {setLoading} productId = {product_id} closeModal = {setEditModal}/> }

         {delModal && <ProductDel closeModal = {setDelModal} id = {delProduct} load = {setLoading} />}

         {loading && <Loading/>}
      </>
   )
}


export default Product;