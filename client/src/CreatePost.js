
function CreatePost(){

    return(
        <div>
            <form>
                <label>
                    <h4>Subject</h4>
                    <input type='text' name='subject' placeholder='subject'></input>
                </label>
                <label>
                    <h4>Body</h4>
                    <textarea type='text' name='body' placeholder='share something...'></textarea>
                </label>
            </form>
        </div>
    )
}

export default CreatePost;