
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/home';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/view" element={<Home />} /> */}
        <Route exact path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
