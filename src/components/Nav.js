import React from 'react'
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Shop</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Nav