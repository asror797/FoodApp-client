import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DelModal from "./delModal/Delbranch";
import EditBranch from "./editModal/editBranch";
import BranchModel from "./modal/branch";
import Loading from "./modal/loading";


function Branch() {

   const [Modal , setModal ] = useState(false)
   const [branches, setBranches ] = useState([])
   const [ delModal , setDelModal ] = useState(false)
   const [ editModal , setEditModal ] = useState(false)
   const [editId , setEditId ] = useState()
   const [delId , setDelId ] = useState()
   const [loading , setLoading ] = useState(true)


   const HandlerDeleteBtn = () => {
      setDelModal(true)
   }

   const HandlerEditbnt = () => {
      setEditModal(true)
   }

   useEffect(() => {
      fetch('http://localhost:9000/branches')
         .then(res => res.json())
         .then(data => {
            if(loading) {
               setBranches(data);
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
                     className='btn add-btn'>New Branch</button>
               </div>
            </div>
            <div className="table-wrapper">
               <table>
                  <thead>
                     <tr>
                        <th className='id-column'>id</th>
                        <th className='name-row'>Filial Name</th>
                        <th>Restaurant Name</th>
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
                              <td>{e.restaurant_name}</td>
                              <td><Link to='/'>Products</Link></td>
                              <td>
                                 <div className="btns-clmn">
                                    <button 
                                       data-id={e.id}
                                       onClick={e => {
                                          HandlerEditbnt()
                                          setEditId(e.target.dataset.id)
                                       }} 
                                       className='btn edit-btn'>
                                       Edit
                                    </button>

                                    <button 
                                       data-id={e.id}
                                       onClick={e => {
                                          HandlerDeleteBtn()
                                          setDelId(e.target.dataset.id)
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
         {Modal && <BranchModel load = {setLoading} closeModal={setModal}/>}
         {delModal && <DelModal load = {setLoading} id={delId} res = {setLoading} closeModal = {setDelModal}/> }
         {editModal && <EditBranch id= {editId} closeModal={setEditModal}/>}
         {loading && <Loading/>}
      </>
   )
}


export default Branch;