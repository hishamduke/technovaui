import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

import { l3task2data } from "./data/l3task2data";

const LevelThree2 = ({ setSelectedComponent }) => {
  const [answer, setAnswer] = useState("");

  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 3, task: 2, answer })
      .catch((err) => {
        alert("some error occured");
      });
    console.log(req);

    if (req) {
      console.log("SUBMITTED");
      setSelectedComponent("LevelThree3");
      // setTimeout(navigate("/level-one"), 1000);
    }
  }

  async function fetchData() {
    const a = await axiosInstance.get("/check");
    console.log(a);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round Three</h1>
          <h3>Golf Coding</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l3task2data.map((val, key) => {
                return (
                  <li key={key} className="level-val">
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn}
                      </label>
                    </div>
                    <div>
                      {/* <input type="file" className="form-control upload" id="formGroupExampleInput" rows="4"/> */}
                      <textarea
                        style={{ width: "80%", height: "15rem" }}
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="submit">
              <button
                onClick={SubmitData}
                type="button"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LevelThree2;
