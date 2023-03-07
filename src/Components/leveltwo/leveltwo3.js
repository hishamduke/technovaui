import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import { l2task3data } from "./data/l2task3data";

const LevelTwo3 = ({ setSelectedComponent }) => {
  const [answer, setAnswer] = useState("");

  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 2, task: 3, answer })
      .catch((err) => {
        alert("some error occured");
      });

    if (req) {
      setSelectedComponent("LevelTwo4");
      // setTimeout(navigate("/level-one"), 1000);
    }
  }

  async function fetchData() {
    const a = await axiosInstance.get("/check");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round Two</h1>
          <h3>Task 3</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l2task3data.map((val, key) => {
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
                      <img src={val.image} height="400" width="500" />
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LevelTwo3;
