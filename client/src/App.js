import { useState, useEffect } from "react";
import LandingPage from "./Components/LandingPage";
import Header from "./Components/Header"
import Main from "./Components/Main";


function App() {

  const [quote, setQuote] = useState([])
  const [allPost, setAllPost] = useState([])
  const [allComments, setAllComments] = useState([])
  const [user, setUser] = useState(null)
  
   useEffect(()=> {
    fetch('/quotes')
    .then(resp => resp.json())
    .then((data) => setQuote({q:data.quote[0].q, a:data.quote[0].a}))
  },[user])
    
  useEffect(() => {
      fetch('/posts')
      .then((resp) => resp.json())
      .then((allPost) => setAllPost(allPost))
  },[])


  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  },[]);

  if (!user) return <LandingPage onLogin={setUser} />

  return (
    <div className="App">
      <Header />
      <Main  allPost={allPost} setAllPost={setAllPost} setUser={setUser} user={user} quote={quote} allComments={allComments} setAllComments={setAllComments}/>
    </div>
  );
}

export default App;
