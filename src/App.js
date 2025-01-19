import './App.css';
import {useEffect, useState} from "react"
import axios from 'axios'

function App() {
  const [myData, setMyData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setMyData(res.data))
  },[])
  return (
    <div className="App">
      <h1>Displaying data using axios</h1>
      <div className='grid'>

      {myData.map((post) => {
        const {id, title, body} = post;
        return(
          <div key={id} className='card'>
            <h2>{title.slice(0, 15).toUpperCase()}</h2>
            <p>{body.slice(0,100)}</p>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default App;
