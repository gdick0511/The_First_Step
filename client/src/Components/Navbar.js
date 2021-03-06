import React from "react"
import { NavLink, Link, useHistory } from "react-router-dom"

function NavBar({onLogout}){

    const history = useHistory()

    function handleLogOut(){
        fetch('/logout', {
            method: 'DELETE',
        }).then((resp) => {
            if (resp.ok) {
                onLogout(null)
            }
            history.push('/home')
        })
    }

    return(
        <div id='navbar'>
            <NavLink className='navlinks' to='/home'>
                Home 
            </NavLink>
            <NavLink className='navlinks' to='/feed'>
                Community Feed
            </NavLink>
            <NavLink className='navlinks' to='/all_post'>
                Your Post
            </NavLink>
            <NavLink className='navlinks' to='/resources'>
                Resources
            </NavLink>
            <button id='logoutbutton' as={Link} to='/' onClick={handleLogOut}>
                Logout 
            </button>
        </div>
    )
}

export default NavBar;