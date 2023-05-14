import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneIcon from '@mui/icons-material/Phone';
import TransgenderIcon from '@mui/icons-material/Transgender';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import StarIcon from '@mui/icons-material/Star';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CreateIcon from '@mui/icons-material/Create';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export default function LayoutProfile() {
    // Lấy token
    const token = Cookies.get('token')
    // Thông tin của user
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");
    const [rank, setRank] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const id = Cookies.get('id');
                const response = await axios.get(`http://localhost:8001/api/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                // console.log(response);
                const data = response.data;
                setEmail(data.user.email);
                setUserName(data.user.user_name);
                setPhone(data.user.phone);
                setGender(data.user.gender);
                setRole(data.user.role);
                setRank(data.user.rank);
                setCreatedAt(data.user.createdAt);
            } catch (error) {
                toast.error("An error occurred while connecting to the server", { autoClose: 500 })
                // console.log(error);
            }
        }
        fetchData();
    }, [token]);

    //Thay đổi phone
    const [openChangePhone, SetOpenChangePhone] = useState(false);

    const handleClickChangePhone = () => {
        SetOpenChangePhone(!openChangePhone);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* Tiêu đề */}
            <Typography variant="h5" gutterBottom>
                <strong>Personal Information</strong>
            </Typography>
            {/* Nội dung */}
            <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
                {/* Email */}
                <Grid container sx={{ paddingTop: '20px' }}>
                    <Grid item sx={{ paddingRight: '20px', paddingLeft: '15px' }} xs={1}>
                        <Typography><strong>Email</strong></Typography>
                    </Grid>
                    <Grid item sx={{ paddingRight: '20px' }} xs={3}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            disabled
                            value={email}
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
                {/* User name */}
                <Grid container sx={{ paddingTop: '20px' }}>
                    <Grid item sx={{ paddingRight: '20px', paddingLeft: '15px' }} xs={1}>
                        <Typography><strong>User name</strong></Typography>
                    </Grid>
                    <Grid item sx={{ paddingRight: '20px' }} xs={3}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BadgeIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            disabled
                            value={userName}
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
                {/* Phone */}
                <Grid container sx={{ paddingTop: '20px' }}>
                    <Grid item sx={{ paddingRight: '20px', paddingLeft: '15px' }} xs={1}>
                        <Typography><strong>Phone</strong></Typography>
                    </Grid>
                    <Grid item sx={{ paddingRight: '20px' }} xs={3}>
                        <TextField
                            onChange={(event) => { setPhone(event.target.value) }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <PhoneIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            disabled={!openChangePhone}
                            value={phone}
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                    <Grid item sx={{ paddingRight: '20px' }} xs={1}>
                        <IconButton onClick={handleClickChangePhone} className="icon-button">
                            {openChangePhone ? <BorderColorIcon /> : <CreateIcon />}
                        </IconButton>
                    </Grid>
                </Grid>
                {/* Gender */}
                <Grid container sx={{ paddingTop: '20px' }}>
                    <Grid item sx={{ paddingRight: '20px', paddingLeft: '15px' }} xs={1}>
                        <Typography><strong>Gender</strong></Typography>
                    </Grid>
                    <Grid item sx={{ paddingRight: '20px' }} xs={3}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <TransgenderIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            disabled
                            value={gender}
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
                {/* Role */}
                <Grid container sx={{ paddingTop: '20px' }}>
                    <Grid item sx={{ paddingRight: '20px', paddingLeft: '15px' }} xs={1}>
                        <Typography><strong>Role</strong></Typography>
                    </Grid>
                    <Grid item sx={{ paddingRight: '20px' }} xs={3}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <ManageAccountsIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            disabled
                            value={role}
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
                {/* Rank */}
                <Grid container sx={{ paddingTop: '20px' }}>
                    <Grid item sx={{ paddingRight: '20px', paddingLeft: '15px' }} xs={1}>
                        <Typography><strong>Rank</strong></Typography>
                    </Grid>
                    <Grid item sx={{ paddingRight: '20px' }} xs={3}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <StarIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            disabled
                            value={rank}
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
                {/* Created At */}
                <Grid container sx={{ paddingTop: '20px' }}>
                    <Grid item sx={{ paddingRight: '20px', paddingLeft: '15px' }} xs={1}>
                        <Typography><strong>Created at</strong></Typography>
                    </Grid>
                    <Grid item sx={{ paddingRight: '20px' }} xs={3}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EditCalendarIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            disabled
                            value={createdAt}
                            sx={{ width: "100%" }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
