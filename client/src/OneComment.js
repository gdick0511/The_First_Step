
function OneComment({comment: {body, user:{username}}}){

    return(
        <div id='commentcards'>
            <p>{body}</p>
            <h5>Comment left by: {username}</h5>
        </div>
    )
}

export default OneComment;