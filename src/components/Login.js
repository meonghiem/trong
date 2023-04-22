import React, { useState } from "react";
import { Container } from "@mui/system";
import { Grid, Paper, TextField, Button, InputAdornment, IconButton, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './styles/Login.css'

const client = axios.create({
    baseURL: "http://localhost:3000/"
})

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleClickSignIn = async (event) => {
        event.preventDefault();

        try {
            const response = await client.post("/api/login/email", { email: values.email, password: values.password });
            const data = response.data;
            // Đăng nhập thành công
            if (data.code === 0) {
                const token = data.token;
                const user = JSON.parse(data.user);
                // lưu token và thông tin user vào localStorage
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                // Thông báo đăng nhập thành công
                toast.success("Đăng nhập thành công !", { autoClose: 1500 })
            }
            // Thiếu tham số
            else if (data.code === 1) {
                toast.error("Nhập thiếu dữ liệu !", { autoClose: 1500 })
            }
            // Không tồn tại user ứng với email này
            else if (data.code === 2) {
                toast.error("Không tồn tại người dùng !", { autoClose: 1500 })
            }
            // Mật khẩu không chính xác
            else {
                toast.error("Mật khẩu không chính xác !", { autoClose: 1500 })
            }
        } catch (error) {
            // Lỗi khi kết nối đến server
            console.log(error)
            toast.error("Có lỗi khi kết nối đến server !", { autoClose: 2000 })
        }
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
                    <Paper elevation={20} sx={{ padding: 4, margin: 5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 1 }}>
                            <h1 style={{ color: 'dodgerblue' }}> SIGN IN </h1>
                        </Box>
                        <form>
                            <Grid container spacing={5} direction="column">
                                {/* Enter email user*/}
                                <Grid item >
                                    <TextField
                                        autoFocus
                                        required
                                        fullWidth
                                        type={"text"}
                                        id="emailUser"
                                        label="Email"
                                        value={values.email}
                                        // Thêm icon AccountCircle vào đầu TextField
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle />
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="outlined"
                                        placeholder="Enter your name"
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
                                        value={values.password}
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
                                    <Box sx={{ display: 'flex' }} justifyContent="space-between" alignItems="baseline">
                                        <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleClickSignIn}>
                                            Sign In
                                        </Button>
                                        <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                                            <span className="link-text">Sign up for an account here</span>
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div >
    )
}
