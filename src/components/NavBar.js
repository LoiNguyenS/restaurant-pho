import React from 'react'
import {Link} from 'react-router-dom'
const NavBar= () => {
    return (
        <div classname="nav-div">
            <ul id="restaurant-nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
            </ul>           
        </div>
    )
}

export default NavBar;