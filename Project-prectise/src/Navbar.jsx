import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
            <h3> <span>C</span>L<span>O</span>TH<span>..</span></h3>
        </div>
        <div className="navItem">
            <ul>
                <li> <Link to="/">PRODUCT</Link></li>
               <li> <Link to="/cart">CART</Link></li>
         
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
