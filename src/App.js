import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListExams from "./pages/list_exams/ListExams";
import CreateExam from "./pages/create_exam/CreateExam";
import ResultExams from "./pages/result_exams/ResultExams";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='list_exams' element={<ListExams />} />
          <Route path="create_exam" element={<CreateExam />} />
          <Route path="result_exams" element={<ResultExams />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
