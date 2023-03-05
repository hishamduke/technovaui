import LevelFour1 from "../Components/levelfour/levelfour1";
import LevelFour2 from "../Components/levelfour/levelfour2";
import TimeOutPage from "./TimeOutPage";
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
const LevelFour = () => {
  const [selectedComponent, setSelectedComponent] = useState("LevelFour1");
  const [timer, setTimer] = useState(60 * 50);
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const nav = useNavigate();
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const renderComponent = () => {
    switch (selectedComponent) {
      case "LevelFour1":
        return <LevelFour1 setSelectedComponent={setSelectedComponent} />;
      case "LevelFour2":
        return <LevelFour2 setSelectedComponent={setSelectedComponent} />;
      default:
        return null;
    }
  };

  async function fetchData() {
    const a = await axiosInstance.get("/check/isSelected");
    setLoaded(true);

    if (a.status == 200) return;
    localStorage.clear();
    nav("/login");
  }

  useEffect(() => {
    fetchData();
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = ""; // This is required to trigger the confirmation dialog
  };
  if (!loaded)
    return (
      <div
        className="dashboard"
        style={{
          fontSize: "1.5rem",
          // backgroundColor: "white",
          color: "white",
          display: "flex",
          justifyContent: "center",
          // height: "100vh",
          marginTop: "auto",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#00000050",
            padding: "3rem",
            borderRadius: "5px",
          }}
        >
          <p>Loading please wait</p>
        </div>
      </div>
    );

  return (
    <div className="dashboard">
      {timer <= 0 ? (
        <TimeOutPage />
      ) : (
        <div className="dashboard-row">
          <div>
            <div className="sidebar">
              <ul className="sidebarlist">
                <li className="row">
                  <div id="icon">
                    <i className="fa-regular fa-clock"></i>
                  </div>{" "}
                  <div id="title">
                    Timer : {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                  </div>
                </li>
                <hr />
                <li
                  className="row"
                  onClick={() => setSelectedComponent("LevelFour1")}
                >
                  <div id="icon">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </div>{" "}
                  <div id="title">Level 1</div>
                </li>
                <li
                  className="row"
                  onClick={() => setSelectedComponent("LevelFour2")}
                >
                  <div id="icon">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </div>{" "}
                  <div id="title">Level 2</div>
                </li>
                <li
                  className="row"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  <div id="icon">
                    {/* <i className="fa-regular fa-pen-to-square"></i> */}
                  </div>
                  <div id="title">Logout</div>
                </li>
              </ul>
            </div>
          </div>
          <div>{renderComponent()}</div>
        </div>
      )}
    </div>
  );
};

export default LevelFour;

// USER
//  uname
//  pwd
// selected

//  Level1 Answers

//  dwa
//  adwdwa
//  dawwda

//  Level2 ,2

//level 4,5
//only selected

// ADMIN
// show finalists
