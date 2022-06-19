import { useState } from "react";
import { useEffect } from "react";
import { useParams ,Link } from "react-router-dom";


function BranchRes() {
   const { id } = useParams()

   const [branches , setBranch] = useState([])

   useEffect(() => {
      fetch(`http://localhost:9000/branch/${id}`)
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setBranch(data)
         })
   },[])


   return(
      <>
         <ul className="restaurant-cards">
            {
               branches.map(e => {
                  let link = `/restaurant/branch/${e.id}`
                  return(
                     <li className="card-res">
                        {e.branch_name}

                        <Link to = {link}> link</Link>
                     </li>
                  )
               })
            }
         </ul>
      </>
   )
}


export default BranchRes;