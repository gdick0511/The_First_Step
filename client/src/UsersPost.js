
function UsersPost({body, subject}){

    return(
        <div id='userPostCard'>
            <h3>{subject}</h3>
            <p>{body}</p>
        </div>
    )
}

export default UsersPost;