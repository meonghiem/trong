
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/view" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
