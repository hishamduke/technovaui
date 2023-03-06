import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

import { l2task4data } from "./data/l2task4data";

const LevelTwo4 = ({ setSelectedComponent }) => {
  const [answer, setAnswer] = useState("");
  const nav = useNavigate();

  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 2, task: 4, answer })
      .catch((err) => {
        alert("some error occured");
      });
    console.log(req);

    if (req) {
      console.log("SUBMITTED");
      nav("/level-three");
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
          <h1>Round Two</h1>
          <h3>Task 4</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l2task4data.map((val, key) => {
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
                    <div className="level-audio">
                      <audio controls>
                        <source src={val.audio} type="audio/mp" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        rows="4"
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

export default LevelTwo4;
