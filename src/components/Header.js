import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar, AppBar, Typography, Menu, MenuItem, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { AccountCircle } from "@mui/icons-material";

export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleClickAccoutCircle = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickHomeIcon = () => {
        navigate("/home");
    };

    const handleViewProfile = () => {
        handleClose();
        navigate("/profile");
    };

    const handleSignOut = () => {
        handleClose();
        navigate("/");
    };
    return (
        <div>
            <AppBar position="fixed" >
                <Toolbar>
                    {/* Icon Home */}
                    <IconButton onClick={handleClickHomeIcon} size="large">
                        <HomeIcon sx={{ fontSize: 45 }} />
                    </IconButton>
                    {/* Danh sách bài thi */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/list_exam"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            borderLeft: '2px solid grey',
                            paddingLeft: '10px',
                        }}
                    >
                        LIST EXAMS
                    </Typography>
                    {/* Tạo bài thi */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/create_exam"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                            borderLeft: '2px solid grey',
                            paddingLeft: '10px',
                        }}
                    >
                        CREATE EXAM
                    </Typography>
                    {/* AccoutCircle */}
                    <IconButton sx={{ marginLeft: 'auto', marginRight: 6 }} onClick={handleClickAccoutCircle} size="large">
                        <AccountCircle sx={{ fontSize: 45 }} />
                    </IconButton>
                    {/* Tạo Menu */}
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleViewProfile}>View Profile</MenuItem>
                        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}