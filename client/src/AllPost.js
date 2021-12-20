import {useState, useEffect} from 'react'
import CreatePost from './CreatePost'

function AllPost({allPost, setAllPost, user}){

    const [usersPost, setUsersPost] = useState([])
    const [showCreatePost, setShowCreatePost] =useState(false)

    function handleCreatePost(){
        setShowCreatePost((showCreatePost)=> !showCreatePost)
        console.log('yeet')
    }

    
    return(
        <div>
            <h1>All Post</h1>
            <button onClick={handleCreatePost}>
                Create Post
            </button>
                {showCreatePost ? <CreatePost allPost={allPost} setAllPost={setAllPost} user={user}/> : null}
        </div>
    )
}

export default AllPost;