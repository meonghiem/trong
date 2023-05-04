import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageLogin from './pages/PageLogin';
import PageSignUp from './pages/PageSignUp';
import PageHome from './pages/PageHome';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PageLogin />} />
          <Route path='signup' element={<PageSignUp />} />
          <Route path='home' element={<PageHome />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
