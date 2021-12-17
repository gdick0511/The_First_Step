
function FeedCard({subject, body, username}){

    return(
        <div>
            <h3>{subject}</h3>
            <p>{body}</p>
            <h5>Posted by: {username}</h5>
        </div>
    )
}

export default FeedCard;