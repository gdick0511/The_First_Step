import {useState, useEffect} from 'react'
import CreatePost from './CreatePost'
import UsersPost from './UsersPost'

function AllPost({allPost, setAllPost, user}){

    const [usersPost, setUsersPost] = useState([])
    const [showCreatePost, setShowCreatePost] =useState(false)

    function handleCreatePost(){
        setShowCreatePost((showCreatePost)=> !showCreatePost)
        // console.log('yeet')
    }

    const current_users_post = allPost.filter((post) => post.user.id === user.id)
    const current_users_post_mapped = current_users_post.map((post) => <UsersPost id={post.id} body={post.body} subject={post.subject} comments={post.comments} allPost={allPost} setAllPost={setAllPost}/>)
    
    return(
        <div>
            <h1 id='posttitle'>Your Post</h1>
            <button id='postbutton' onClick={handleCreatePost}>{showCreatePost ? "Cancel":"Create Post"}</button> 
                {showCreatePost ? <CreatePost allPost={allPost} setAllPost={setAllPost} user={user}/>: null}
            {current_users_post_mapped}
        </div>
    )
}

export default AllPost;