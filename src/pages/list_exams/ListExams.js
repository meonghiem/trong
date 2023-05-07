import React from "react";
import Header from "../../components/common/header/Header";
import CardContainer from "../../components/card/CardContainer";
import styles from "../home/Home.module.css";
import { useTheme, ThemeProvider } from "@emotion/react";

export default function ListExams() {
  return (
    <>
      <div style={{ paddingTop: "90px" }}>
        <Header page="List exams" />
      </div>
      <div>ListExams</div>
    </>
  );
}
