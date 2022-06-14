import Sidebar from './components/sidebar';
import './admin.css'
import Workboard from './components/workboard';

function Admin() {
   return(
      <>
        <div className="dashboard">
            <Sidebar/>
            <Workboard/>
            {/* <Outlet/> */}
        </div>
      </>
   )
}

export default Admin;