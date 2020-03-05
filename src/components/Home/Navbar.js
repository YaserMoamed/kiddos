import React from "react";
import {
  BrowserRouter as Router , Link} from "react-router-dom";
const  Navbar = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/corsi">Corsi</Link>
              </li>
              <li>
               <Link to="news">Blog</Link>
               </li>
            <li>
              <Link to="/camp">Camp</Link>
            </li>
            <li>
              <Link to="/login">Accedi</Link>
             </li>
          </ul>
        </nav>
    </div>
      </Router>

  )
}
export default Navbar;