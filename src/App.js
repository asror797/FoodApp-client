import { Routes, Route , Outlet} from 'react-router-dom'
import Admin from './components/admin/Admin';
import Home from './components/home/home';



function Board() {
  return(
    <>
      <p>Lorem3</p>
    </>
  )
}



function Board1() {
  return(
    <>
      <p>Nesting and Nesting router</p>
      <Outlet/>
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/admin" element ={<Admin/>}> 
              <Route path='/admin/restaurant' element={<Board/>}></Route>
              <Route path='/admin/branch' element={<Board1/>}>
                <Route path='/admin/branch/product' element={<Board/>}></Route>
              </Route>
              <Route path='/admin/order' element={<Board/>}></Route>
          </Route>

      </Routes>
    </>
  );
}

export default App;


