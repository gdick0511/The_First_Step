import {useState} from 'react'
import CreateComment from './CreateComment'
import OneComment from './OneComment'

function FeedCard({subject, body, username, id, user, setAllComments, comments, setAllPost}){

    const [showCreateComment, setShowCreateComment] = useState(false)

    const [showComments, setShowComments] = useState(false)
    
    function handleCreatePost(){
        setShowCreateComment((current) => !current)
    }

    function handleShowComments(){
        setShowComments((current) => !current)
    }
    
    const Lisa = comments.map((comment) => <OneComment comment={comment}/>)
    
    return(
        <div id="feedcard">
            <h3>{subject}</h3>
            <p>{body}</p>
            <h5>Posted by: {username}</h5>
                <button id='button' onClick={handleCreatePost}>{showCreateComment ? "Cancel" : "Leave a comment"}
                </button>{showCreateComment ? <CreateComment commentableId={id} commentableType={'Post'} username={username} body={body} user={user} setAllComments={setAllComments} setAllPost={setAllPost}/> : null} 
                <button id='button' onClick={handleShowComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>{showComments ? <p>{Lisa}</p> : null}
        </div>
    )
}

export default FeedCard;

// user_ID
// Commentable_id (will be the id of the post you are commenting on)
// commentable_type (string to Post)

// ^^ all of these need be passed as props to create comment 