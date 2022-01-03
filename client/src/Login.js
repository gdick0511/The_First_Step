import {useState} from 'react'

function Login({onLogin}){

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log('hello there')
        const registeredUser = {
            username: user.username,
            password: user.password
        }
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(registeredUser)
        })
        .then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => onLogin(user))
            }
        });
    }

    function handleChange(e){
        setUser((currentInfo) => ({
            ...currentInfo,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <div id='login'>
            <p>Have an Account? Sign in!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Username</h4>
                    <input onChange={handleChange} type='text' placeholder='username' name='username'value={user.username}/>
                </label>
                <label>
                    <h4>Password</h4>
                    <input onChange={handleChange} type='password' placeholder='password' name='password'value={user.password}/>
                </label>
                <label>
                    <button id='button'>Log In</button>
                </label>
            </form>
        </div>
    )
}

export default Login;