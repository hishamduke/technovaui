import LevelFive1 from "../Components/levelfive/levelfive1";
import LevelFive2 from "../Components/levelfive/levelfive2";
import TimeOutPage from "./TimeOutPage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
const LevelFive = () => {
  const [selectedComponent, setSelectedComponent] = useState("LevelFive1");
  const [timer, setTimer] = useState(60);
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const nav = useNavigate();
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);

  async function roundCheck() {
    const roundReq = await axiosInstance.get("/check/round");
    setLoaded(true);

    if (roundReq.data?.data?.round != 5) {
      localStorage.clear();
      navigate("/login");
    }
  }

  useEffect(() => {}, []);

  async function fetchData() {
    const a = await axiosInstance.get("/check/isSelected");
    roundCheck();
    if (a.status == 200) return;
    localStorage.clear();
    nav("/login");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const renderComponent = () => {
    switch (selectedComponent) {
      case "LevelFive1":
        return <LevelFive1 setSelectedComponent={setSelectedComponent} />;
      case "LevelFive2":
        return <LevelFive2 />;
      default:
        return null;
    }
  };
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
                <li className="row">
                  <div id="icon">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </div>{" "}
                  <div id="title">Round 5</div>
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

export default LevelFive;
