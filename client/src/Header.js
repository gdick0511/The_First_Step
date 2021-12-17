import {Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage';
import NavBar from "./Navbar";
import Feed from "./Feed"
import Home from './Home';

function Header({setUser}){

    return(
        <div>
            <h1>The First Step</h1>
            {/* <NavBar onLogout={setUser}/>
            <Switch>
                <Route exact path='/home'>
                    <Home />
                </Route>
                <Route exact path='/feed'>
                    <Feed />
                </Route>
            </Switch> */}
        </div>
    )
}

export default Header;