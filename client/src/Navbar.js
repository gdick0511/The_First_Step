import React from "react"
import { NavLink, Link, useHistory } from "react-router-dom"

function NavBar(){

    return(
        <div>
            <NavLink className='navlinks' to='/home'>
                Home
            </NavLink>
            <NavLink className='navlinks' to='/feed'>
                Feed
            </NavLink>
            <NavLink className='navlinks' to='/all_post'>
                All Post
            </NavLink>
            <NavLink className='navlinks' to='/resources'>
                Resources
            </NavLink>
            <button as={Link} to='/'>
                Logout 
            </button>
        </div>
    )
}

export default NavBar;