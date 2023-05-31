import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import ListExams from "./pages/list_exams/ListExams";
import CreateExam from "./pages/create_exam/CreateExam";
import Profile from "./pages/profile/Profile";
import Exam from "./components/common/exam/Exam";
import ExamContent from "./components/common/exam/ExamContent";
import Cookies from "js-cookie";
import NewExam from "./pages/new_exam/NewExam";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="list_exams" element={<ListExams />} />
          <Route path="create_exam" element={<CreateExam />} />
          {/* <Route path="result_exams" element={<ResultExams />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/list_exams/exam/:id" element={<ExamWrapper />} />
          <Route
            path="/list_exams/exam/start/:id"
            element={<ExamContentWrapper />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={500} />
    </div>
  );
}

function ExamWrapper() {
  const { id } = useParams();
  const isLogin = Cookies.get("isLogin") === "true";
  if (!isLogin) {
    return <Navigate replace to="/" />;
  } else {
    return <Exam id={id} />;
  }
}

function ExamContentWrapper() {
  const { id } = useParams();
  return <ExamContent id={id} />;
}

export default App;
