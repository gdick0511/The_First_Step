
function Search({setSearch, search}){

    function handleSearch(e){
        setSearch(e.target.value)
    }

    return(
        <div>
            <label htmlFor="search">
                Search:
                <input onChange={handleSearch} value={search} type='text' name='search' placeholder='Search for a topic'></input>
            </label>
        </div>    
        )
    }

    export default Search;

  