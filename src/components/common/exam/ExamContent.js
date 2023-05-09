import { Box, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Question from "../question/Question";

export default function ExamContent(props) {
    //props.id
    const id = props.id;
    const [listQuestion, setListQuestion] = useState([]);
    const [exam, setExam] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:8001/api/exam/${id}`);
                const arrExams = response.data.exams;
                const exam = arrExams[0];
                setExam(exam);
                const lstQuest = exam.Questions;
                setListQuestion(lstQuest);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id])

    return (
        <div>
            <Paper variant="24" sx={{ marginTop: '20px', marginLeft: '40px', marginRight: '40px' }}>
                {/* Hiển thị tiêu đề */}
                <Box sx={{ borderBottom: '2px solid grey', paddingTop: '20px', paddingBottom: '20px' }}>
                    <div className="header font-weight-bold font h4" style={{ color: "black", marginLeft: '20px' }}>Title Exam : <span>{exam.title}</span></div>
                </Box>
                {/* Hiển thị nội dung câu hỏi */}
                {listQuestion.map((item, id) => (
                    <div className="mt-3" key={item.id}>
                        <Question
                            id={item.id}
                            quizType={item.quiz_type}
                            answerList={item.answer_list}
                            keyList={item.key_list}
                        />
                    </div>
                ))}
            </Paper>
        </div>
    )
}