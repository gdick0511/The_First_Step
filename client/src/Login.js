
function Login({onLogin}){

    return(
        <div>
            <p>Have an Account? Sign in!</p>
            <form>
                <label>
                    <h4>Username</h4>
                    <input type='text' placeholder='username' name='username'/>
                </label>
                <label>
                    <h4>Password</h4>
                    <input type='text' placeholder='password' name='password'/>
                </label>
            </form>
        </div>
    )
}

export default Login;