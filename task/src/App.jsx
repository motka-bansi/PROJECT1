import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
 
const router=createBrowserRouter([
  {
    path:"/",
    element:<div>
      <Navbar/>
      <Product/>
    </div>
  },{
    path:"/cart",
    element:<div>
      <Navbar/>
      <Cart/>
    </div>
  }
])
  return (
    <>
 <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
