import { useEffect, useState } from "react";
import BranchModel from "./modal/branch";


function Branch() {

   const [Modal , setModal ] = useState(false)
   const [branches, setBranches ] = useState([])

   useEffect(() => {
      fetch('http://localhost:9000/branches')
         .then(res => res.json())
         .then(data => {

            return setBranches(data);
         })
   },[1])


   return(
      <>
         <div className="menu-section">
            <div className="header-section">
               <div className="header-wrapper">
                  <button 
                     onClick={() => {
                        setModal(true)
                     }}
                     className='btn add-btn'>New Branch</button>
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

                  <tbody>
                  {
                     branches.map((e,i) => {
                        return(
                           <tr key={i}>
                              <td>{i+1}</td>
                              <td>{e.branch_name}</td>
                              <td>{e.restaurant_id}</td>
                              <td>Maria Anders</td>
                              <td>
                                 <div className="btns-clmn">
                                    <button className='btn edit-btn'>Edit</button>
                                    <button className='btn del-btn'>Delete</button>
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
         {Modal && <BranchModel closeModal={setModal}/>}
      </>
   )
}


export default Branch;