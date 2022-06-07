
function Search({setSearch, search}){

    function handleSearch(e){
        setSearch(e.target.value)
    }

    return(
        <div id='search'>
            <label htmlFor="search">
                <input id='searchinput' autoFocus onChange={handleSearch} value={search} type='text' name='search' placeholder='Search for a topic'></input>
            </label>
        </div>    
        )
    }

    export default Search;

  