import {useState} from 'react'

function SignUp({onLogin}){

    const [signUp, setSignUp] = useState({
        email: '',
        username: '',
        password: ''
    })

    function handleSubmit(e){
        e.preventDefault()
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
        <div id='signup'>
            <p>Dont have an Account? Sign Up</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Email</h4>
                    <input className='signupinput' required onChange={handleChange} type='text' name='email' placeholder='email'value={signUp.email}/>
                </label>
                <label>
                    <h4>Username</h4>
                    <input className='signupinput' required onChange={handleChange} type='text'name='username' placeholder='username'value={signUp.username}/>
                </label>
                <label>
                    <h4>Password</h4>
                    <input className='signupinput' required onChange={handleChange} type='password'name='password' placeholder='password'value={signUp.password}/>
                </label>
                <label>
                    <div>
                     <button id='button'>Sign Up</button>
                    </div>
                </label>
            </form>
        </div>
    )
}

export default SignUp;