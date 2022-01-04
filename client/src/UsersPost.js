import UsersPostComments from "./UsersPostComments";
import {useState} from 'react'

function UsersPost({body, subject, comments}){

    const [showComments, setShowComments] = useState(false)

    let comments_on_users_post = comments.map((comment) => <UsersPostComments comments={comment.body} username={comment.user.username}/>)


    function handleClick(){
        setShowComments((current) => !current)
    }

    function handleDelete(){
        console.log('yeet')
    }

    return(
        <div id='userPostCard'>
            <h3>{subject}</h3>
            <p>{body}</p>
            <button id='button' onClick={handleClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>{showComments ? <>{comments_on_users_post}</> : null}
            <button id='button' onClick={handleDelete}>
                Delete Post
            </button>
        </div>
    )
}

export default UsersPost;