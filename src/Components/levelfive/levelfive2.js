import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";

import { l5task2data } from "./data/l5task2data";

const LevelFive2 = () => {
  const [answer, setAnswer] = useState(["", "", ""]);
  const [loaded, setLoaded] = useState(false);

  const nav = useNavigate();

  async function fetchData() {
    const a = await axiosInstance.get("/check/isSelected");
    console.log(a);
    if (a.status != 200) {
      localStorage.clear();
      nav("/login");
    } else setLoaded(true);
  }

  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 5, task: 1, answer })
      .catch((err) => {
        alert("some error occured");
      });
    console.log(req);

    if (req) {
      console.log("SUBMITTED");
      nav("/completed");
      // setSelectedComponent("LevelFour2");
      // setTimeout(navigate("/level-one"), 1000);
    }
  }

  function changeData(e, i) {
    setAnswer((prev) =>
      prev.map((prev, idx) => (idx == i ? e.target.value : prev))
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!loaded) return;
  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round Five</h1>
          <h3>Riddle</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l5task2data.map((val, key) => {
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
                    <br />

                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1st Question"
                        id="formGroupExampleInput"
                        rows="4"
                        value={answer[0]}
                        onChange={(e) => changeData(e, 0)}
                      />
                    </div>
                    <br />
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="2nd Question"
                        id="formGroupExampleInput"
                        rows="4"
                        value={answer[1]}
                        onChange={(e) => changeData(e, 1)}
                      />
                    </div>
                    <br />
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="3rd Question"
                        id="formGroupExampleInput"
                        rows="4"
                        onChange={(e) => changeData(e, 2)}
                        value={answer[2]}
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

export default LevelFive2;
