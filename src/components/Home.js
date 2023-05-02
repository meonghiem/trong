import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function SignUp() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}