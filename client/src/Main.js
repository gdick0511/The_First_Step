import {Route, Switch} from 'react-router-dom';
import NavBar from "./Navbar";
import Feed from "./Feed"
import Home from './Home';
import AllPost from './AllPost'
import Resources from './Resources'

function Main({setUser, quote, user}){

    return(
        <div>
            <NavBar onLogout={setUser}/>
            <Switch>
                <Route exact path='/home'>
                    <Home quote={quote} user={user}/>
                </Route>
                <Route exact path='/feed'>
                    <Feed />
                </Route>
                <Route exact path='/all_post'>
                    <AllPost />
                </Route>
                <Route exact path='/resources'>
                    <Resources />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;