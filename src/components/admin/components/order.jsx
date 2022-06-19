import { useEffect } from "react";
import { useState } from "react";
import DelOrder from "./delModal/delOrder";
import Loading from "./modal/loading";

function Order() {

   const [loading , setLoading ] = useState(true)
   const [orders, setOrders ] = useState([])
   const [delModal , setModal ] = useState(false)
   const [orderId , setId ] = useState()
   
   useEffect(() => {
      fetch('http://localhost:9000/orders')
         .then(res => res.json())
         .then(data => {
            setOrders(data)
            if(loading){
               setLoading(false)
            }
         })
   },[loading])
   return(
      <>
         <div className="menu-section">
            <div className="table-wrapper order-table">
               <table>
                  <thead>
                     <tr>
                        <th className='id-column'>id</th>
                        <th className='name-row'>Name</th>
                        <th>flefmfe</th>
                        <th>Products</th>
                        <th>Count</th>
                        <th>Time</th>
                        <th>Options</th>
                     </tr>
                  </thead>

                  <tbody>
                     {
                        orders.map((e,i) => {
                           return(
                              <tr>
                                 <td>{i+1}</td>
                                 <td>{e.client_name}</td>
                                 <td>+998 {e.client_phone}</td>
                                 <td>{e.product_id}</td>
                                 <td>{e.product_id}</td>
                                 <td>{e.ordered_time}</td>
                                 <td>
                                    <div className="btns-clmn">
                                       <button 
                                          onClick={(e) => {
                                             console.log(e.targte.dataset.id);
                                          }}
                                          className='btn edit-btn'>Cancel</button>
                                       <button 
                                          data-id = {e.id}
                                          onClick={e => {
                                             setModal(true)
                                             setId(e.target.dataset.id)
                                          }}
                                          className='btn del-btn'>Delete</button>
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
         {loading && <Loading/>}
         {delModal && <DelOrder load={setLoading} id = {orderId} closeModal={setModal}/>}
      </>
   )
}

export default Order;