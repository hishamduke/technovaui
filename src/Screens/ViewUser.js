import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../axios";

const ViewUser = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { userId } = useParams();
  async function fetchData() {
    const a = await axiosInstance.get(`/admin/getuser/${userId}`);
    console.log(a);
    console.log(a.data.data);
    if (a.data.data) setUser(a.data.data);
  }

  async function manageUser(selected) {
    const ok = await axiosInstance.post(`/admin/select/${userId}`, {
      selected,
    });
    if (ok.status == 200) {
      navigate("/admin");
    }
    // console.log(ok);
  }
  async function deleteuser(val) {
    console.log(val);
    const ok = await axiosInstance.get(`/admin/delete/${val}`);
    if (ok.status == 200) {
      navigate("/admin");
    }
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
  if (!user) {
    return (
      <div
        className="dashboard"
        style={{
          fontSize: "1.5rem",
          // backgroundColor: "white",
          color: "white",
          display: "flex",
          justifyContent: "center",
          // height: "100vh",
          marginTop: "auto",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#00000050",
            padding: "3rem",
            borderRadius: "5px",
          }}
        >
          <p>Loading please wait</p>
        </div>
      </div>
    );
  }
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
        <div style={{ textAlign: "center" }}>
          <a
            style={{ cursor: "pointer", color: "blue", textAlign: "center" }}
            onClick={() => navigate("/admin")}
          >
            {"<"} Go back
          </a>
          <h1 style={{ textAlign: "center" }}> User</h1>
          {/* <div>{JSON.stringify(userId)}ViewUser</div> */}

          <div>name : {user?.name}</div>
          <div>username : {user?.username}</div>
        </div>
        <div
          style={{
            backgroundColor: "#00000050",
            padding: "2rem",
            marginBlock: "2rem",
          }}
        >
          <h3>Round 1</h3>
          <h3>task1</h3>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task1?.answer}</p>
            <p>Time</p>
            <p>{user?.round1?.task1?.time}</p>
            <hr />
          </div>
          <h3>task2</h3>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task2?.answer}</p>
            <p>Time</p>
            <p>{user?.round1?.task2?.time}</p>
            <hr />
          </div>
          <h3>task3</h3>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task3?.answer}</p>
            <p>Time</p>
            <p>{user?.round1?.task3?.time}</p>
            <hr />
          </div>
          <h3>task4</h3>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task4?.answer}</p>
            <p>Time</p>
            <p>{user?.round1?.task4?.time}</p>
            <hr />
          </div>
          <h3>task5</h3>
          <div>
            <p>Answer</p>
            <p>{user?.round1?.task5?.answer}</p>
            <p>Time</p>
            <p>{user?.round1?.task5?.time}</p>
            <hr />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#00000050",
            padding: "2rem",
            marginBlock: "2rem",
          }}
        >
          <h2>Round 2</h2>
          <h4>task1</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round2?.task1?.answer}</p>
            <p>Time</p>
            <p>{user?.round2?.task1?.time}</p>
            <hr />
          </div>
          <h4>task2</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round2?.task2?.answer}</p>
            <p>Time</p>
            <p>{user?.round2?.task2?.time}</p>
            <hr />
          </div>
          <h4>task3</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round2?.task3?.answer}</p>
            <p>Time</p>
            <p>{user?.round2?.task3?.time}</p>
            <hr />
          </div>
          <h4>task4</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round2?.task4?.answer}</p>
            <p>Time</p>
            <p>{user?.round2?.task4?.time}</p>
            <hr />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#00000050",
            padding: "2rem",
            marginBlock: "2rem",
          }}
        >
          <h2>Round 3</h2>
          <h4>task1</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round3?.task1?.answer}</p>
            <p>Time</p>
            <p>{user?.round3?.task1?.time}</p>
            <hr />
          </div>
          <h4>task2</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round3?.task2?.answer}</p>
            <p>Time</p>
            <p>{user?.round3?.task2?.time}</p>
            <hr />
          </div>
          <h4>task3</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round3?.task3?.answer}</p>
            <p>Time</p>
            <p>{user?.round3?.task3?.time}</p>
            <hr />
          </div>
        </div>

        {/* SELECT USER */}
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          <button
            style={{
              border: "none",
              color: "white",
              padding: "1rem",
              borderRadius: "5px",
              backgroundColor: "#00000070",
            }}
            onClick={() => manageUser(true)}
          >
            Select
          </button>
          <button
            style={{
              border: "none",
              color: "white",
              padding: "1rem",
              borderRadius: "5px",
              backgroundColor: "#00000070",
            }}
            onClick={() => manageUser(false)}
          >
            Eliminate
          </button>
        </div>

        <div
          style={{
            backgroundColor: "#00000050",
            padding: "2rem",
            marginBlock: "2rem",
          }}
        >
          <h2>Round 4</h2>
          <h3>task1</h3>
          <div>
            <p>Answer</p>
            <p>{user?.round4?.task1?.answer}</p>
            <p>Time</p>
            <p>{user?.round4?.task1?.time}</p>
            <hr />
          </div>
          <h4>task2</h4>
          <div>
            <p>Answer</p>
            <p>{user?.round4?.task2?.answer}</p>
            <p>Time</p>
            <p>{user?.round4?.task2?.time}</p>
            <hr />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#00000050",
            padding: "2rem",
            marginBlock: "2rem",
          }}
        >
          <h2>Round 5</h2>
          <h3>task1</h3>
          <div>
            <p>Answer</p>
            <p>{user?.round5?.task1?.answer}</p>
            <p>Time</p>
            <p>{user?.round5?.task1?.time}</p>
            <hr />
          </div>
        </div>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          <button
            style={{
              border: "none",
              color: "white",
              padding: "1rem",
              borderRadius: "5px",
              backgroundColor: "#00000070",
            }}
            onClick={() => deleteuser(user?.id)}
          >
            Delete User
          </button>
        </div>
      </div>
    </div>
    //daw
  );
};

export default ViewUser;
