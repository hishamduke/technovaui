import { l1task3data } from "./data/l1task3data";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
const LevelOne3 = ({ setSelectedComponent }) => {
  const [answers, setAnswers] = useState(new Array(15).fill(""));
  function changeData(e, idx) {
    setAnswers((prev) =>
      prev.map((value, i) => (i == idx ? e.target.value : value))
    );
  }

  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 1, task: 3, answer: answers })
      .catch((err) => {
        alert("Some error occured");
      });
    console.log(req);

    if (req) {
      console.log("SUBMITTED");
      setSelectedComponent("LevelOne4");
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
          <h3>Task 3</h3>
        </div>
        <div className="level-body">
          
          <form>
            <ul className="level-data">
              {l1task3data.map((val, key) => {
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
                      <img src={val.image} height="100" width="150" />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id={`formGroupExampleInput${key}`}
                        rows="4"
                        value={answers[key]}
                        onChange={(e) => changeData(e, key)}
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

export default LevelOne3;
