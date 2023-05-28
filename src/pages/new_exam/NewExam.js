import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/common/header/Header";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MultiInputDateTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputDateTimeRangeField';
import dayjs from 'dayjs';


export default function NewExam() {
    const isLogin = (Cookies.get('isLogin') === 'true');
    const [titleExam, setTitleExam] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [startTimeConvert, setStartTimeConvert] = useState("");
    const [endTimeConvert, setEndTimeCovert] = useState("");

    useEffect(() => {
        setStartTimeConvert(startTime && dayjs(startTime).format('YYYY/MM/DD HH:mm:ss'));
        setEndTimeCovert(endTime && dayjs(endTime).format('YYYY/MM/DD HH:mm:ss'));
    }, [startTime, endTime])

    useEffect(() => {
        console.log(startTimeConvert);
        console.log(endTimeConvert);
    },)

    if (!isLogin) {
        return <Navigate replace to="/" />
    }
    else {
        return (
            <div style={{ paddingTop: "90px" }}>
                <div>
                    <Header page="Create exam" />
                </div>
                <div style={{ marginTop: "20px" }}>
                    <Grid container justifyContent="center">
                        <Grid item xs={10}>
                            <Paper>
                                {/* Title Exam */}
                                <Box sx={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '180%' }}>
                                    <strong>The title of the exam</strong>
                                </Box>
                                {/* Nhập title Exam */}
                                <TextField
                                    sx={{ paddingTop: '20px', paddingLeft: '10px', paddingBottom: '10px', width: '60%' }}
                                    required
                                    type="text"
                                    id="titleExam"
                                    value={titleExam}
                                    variant="outlined"
                                    placeholder="Please enter title exam"
                                    onChange={(e) => setTitleExam(e.target.value)}
                                    helperText={titleExam === "" ? "The exam title is not filled in" : ""}
                                />
                                {/* Start time */}
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    sx={{ paddingTop: '1px', paddingLeft: '10px', paddingBottom: '2px' }}
                                >
                                    Select time
                                </Typography>
                                <Box sx={{ width: '40%', paddingTop: '1px', paddingLeft: '10px', paddingBottom: '10px' }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer
                                            components={[
                                                'MultiInputDateTimeRangeField',
                                            ]}
                                        >
                                            <MultiInputDateTimeRangeField
                                                slotProps={{
                                                    textField: ({ position }) => ({
                                                        label: position === 'start' ? 'Start time' : 'End time',
                                                    }),
                                                }}
                                                value={[startTime, endTime]} // Truyền giá trị của startTime và endTime
                                                onChange={(newValue) => {
                                                    setStartTime(newValue[0]); // Cập nhật giá trị startTime
                                                    setEndTime(newValue[1]); // Cập nhật giá trị endTime
                                                }}
                                            />
                                            {/* In ra startTime và endTime */}
                                            {/* <Typography variant="body1" sx={{ paddingLeft: '10px' }}>
                                                Start time: {startTime && dayjs(startTime).format('YYYY/MM/DD HH:mm:ss')}
                                            </Typography>
                                            <Typography variant="body1" sx={{ paddingLeft: '10px' }}>
                                                End time: {endTime && dayjs(endTime).format('YYYY/MM/DD HH:mm:ss')}
                                            </Typography> */}
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={10} sx={{ paddingTop: '10px' }}>
                            <Button
                                variant="contained"
                                startIcon={<AddCircleOutlineIcon />}
                                className="icon-button"
                            >
                                Create new question
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}