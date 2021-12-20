import { useState, useEffect } from "react";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Header from "./Header"
import Main from "./Main";


function App() {

  const [quote, setQuote] = useState([])
  const [allPost, setAllPost] = useState([])
  
   useEffect(()=> {
    fetch('/quotes')
    .then(resp => resp.json())
    .then((data) => setQuote({q:data.quote[0].q, a:data.quote[0].a}))
  },[])
    
  useEffect(() => {
      fetch('/posts')
      .then((resp) => resp.json())
      .then((allPost) => setAllPost(allPost))
  },[])
  
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
      <Main  allPost={allPost} setAllPost={setAllPost} setUser={setUser} user={user} quote={quote}/>
    </div>
  );
}

export default App;
