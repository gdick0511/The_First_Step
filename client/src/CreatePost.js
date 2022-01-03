import { useState } from 'react'

function CreatePost({setAllPost, user}){

    const [newPostInfo,setNewPostInfo] = useState({
        subject: '',
        body: '',
    })

    function handleChange(e){
        setNewPostInfo((currentInputs) => ({
            ...currentInputs,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        const newPost= {
            subject: newPostInfo.subject,
            body: newPostInfo.body,
            user_id: user.id
        }
        fetch('/posts',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                Accept: 'applciation/json'
            },
            body: JSON.stringify(newPost),
        })
        .then((resp) => resp.json())
        .then((allPost) => {
            setAllPost((currentPost) => [allPost,...currentPost])
            setNewPostInfo({
                subject: '',
                body: ''
            })
        })
    }

    return(
        <div>
            <form id='postform' onSubmit={handleSubmit}>
                <label>
                    <h4>Subject</h4>
                    <input id='postsubject' onChange={handleChange} type='text' name='subject' placeholder='subject' value={newPostInfo.subject}></input>
                </label>
                <label>
                    <h4>Body</h4>
                    <textarea id='postbody' onChange= {handleChange} type='text' name='body' placeholder='share something...' value={newPostInfo.body}></textarea>
                </label>
                <label>
                    <div>
                        <button id='button'>
                            Share it
                        </button>
                    </div>
                </label>
            </form>
        </div>
    )
}

export default CreatePost;