
function Home({user, quote:{a,q}}){

    return(
        <div>
            <h2>Welcome, {user.username}</h2>
            <p>"{q}"</p>
            <p>-{a}</p>
        </div>
    )
}

export default Home;