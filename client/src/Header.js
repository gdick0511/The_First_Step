import Logo from './Logo.png'


function Header(){

    return(
        <div id='header'>
            <img id='logo' src={Logo}/>
            {/* <h1>The First Step</h1> */}
        </div>
    )
}

export default Header;