import { useState } from 'react'
import {Route, Switch} from 'react-router-dom';
import NavBar from "./Navbar";
import Feed from "./Feed"
import Home from './Home';
import AllPost from './AllPost'
import Resources from './Resources'

function Main({setUser, quote, user, allPost, setAllPost}){

    // console.log(allPost)
    
    // const [search, setSearch] = useState('')
    
    // const filtered = allPost.filter(post => {
    //     return(post.subject.toLowerCase().inlcudes(search.toLowerCase()))
    // })

    // function handleFilter(e){
    //     setSearch(e.target.value)
    // }

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