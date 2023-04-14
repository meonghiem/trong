import { useSelector } from "react-redux"
import logo from "../logo.svg"
import { useEffect } from "react"

const Home = () => {

  const value = useSelector((store) => store.home.value)
  useEffect(() => {console.log(value)}, [])
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )
}

export default Home

