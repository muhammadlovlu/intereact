import { useEffect,useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/navBar/navBar';

function App() {
  const [blog,setBlog] = useState([]);
useEffect(() => {
  fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-03-27&sortBy=publishedAt&apiKey=799939e839ac4810b9707ecdbf734f70
`)
.then(res=> res.json())
.then(data=>setBlog(data.articles))
},[])
  return (
    <div className="App bgcolor">
      <Navbar></Navbar>
     
    

     
     {
        blog.map(post=><Header  data={post} key={post.url}></Header>)
      }
    

    

    
       

   


    </div>
  );
}

export default App;
