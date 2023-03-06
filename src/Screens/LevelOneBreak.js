import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import "../index.css";
const LineOneBreak = () => {
  const nav = useNavigate();
 

  return (
    <div
      className="dashboard"
      style={{
        fontSize: "1.5rem",
        // backgroundColor: "white",
        color: "black",
        display: "flex",
        justifyContent: "center",
        // height: "100vh",
        marginTop: "auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF50",
          padding: "3rem",
          borderRadius: "5px",
        }}
      >
        
        <button onClick={() => nav("/level-two")} class="btn btn-primary btn-lg">
          Next Round
        </button>
      </div>
    </div>
  );
};

export default LineOneBreak;
