import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios";

const Admin = () => {
  const [users, setUsers] = useState([]);
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
  return (
    <div className="dashboard">
      <h1>Welcome ADMIN</h1>
      <div
        style={{
          margin: "2rem",
          fontSize: "1.5rem",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <p>Users and submissions</p>
        {/* {JSON.stringify(users)} */}
        <table style={{ width: "100%", padding: "3rem" }}>
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
