import {useState, useEffect} from 'react'
import CreatePost from './CreatePost'

function AllPost(){

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
                {showCreatePost ? <CreatePost /> : null}
        </div>
    )
}

export default AllPost;