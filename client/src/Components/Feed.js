import {useState} from 'react'
import FeedCard from './FeedCard'
import Search from './Search'

function Feed({allPost, user, setAllComments, setAllPost}){

    const [search, setSearch] = useState('')

    const filtered = allPost.filter((post) => post.subject.toLowerCase().includes(search.toLowerCase()))
    const userPosts = filtered.map((p) => {

       return <FeedCard id={p.id} key={p.id} subject={p.subject} body={p.body} username={p.user.username} user={user} setAllComments={setAllComments} comments={p.comments} setAllPost={setAllPost}/>

    })

    return(
        <div id="feed_search">
            <h1>Community Feed</h1>
            <Search search={search} setSearch={setSearch}/>
            {userPosts}
        </div>
    )
}

export default Feed;

