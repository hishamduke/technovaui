import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../axios";

const ViewUser = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { userId } = useParams();
  async function fetchData() {
    const a = await axiosInstance.get(`/admin/getuser/${userId}`);
    console.log(a);
    console.log(a.data.data);
    if (a.data.data) setUser(a.data.data);
  }

  useEffect(() => {
    if (!localStorage.getItem("ADMIN")) {
      //   console.log("NOT ADMIN");
      //   localStorage.clear();
      //   navigate("/login");
      //   return;
    }
    fetchData();
  }, []);
  return (
    <div
      className="dashboard"
      style={{
        fontSize: "1.5rem",
        // backgroundColor: "white",
        color: "white",
      }}
    >
      <div
        style={{
          padding: "3rem",
        }}
      >
        <a
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => navigate("/admin")}
        >
          Go back
        </a>
        <p>Users</p>
        <div>{JSON.stringify(userId)}ViewUser</div>
        <div>name {JSON.stringify(user?.name)}</div>
        <div>username {JSON.stringify(user?.username)}</div>
        <div style={{ backgroundColor: "#FFFFFF30", marginBlock: "2rem" }}>
          <h3>Round 1</h3>
          <h4>task1</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task1?.answer}</p>
          </div>
          <h4>task2</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task2?.answer}</p>
          </div>
          <h4>task3</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task3?.answer}</p>
          </div>
          <h4>task4</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task4?.answer}</p>
          </div>
          <h4>task5</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task5?.answer}</p>
          </div>
        </div>

        <div style={{ backgroundColor: "#FFFFFF30", marginBlock: "2rem" }}>
          <h3>Round 2</h3>
          <h4>task1</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round2?.task1?.answer}</p>
          </div>
          <h4>task2</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round2?.task2?.answer}</p>
          </div>
          <h4>task3</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round2?.task3?.answer}</p>
          </div>
          <h4>task4</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round2?.task4?.answer}</p>
          </div>
        </div>

        <div style={{ backgroundColor: "#FFFFFF30", marginBlock: "2rem" }}>
          <h3>Round 3</h3>
          <h4>task1</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round3?.task1?.answer}</p>
          </div>
          <h4>task2</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round3?.task2?.answer}</p>
          </div>
          <h4>task3</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round3?.task3?.answer}</p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "2rem" }}>
          <button>Select</button>
          <button>Eliminate</button>
        </div>

        <div style={{ backgroundColor: "#FFFFFF30", marginBlock: "2rem" }}>
          <h3>Round 4</h3>
          <h4>task1</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round4?.task1?.answer}</p>
          </div>
          <h4>task2</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round4?.task2?.answer}</p>
          </div>
        </div>

        <div style={{ backgroundColor: "#FFFFFF30", marginBlock: "2rem" }}>
          <h3>Round 5</h3>
          <h4>task1</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round4?.task1?.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
