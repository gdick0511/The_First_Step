import { useState, useEffect } from "react";

function App() {

  const [allQuotes, setAllQuotes] = useState("")

  
  // useEffect(()=> {
  //   fetch('https://zenquotes.io/api/today')
  //   .then(resp => resp.json())
  //   .then((allQuotes) => console.log(allQuotes))
  // }, [])
  
  
  
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;