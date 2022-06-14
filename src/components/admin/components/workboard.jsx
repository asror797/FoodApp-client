import { Outlet } from "react-router-dom";
import Header from "./header";


function Workboard() {
   return(
      <>
         <div className="workboard">
            <Header/>
            <Outlet/>
         </div>
      </>
   )
}


export default Workboard;