
import { useState } from "react";
import ProductModal from "./modal/products";

function Product() {

   const [modal , setModal ] = useState(false)

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
                        <th>flefmfe</th>
                        <th>Products</th>
                        <th>Options</th>
                     </tr>
                  </thead>
                  
                  <tr>
                     <td>5</td>
                     <td>Maria Anders</td>
                     <td>Maria Anders</td>
                     <td>Maria Anders</td>
                     <td>
                        <div className="btns-clmn">
                           <button className='btn edit-btn'>Edit</button>
                           <button className='btn del-btn'>Delete</button>
                        </div>
                     </td>
                  </tr>
                  
               </table>
            </div>
         </div>
         {modal && <ProductModal closeModal={ setModal }/>}
      </>
   )
}


export default Product;