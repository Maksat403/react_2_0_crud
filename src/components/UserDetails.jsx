import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных пользователя", error);
        setUser(null);
      });
  }, [id]);

  return (
    <div className="userDetails">
      <h1>Детали</h1>
      {user ? (
        <div>
          <p>Имя: {user.name || "Неизвестно"}</p>
          <p>Email: {user.email || "Неизвестно"}</p>
          <p>Статус: {user.status || "Неизвестно"}</p>
          <p>
            Город:{" "}
            {user.location ? user.location.name || "Неизвестно" : "Неизвестно"}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetails;
