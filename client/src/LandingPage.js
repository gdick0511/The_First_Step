import Login from "./Login";
import Signup from "./Signup"

function LandingPage({onLogin}){

    return(
        <div>
            <h1>The First Step</h1>
            <Login onLogin={onLogin}/>
            <Signup onLogin={onLogin}/>
        </div>
    )
}

export default LandingPage;