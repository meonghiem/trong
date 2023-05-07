import React, { useState } from "react";
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

export default function LayoutProfile() {
    // Fake data
    const email = 'trieunguyen241102@gmail.com';
    const userName = 'trieunguyen2411';
    const phone = '2313123123';
    const gender = 'male';
    const role = 'user';
    const rank = 'beginer';
    // Lấy phần thời gian
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const createdAt = `${day}/${month}/${year}`;

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
