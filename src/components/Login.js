import React from "react";
import { Container } from "@mui/system";
import { Grid, Paper, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [values, setValues] = React.useState({
        email: "",
        password: ""
    })
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickSignIn = (event) => {
        event.preventDefault();
        // axios
        //     .post("https://reqres.in/api/login", {
        //         email: values.email,
        //         password: values.password
        //     })
        //     .then(res => console.log(res))
        //     .catch(err => console.error(err))
    }
    return (
        <div>
            <Container fixed maxWidth="sm">
                <Grid
                    container
                    spacing={3}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}>
                    <Paper elevation={15} sx={{ padding: 4, margin: 5 }}>
                        <form>
                            <Grid container spacing={3} direction="column">
                                {/* Enter email user */}
                                <Grid item >
                                    <TextField
                                        required
                                        fullWidth
                                        type={"email"}
                                        id="userName"
                                        label="Email"
                                        // Thêm icon AccountCircle vào đầu TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                        placeholder="Enter your email"
                                        // Thêm onChange
                                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                                    />
                                </Grid>
                                {/* Enter password user */}
                                <Grid item >
                                    <TextField
                                        required
                                        fullWidth
                                        type={showPassword ? 'text' : 'password'}
                                        id="passwordUser"
                                        label="Password"
                                        // Thêm icon KeyIcon vào đầu TextField và xử lý ẩn hiện pass
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <KeyIcon />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                        placeholder="Enter your password"
                                        // Thêm onChange
                                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                                    />
                                </Grid>
                                {/* Submit */}
                                <Grid item>
                                    <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleClickSignIn}>
                                        Sign In
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

export default Login;