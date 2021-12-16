
function Home({user, quote:{a,q}}){

    return(
        <div>
            <h4>Welcome, {user.username}</h4>
            <p>"{q}"</p>
            <p>-{a}</p>
        </div>
    )
}

export default Home;