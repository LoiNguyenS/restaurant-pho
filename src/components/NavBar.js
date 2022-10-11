import React from 'react'
import {Link} from 'react-router-dom'

const NavBar= () => {
    return (
        <div classname="nav-div">
            <nav>
                <ul id="restaurant-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                </ul>   
            </nav>         
        </div>
    )
}

export default NavBar;