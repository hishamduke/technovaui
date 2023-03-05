import { l1task4data } from "./data/l1task4data";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";

const LevelOne4 = ({ setSelectedComponent }) => {
  const [answer, setAnswer] = useState(`1.\n2.\n3.\n4.\n5.\n6.\n7.\n8.\n9.`);
  function changeData(e) {
    setAnswer(e.target.value);
  }

  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 1, task: 4, answer })
      .catch((err) => {
        alert("Some error occured");
      });
    console.log(req);

    if (req) {
      console.log("SUBMITTED");
      setSelectedComponent("LevelOne5");
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
          <h3>Task 4</h3>
        </div>
        <div className="level-body">
          <form onSubmit={SubmitData}>
            <ol className="level-data">
              {l1task4data.map((val, key) => {
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
                      <img
                        src={require("../../images/l1task4.jpg")}
                        height="400"
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <textarea
                        className="form-control"
                        id="formGroupExampleInput"
                        rows="6"
                        value={answer}
                        onChange={changeData}
                      ></textarea>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="submit">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LevelOne4;
