import { Container } from "@mui/system";
import { Grid, Paper, Box, TextField, InputAdornment, RadioGroup, Radio, FormControlLabel, FormLabel, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import PhoneIcon from '@mui/icons-material/Phone';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";


export default function SignUp() {
    const [userName, setUserName] = useState("");
    const [emailUser, setEmailUser] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [passwordUser, setPasswordUser] = useState("");
    const [passwordUserConfirm, setPasswordUserConfirm] = useState("");
    const [errPasswordUserConfirm, setErrPasswordUserConfirm] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        setPasswordUserConfirm("")
    }, [passwordUser]);

    useEffect(() => {
        if (!(validator.isEmail(emailUser) && emailUser.endsWith('@gmail.com') && emailUser !== "")) {
            setErrEmail("Invalid email");
        }
        else {
            setErrEmail("");
        }
    }, [emailUser]);

    useEffect(() => {
        console.log("pass", passwordUser);
        console.log("confirm", passwordUserConfirm);
        if ((passwordUser !== passwordUserConfirm) && passwordUserConfirm !== "") {
            setErrPasswordUserConfirm("Confirmation password is incorrect");
        }
        if (passwordUser === passwordUserConfirm) {
            setErrPasswordUserConfirm("Confirmation password is correct")
        }
    }, [passwordUserConfirm, passwordUser]);

    const handleClickSignUp = async (event) => {
        event.preventDefault();
        if (userName === "" || emailUser === "" || passwordUser === "" || passwordUser === "" || passwordUserConfirm === "" || gender === "" || phone === "") {
            toast.info("Please enter full data !");
            return;
        }
        else if (passwordUser !== passwordUserConfirm) {
            toast.info("Confirmation password is incorrect !");
            return;
        }
        const dataSendToServer = {
            email: emailUser,
            user_password: passwordUser,
            confirm_password: passwordUserConfirm,
            user_name: userName,
            gender: gender,
            phone: phone,
        };
        try {
            const response = await axios.post("http://localhost:8001/api/signup", dataSendToServer);
            const data = response.data;
            // Thông báo thành công
            if (data.code === 0) {
                toast.success(data.message);
                navigate('/');
            }

        } catch (error) {
            const response = error.response;
            const data = response.data;
            if (data.code === 1) {
                toast.error(data.message);
                return;
            }
            if (data.code === 2) {
                toast.error(data.message);
                return;
            }
            if (data.code === 3) {
                toast.error(data.message);
                return;
            }
            if (data.code === 4) {
                toast.error(data.message);
                return;
            }
        }
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Grid
                    container
                    spacing={3}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}>
                    <Paper elevation={20} sx={{ padding: 4, margin: 5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1 }}>
                            <h1 style={{ color: 'dodgerblue' }}> SIGN UP </h1>
                        </Box>
                        <form>
                            <Grid container spacing={5} direction="column">
                                {/* User name */}
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        type={"text"}
                                        id="nameUser"
                                        label="User name"
                                        value={userName}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <DriveFileRenameOutlineIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                        variant="outlined"
                                        placeholder="Please enter your name"
                                        onChange={(e) => setUserName(e.target.value)}
                                    />
                                </Grid>
                                {/* Email user */}
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        type={"email"}
                                        id="emailUser"
                                        label="Email"
                                        value={emailUser}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            )
                                        }}
                                        variant="outlined"
                                        placeholder="Please enter your email"
                                        onChange={(e) => setEmailUser(e.target.value)}
                                        helperText={emailUser === "" ? "" : errEmail}
                                    />
                                </Grid>
                                {/* Password user */}
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        type={"password"}
                                        id={"passwordUser"}
                                        label="Password"
                                        value={passwordUser}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <KeyIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                        variant="outlined"
                                        placeholder="Please enter your password"
                                        onChange={(e) => setPasswordUser(e.target.value)}
                                    />
                                </Grid>
                                {/* Confirm password */}
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        type={"password"}
                                        id={"passwordUserConfirm"}
                                        label="Confirm password"
                                        value={passwordUserConfirm}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <KeyIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                        variant="outlined"
                                        placeholder="Please confirm your password"
                                        onChange={(e) => setPasswordUserConfirm(e.target.value)}
                                        //Cần nhập passwordUser trước
                                        disabled={passwordUser === ""}
                                        helperText={passwordUserConfirm === "" ? "" : errPasswordUserConfirm}
                                    />
                                </Grid>
                                {/* Selection gender */}
                                <Grid item>
                                    <FormLabel>Selection your gender</FormLabel>
                                    <RadioGroup
                                        row name="selection-gender"
                                        onChange={(e) => setGender(e.target.value)}
                                        required
                                    >
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    </RadioGroup>
                                </Grid>
                                {/* Phone user */}
                                <Grid item>
                                    <TextField
                                        required
                                        fullWidth
                                        type={"text"}
                                        id="phoneUser"
                                        label="Your phone"
                                        value={phone}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PhoneIcon />
                                                </InputAdornment>
                                            )
                                        }}
                                        variant="outlined"
                                        placeholder="Please enter your phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" onClick={handleClickSignUp}>
                                        Sign Up
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    )
}