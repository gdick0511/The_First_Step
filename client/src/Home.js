
function Home({user, quote:{a,q}}){

    return(
        <div id='hometitle'>
                 <h1>Welcome, {user.username}!</h1>
            <div id='home'>
                <p>"{q}"</p>
                <h5>-{a}</h5>
            </div>
        </div>
    )
}

export default Home;