import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import "../index.css";
const StageOne = () => {
  const nav = useNavigate();
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
        <p>Stage one finished, Please wait for more updates!!</p>
        <p>Good Luck!</p>
        {/* <button onClick={() => nav("/login")} class="btn btn-primary">
          Log In
        </button> */}
      </div>
    </div>
  );
};

export default StageOne;
