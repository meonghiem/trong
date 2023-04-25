import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsLogin, selectToken } from "../pages/loginSlice";

export default function Home() {
    const token = useSelector(selectToken);
    const isLogin = useSelector(selectIsLogin);
    useEffect(() => {
        console.log("token:", token);
        console.log("isLogin:", isLogin);
    })
    return (<div>
        Home
    </div>
    )
}