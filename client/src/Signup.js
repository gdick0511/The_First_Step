import {useState} from 'react'

function SignUp({onLogin}){

    const [signUp, setSignUp] = useState({
        email: '',
        username: '',
        password: ''
    })

    function handleSubmit(e){
        e.preventDefault()
        console.log('yeet')
        const userSignup = {
            email: signUp.email,
            username: signUp.username,
            password: signUp.password
        }
        fetch('/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(userSignup)
        })
            .then((resp) => {
                if (resp.ok) {
                    resp.json().then((user) => onLogin(user))
                }
            })
    }

    function handleChange(e){
        setSignUp((currentUserInfo)=>({
            ...currentUserInfo,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <div>
            <p>Dont have an Account? Sign Up</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Email</h4>
                    <input onChange={handleChange} type='text' name='email' placeholder='email'value={signUp.email}/>
                </label>
                <label>
                    <h4>Username</h4>
                    <input onChange={handleChange} type='text'name='username' placeholder='username'value={signUp.username}/>
                </label>
                <label>
                    <h4>Password</h4>
                    <input onChange={handleChange} type='text'name='password' placeholder='password'value={signUp.password}/>
                </label>
                <label>
                    <button>Sign Up</button>
                </label>
            </form>
        </div>
    )
}

export default SignUp;