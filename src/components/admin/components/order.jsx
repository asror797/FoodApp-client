
function Order() {
   return(
      <>
         <div className="menu-section">
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
      </>
   )
}

export default Order;