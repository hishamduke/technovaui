import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

import { l3task3data } from "./data/l3task3data";

const LevelThree3 = () => {
  const [answer, setAnswer] = useState("");

  const nav = useNavigate();
  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 3, task: 3, answer })
      .catch((err) => {
        alert("some error occured");
      });
    console.log(req);

    if (req) {
      console.log("SUBMITTED");
      nav("/stage-one");
      //REPLACE THIS WITH SOME TEXT
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
          <h3>Predit Output</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l3task3data.map((val, key) => {
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
                    <div className="level-image">
                      <img src={val.image1} height="500" width="500" />
                      <br />
                      <img src={val.image2} height="100" width="500" />
                    </div>
                    <div>
                      <textarea
                        className="form-control"
                        id="formGroupExampleInput"
                        rows="7"
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
                type="button"
                onClick={SubmitData}
                className="btn btn-success"
              >
                Next Round
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LevelThree3;
