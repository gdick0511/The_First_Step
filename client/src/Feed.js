import {useState} from 'react'
import FeedCard from './FeedCard'
import Search from './Search'

function Feed({allPost}){

    const [search, setSearch] = useState('')

    const filtered = allPost.filter((post) => post.subject.toLowerCase().includes(search.toLowerCase()))
    const userPosts = filtered.map((p) => {

       return <FeedCard key={p.id} subject={p.subject} body={p.body} username={p.user.username}/>

    })

    return(
        <div>
            <h1>Feed</h1>
            <Search search={search} setSearch={setSearch}/>
            {userPosts}
        </div>
    )
}

export default Feed;

