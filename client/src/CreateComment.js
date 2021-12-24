import {useState} from 'react'
function CreateComment({body, username, commentableId, commentableType, user, setAllComments, setAllPost}){

    const [newCommentInfo, setNewCommentInfo] = useState({
        body: ''
    })

    function handleChange(e){
        setNewCommentInfo((currentInputs) => ({
            ...currentInputs,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e){
        console.log('hello')
        e.preventDefault()
        const newComment = {
            body: newCommentInfo.body,
            commentable_id: commentableId,
            commentable_type: commentableType,
            user_id: user.id
        }
        fetch('/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newComment)
        })
        .then((resp) => resp.json())
        .then((theComment) => {
            setAllPost((currentPosts) => currentPosts.map((p) => p.id === commentableId ? {...p, comments:[...p.comments, theComment]} : p))
            setNewCommentInfo({
                body: ''
            })
        })
       
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Share something</h4>
                    <textarea onChange={handleChange} type='text' name='body' placeholder='leave a comment... ' value={newCommentInfo.body}></textarea>
                </label>
                <label>
                    <div>
                        <button>
                            Post it
                        </button>
                    </div>
                </label>
            </form>
        </div>
    )
}

export default CreateComment;

