import {useState} from 'react'
import CreateComment from './CreateComment'
import OneComment from './OneComment'

function FeedCard({subject, body, username, id, user, setAllComments, comments}){

    const [showCreateComment, setShowCreateComment] = useState(false)
    
    function handleCreatePost(){
        setShowCreateComment((current) => !current)
    }
    
    // console.log(comments)
    const Lisa = comments.map((comment) => <OneComment comment={comment}/>)
    
    // console.log(Lisa)
    return(
        <div>
            <h3>{subject}</h3>
            <p>{body}</p>
            <h5>Posted by: {username}</h5>
            <p>{Lisa}</p>
                <button onClick={handleCreatePost}>{showCreateComment ? "Cancel" : "Leave a comment"}
                </button>{showCreateComment ? <CreateComment commentableId={id} commentableType={'Post'} username={username} body={body} user={user} setAllComments={setAllComments}/> : null} 
        </div>
    )
}

export default FeedCard;

// user_ID
// Commentable_id (will be the id of the post you are commenting on)
// commentable_type (string to Post)

// ^^ all of these need be passed as props to create comment 

