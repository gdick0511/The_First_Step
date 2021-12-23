
function OneComment({comment: {body, user:{username}}}){

    // console.log(comment)
    return(
        <div>
            <p>{body}</p>
            <div>
             Comment left by: {username}
            </div>
        </div>
    )
}

export default OneComment;