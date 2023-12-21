import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const API = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios.get(API).then((res) => {
      setUsers(res.data.results);
    });
  }, []);

  return (
    <div>
      <div className="userPageMain">
        <h1>Users Page</h1>
        {users.map((elem) => (
          <Link to={`/users/${elem.id}`} key={elem.id}>
            <div className="userPageContainer">
              <img
                src={elem.image}
                alt={`Avatar of ${elem.name}`}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  gap: "90px",
                }}
              />
              <p>{elem.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
