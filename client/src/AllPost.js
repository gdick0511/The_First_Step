import {useState, useEffect} from 'react'
import CreatePost from './CreatePost'
import UsersPost from './UsersPost'

function AllPost({allPost, setAllPost, user}){

    const [usersPost, setUsersPost] = useState([])
    const [showCreatePost, setShowCreatePost] =useState(false)

    function handleCreatePost(){
        setShowCreatePost((showCreatePost)=> !showCreatePost)
        console.log('yeet')
    }

    const current_users_post = allPost.filter((post) => post.user.id === user.id)
    const current_users_post_mapped = current_users_post.map((post) => <UsersPost id={post.id} body={post.body} subject={post.subject} />)

    console.log(current_users_post)
 
    
    return(
        <div>
            <h1>All Post</h1>
            {current_users_post_mapped}
            <button onClick={handleCreatePost}>
                Create Post
            </button>
                {showCreatePost ? <CreatePost allPost={allPost} setAllPost={setAllPost} user={user} /> : null}
        </div>
    )
}

export default AllPost;