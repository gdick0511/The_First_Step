import {useState, useEffect} from 'react'
import FeedCard from './FeedCard'

function Feed({allPost, setAllPost}){

    // const [allPost, setAllPost] = useState([])
    
    // useEffect(() => {
    //     fetch('/posts')
    //     .then((resp) => resp.json())
    //     .then((allPost) => setAllPost(allPost))
    // },[])

    const userPosts = allPost.map((p) => {

       return <FeedCard key={p.id} subject={p.subject} body={p.body} username={p.user.username}/>

    })

    return(
        <div>
            <h1>Feed</h1>
            {userPosts}
        </div>
    )
}

export default Feed;