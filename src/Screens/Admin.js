import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";
import "../index.css";
const Admin = () => {
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  async function fetchData() {
    const a = await axiosInstance.get("/admin/getallusers");
    console.log(a);
    console.log(a.data.data);
    if (a.data.data) setUsers(a.data.data);
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
  if (!users) {
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
    <div className="dashboard">
      <div
        style={{
          padding: "3rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Welcome ADMIN</h1>
        <h2
          style={{
            color: "white",
            cursor: "pointer",
            color: "blue",
          }}
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </h2>
      </div>
      <div
        style={{
          margin: "2rem",
          fontSize: "1.5rem",
          backgroundColor: "#00000070",
          color: "white",
          borderRadius: "10px",
        }}
      >
        <p
          style={{ fontSize: "2rem", paddingTop: "1rem", textAlign: "center" }}
        >
          Users and submissions
        </p>
        {/* {JSON.stringify(users)} */}
        <table
          style={{
            width: "100%",
            padding: "3rem",
            borderCollapse: "separate",
            borderSpacing: "1.5rem",
          }}
        >
          <thead>
            <tr>
              <th>Username</th>
              <th>Manage</th>
              <th>Is Selected</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <>
                <tr key={user?.id}>
                  <td>{user.name}</td>
                  <td>
                    <a
                      style={{ cursor: "pointer" }}
                      className="hover"
                      onClick={() => navigate(`/admin/${user.id}`)}
                    >
                      View user
                    </a>
                  </td>
                  <td>{user?.selected ? "yes" : "no"}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
