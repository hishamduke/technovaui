import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import { l4task1data } from "./data/l4task1data";
const LevelFour1 = ({ setSelectedComponent }) => {
  const [answer, setAnswer] = useState("");
  const [loaded, setLoaded] = useState(false);

  const nav = useNavigate();
  async function fetchData() {
    const a = await axiosInstance.get("/check/isSelected");
    if (a.status != 200) {
      localStorage.clear();
      nav("/login");
    } else setLoaded(true);
  }

  async function SubmitData(e) {
    e.preventDefault();
    const req = await axiosInstance
      .post("/answer/submit/", { round: 4, task: 1, answer })
      .catch((err) => {
        alert("some error occured");
      });

    if (req) {
      setSelectedComponent("LevelFour2");
      // setTimeout(navigate("/level-one"), 1000);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!loaded) return;

  return (
    <>
      <div className="level">
        <div className="level-head">
          <h1>Round Four</h1>
          <h3>Pattern Code</h3>
        </div>
        <div className="level-body">
          <form>
            <ul className="level-data">
              {l4task1data.map((val, key) => {
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
                    <div>
                      {/* <input type="file" className="form-control upload" id="formGroupExampleInput" rows="4"/> */}
                      <textarea
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

export default LevelFour1;
