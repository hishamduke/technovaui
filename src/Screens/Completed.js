import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import "../index.css";
const Completed = () => {
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
          backgroundColor: "#ffffffbb",
          padding: "3rem",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>You have completed technova.</p>
        <p>We will publish the result soon!</p>
        <p>Thank you for participating.</p>

        {/* <button onClick={() => nav("/login")} class="btn btn-primary">
          Log In
        </button> */}
      </div>
    </div>
  );
};

export default Completed;
