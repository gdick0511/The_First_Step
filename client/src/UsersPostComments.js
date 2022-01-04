
function UsersPostComments({comments, username}){

    return(
        <div id='userspostcomments'>
            <p>{comments}</p>
            <h5>Comment left by: {username}</h5>
        </div>
    )
}

export default UsersPostComments;