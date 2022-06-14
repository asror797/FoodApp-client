
import {Link} from 'react-router-dom'

function Sidebar() {
   return(
      <>
         <div className="sidebar">
               <p>Tools</p>
               <ul className='sidebar-menu'>
                  <li>
                     <Link className='link' to={'/admin/restaurant'}>Restaurants</Link>
                  </li>
                  <li>
                     <Link className='link' to={'/admin/branch'}>Branches</Link>
                  </li>
                  <li>
                     <Link className='link' to={'/admin/products'}>Products</Link>
                  </li>
                  <li>
                     <Link className='link' to={'/admin/order'}>Orders</Link>
                  </li>
               </ul>
               <p>Settings</p>
               <ul className="sidebar-menu">
                  <li>
                     <Link to={'/'} className='link'>Help</Link>
                  </li>
                  <li>
                     <Link to={'/'} className='link'>Log out</Link>
                  </li>
               </ul>
         </div>
      </>
   )
}


export default Sidebar;