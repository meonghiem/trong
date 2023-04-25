import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import { selectIsLogin } from './pages/loginSlice';
import { Navigate } from 'react-router-dom';

function App() {
  const isLogin = useSelector(selectIsLogin);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isLogin ? (
            <>
              <Route exact path="/" element={<Navigate replace to="/home" />} />
              <Route exact path="/signup" element={<Navigate replace to="/home" />} />
              <Route exact path="*" element={<Navigate to="/home" />} />
            </>
          ) : (
            <>
              <Route exact path='/' element={<Login />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route path="*" element={<Login />} />
            </>
          )}
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
