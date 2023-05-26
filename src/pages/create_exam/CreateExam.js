import React from "react";
import Header from "../../components/common/header/Header";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

export default function CreateExam() {

    const isLogin = (Cookies.get('isLogin') === 'true')
    if (!isLogin) {
        return <Navigate replace to="/" />
    }
    else {
        return (
            <div style={{ paddingTop: '90px' }}>
                <Header page="Create exam" />
                <div>
                    Create Exam
                </div>
            </div>
        );
    }
}
