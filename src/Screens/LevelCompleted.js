import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import "../index.css";
const LevelCompleted = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

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
        <p>You have completed this level, please login later</p>
        <button onClick={() => navigate("/login")} class="btn btn-primary">
          Log In
        </button>
      </div>
    </div>
  );
};

export default LevelCompleted;
