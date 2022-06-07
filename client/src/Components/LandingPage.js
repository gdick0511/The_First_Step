import Login from "./Login";
import Signup from "./Signup"
import Logo from '../Images/Logo.png'

function LandingPage({onLogin}){

    return(
        <div id='landingpage'>
            <div id='logo'>
            <img id='logo'src={Logo}/>
            </div>
                <div id='missionstatement'>
                    <p>Welcome to The First Step. We are a community built by individuales just like you to offer support and guidance for those facing addiction. If you, or someone you know has been impacted by addiction, we are here to serve you! Taking the first steps towards wellness can be daunting, but our goal remains the same: To uplift and support through our community and provide resources for effective change.</p>
                </div>
            <Login onLogin={onLogin}/>
            <Signup onLogin={onLogin}/>
        </div>
    )
}

export default LandingPage;