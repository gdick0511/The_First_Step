import {Route, Switch} from 'react-router-dom';
import NavBar from "./Navbar";
import Feed from "./Feed"
import Home from './Home';
import AllPost from './AllPost'
import Resources from './Resources'

function Main({setUser, quote, user, allPost, setAllPost}){

    return(
        <div>
            <NavBar onLogout={setUser}/>
            <Switch>
                <Route exact path='/home'>
                    <Home quote={quote} user={user}/>
                </Route>
                <Route exact path='/feed'>
                    <Feed allPost={allPost} setAllPost={setAllPost}/>
                </Route>
                <Route exact path='/all_post'>
                    <AllPost allPost={allPost} setAllPost={setAllPost} user={user}/>
                </Route>
                <Route exact path='/resources'>
                    <Resources />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;