import { Routes, Route , Outlet} from 'react-router-dom'
import Admin from './components/admin/Admin';
import Branch from './components/admin/components/branch';
import Order from './components/admin/components/order';
import Product from './components/admin/components/products';
import Restaurant from './components/admin/components/restaurant';

import Home from './components/home/home';
import ProductRes from './components/home/components/product';
import RestaurantHome from './components/home/components/restaurants';
import BranchRes from './components/home/components/branchRes';
import AllBranch from './components/home/components/branch';




function App() {
  return (
    <>
      <Routes>
          <Route path="/"  element={<Home/>}>
            <Route path='/restaurants' element={<RestaurantHome/>} />
              <Route path='/branches' element = {<AllBranch/>} />
              <Route path='/restaurant/:id' element={<BranchRes/>} />
              <Route path='/restaurant/branch/:id' element={<ProductRes/>} />
          </Route>
          <Route path="/admin" element ={<Admin/>}> 
              <Route path='/admin/restaurant' element={<Restaurant/>}></Route>
              <Route path='/admin/branch' element={<Branch/>}/>
              <Route path='/admin/products' element={<Product/>} />
              <Route path='/admin/order' element={<Order/>}></Route>
          </Route>

      </Routes>
    </>
  );
}

export default App;


