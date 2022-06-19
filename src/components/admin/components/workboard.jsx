import { Outlet } from "react-router-dom";
import Header from "./header";
import Loading from "./modal/loading";


function Workboard() {
   return(
      <>
         <div className="workboard">
            <Header/>
            <div className="main-data">
               <Outlet/>
            </div>
            {/* {true && <Loading/>} */}
         </div>
      </>
   )
}


export default Workboard;