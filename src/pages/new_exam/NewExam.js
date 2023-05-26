import Cookies from "js-cookie";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/common/header/Header";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function NewExam() {
    const isLogin = (Cookies.get('isLogin') === 'true');
    const [titleExam, setTitleExam] = useState("");

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
                                <Box sx={{ paddingLeft: '10px', paddingRight: '10px', fontSize: '180%' }}>
                                    <strong>The title of the exam</strong>
                                </Box>
                                <TextField
                                    sx={{ paddingTop: '20px', paddingLeft: '10px', paddingBottom: '10px', width: '60%' }}
                                    require
                                    type={"text"}
                                    id="titleExam"
                                    value={titleExam}
                                    variant="outlined"
                                    placeholder="Please enter title exam"
                                    onChange={(e) => setTitleExam(e.target.value)}
                                    helperText={titleExam === "" ? "The exam title is not filled in" : ""}
                                />
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