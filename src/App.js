import './App.css';
import {useState, useEffect} from "react"
import cat from "./octocat.png"
import job from "./job-logo.svg"
import design from "./design.svg"

function App() {

  const [ description, setDescription ] = useState("")
  const [ location, setLocation ] = useState("")

  return (
    <div className="App">
      <div className="top-images">
        <img src={cat} className="cat" />
        <img src={job} className="job" />
      </div>
      <h1 className="title" >GITHUB JOB FINDER</h1>
      <div>
        <form>
          <input type="text" placeholder="DESCRIPTION" value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
          <input type="text" placeholder="LOCATION" value={location} onChange={(e) => setLocation(e.target.value)} /> <br />
          <button className="search">SEARCH</button>
        </form>
      </div>
    <div className="footer">
    <h1>{"<hasan7001 />"}</h1>
    <img src={design} className="design" />
    <h1>DESIGN</h1>
    </div>
    </div>
  );
}

export default App;
