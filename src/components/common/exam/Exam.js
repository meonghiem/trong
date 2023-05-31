import React, { useEffect, useState } from "react";
import Header from "../header/Header"
import { Box, Button, Grid, Paper } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Exam(props) {
    const id = props.id;
    const [exam, setExam] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:8001/api/exam/${id}`);
                const arrExams = response.data.exams;
                const exam = arrExams[0];
                setExam(exam);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id])

    const handleClickStartExam = () => {
        navigate(`/list_exams/exam/start/${id}`);

    }

    function handleTime(datetime) {
        const date = new Date(datetime);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        const second = date.getSeconds().toString().padStart(2, '0');
        const formattedDate = `${day}/${month}/${year} - ${hour}:${minute}:${second}`;
        return formattedDate;
    }

    return (
        <div>
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    <Header page="List exams" />
                </Grid>

                <Grid item xs={10} sx={{ marginTop: '90px' }} >
                    <Paper>
                        {/* Title Exam */}
                        <Box sx={{ borderBottom: '2px solid grey', paddingTop: '20px', paddingBottom: '20px' }}>
                            <div className="header font-weight-bold font h4" style={{ color: "black", marginLeft: '20px' }}>Title Exam : <span>{exam.title}</span></div>
                        </Box>
                        {/* Mô tả về exam */}
                        <Box sx={{ paddingTop: '20px', marginLeft: '20px' }}>
                            <div className="header font-weight-bold font h6" style={{ color: "black" }}>ID : <span>{exam.id}</span></div>
                            <div className="header font-weight-bold font h6" style={{ color: "black" }}>Created time : <span>{handleTime(exam.createdAt)}</span></div>
                            <div className="header font-weight-bold font h6" style={{ color: "black" }}>Start time : <span>{handleTime(exam.start_time)}</span></div>
                            <div className="header font-weight-bold font h6" style={{ color: "black" }}>End time : <span>{handleTime(exam.end_time)}</span></div>
                            <div className="header font-weight-bold font h6" style={{ color: "black" }}>Max score : <span>{exam.max_score}</span></div>
                            <div className="header font-weight-bold font h6" style={{ color: "black" }}>Number question : <span>{exam.number_of_question}</span></div>
                            <div className="header font-weight-bold font h6" style={{ color: "black" }}>State : <span>{exam.state}</span></div>
                        </Box>
                        {/* Các button như Start the exam, Edit the exam */}
                        <Box sx={{ paddingTop: '20px', marginLeft: '20px', paddingBottom: '20px' }}>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Button variant="contained"
                                        className="icon-button"
                                        onClick={handleClickStartExam}>
                                        Start the exam
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" className="icon-button">
                                        Edit the exam
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
