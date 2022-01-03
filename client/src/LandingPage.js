import Login from "./Login";
import Signup from "./Signup"
import Logo from './Logo.png'

function LandingPage({onLogin}){

    return(
        <div>
            <div id='logo'>
            <img src={Logo}/>
            </div>
                <div>
                    <p>Welcome to The First Step. We are a community built by individuales just like you to offer support and guidance for those struggling with addiction. If you, or someone you know has been impacted by addiction, we are here to serve you! Taking the first steps towards wellness can be daunting, but our goal remains the same: To uplift and support through our community and provide resources for effective change.</p>
                </div>
            <Login onLogin={onLogin}/>
            <Signup onLogin={onLogin}/>
        </div>
    )
}

export default LandingPage;