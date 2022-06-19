import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";


function AllBranch() {

   const [branches , setBranch ] = useState([])
   const {id} = useParams()

   useEffect(() => {
      fetch('http://localhost:9000/branches')
         .then(res => res.json())
         .then(data => {
            setBranch(data)
         })
   },[])

   return(
      <>
         <ul className="restaurant-cards">
           {
             branches.map((e,i) => {
               let link = `/restaurant/branch/${e.id}`
               return(
                  <li className="card-res">
                     <Link to={link}>{e.branch_name}</Link>
                  </li>
               )
            })
           }
         </ul>
      </>
   )
}

export default AllBranch;