import { l1task2data } from "./data/l1task2data";

import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";

const LevelOne2 = ({ setSelectedComponent }) => {
  const [answers, setAnswers] = useState(new Array(15).fill(""));
  function changeData(e, idx) {
    setAnswers((prev) =>
      prev.map((value, i) => (i == idx ? e.target.value : value))
    );
  }

  async function SubmitData(e) {
    console.log("SUBMISSION");
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 1, task: 2, answer: answers })
      .catch((err) => {
        alert("Some error occured");
      });
    console.log(req);

    if (req) {
      console.log("SUBMITTED");
      setSelectedComponent("LevelOne3");
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
          <h1>Round One</h1>
          <h3>Task 2</h3>
        </div>
        <div className="level-body">
          <form>
            <ol className="level-data">
              {l1task2data.map((val, key) => {
                return (
                  <li key={key} className="level-val">
                    <div className="level-qstn">
                      <label
                        className="form-check-label"
                        for="formGroupExampleInput"
                      >
                        {val.qstn}
                        <img src={val.image} width="200" />
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id={`formGroupExampleInput${key}`}
                        rows="4"
                        onChange={(e) => changeData(e, key)}
                        value={answers[key]}
                      />
                    </div>
                  </li>
                );
              })}
            </ol>
            <div>
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

export default LevelOne2;
