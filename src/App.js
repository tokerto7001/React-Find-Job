import './App.css';
import {useState, useEffect} from "react"
import cat from "./images/octocat.png"
import job from "./images/job-logo.svg"
import design from "./images/design.svg"
import loadingLogo from "./images/loading.gif"
import error from "./images/404.png"
import axios from "axios"
import  Card  from './components/Card';


function App() {

  const [ description, setDescription ] = useState("")
  const [ location, setLocation ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ jobList, setJobList ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
    setLocation("")
    setDescription("")
  }

  const fetchData = () => {
    setLoading(true)
    axios.get( `/positions.json?description=${description}&location=${location}` )
    .then((res) => {
      setJobList(res.data)
      console.log(res.data)
    })
    .then(() => setLoading(false) )
    
  }

  useEffect(() => {
   fetchData()
  }, [])

  return (
    <div className="App">
      <div className="top-images">
        <img src={cat} className="cat" />
        <img src={job} className="job" />
      </div>
      <h1 className="title" >GITHUB JOB FINDER</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="DESCRIPTION" value={description} onChange={(e) => setDescription(e.target.value)} /> <br />
          <input type="text" placeholder="LOCATION" value={location} onChange={(e) => setLocation(e.target.value)} /> <br />
          <button className="search">SEARCH</button>
        </form>
      </div>
      {
        loading ?  <img  src={loadingLogo} /> : jobList.length < 1 ? <img className="error" src={error} /> :
    
      jobList?.map((job) => (
        <Card 
        img={job.company_logo}
        title={job.title}
        name={job.company}
        location={job.location}
        type={job.type}
        url={job.company_url}
        />
      ))
    }
    
    <div className="footer">
    <h1>{"<tokerto7001 />"}</h1>
    <img src={design} className="design" />
    <h1>DESIGN</h1>
    </div>
    </div>
  );
}

export default App;
