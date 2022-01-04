
function UsersPostComments({comments, username}){

    return(
        <div>
            <p>{comments}</p>
            <h5>Comment left by: {username}</h5>
        </div>
    )
}

export default UsersPostComments;