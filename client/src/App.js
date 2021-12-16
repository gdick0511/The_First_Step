import { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Header from "./Header"

function App() {

  const [quote, setQuote] = useState({a:'', q: ''})
  
   useEffect(()=> {
    fetch('/quotes')
    .then(resp => resp.json())
    .then((data) => setQuote({q:data.quote[0].q, a:data.quote[0].a}))
  },[])
  
  // console.log(quote)

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  if (!user) return <LandingPage onLogin={setUser} />

  return (
    <div className="App">
      <Header />
      <Home user={user} quote={quote}/>
    </div>
  );
}

export default App;
