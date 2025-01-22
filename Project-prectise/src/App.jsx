
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'
import Navbar from './Navbar'
import Cart from './Cart'

function App() {
  
const router=createBrowserRouter([
  {
    path:"/",
    element:<div>
     
      <Navbar/>
      <Product/>
    </div>
    
  },
  {
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
