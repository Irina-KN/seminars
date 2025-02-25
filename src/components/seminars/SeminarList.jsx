import React from "react";
import SeminarCard from "./SeminarCard";
import "./../../style/App.css";
import { useEffect, useState } from "react";
import EditSeminarModal from "./../EditSeminarModal";

function SeminarList() {
  const [seminars, setSeminars] = useState([]);
  const [editingSeminar, setEditingSeminar] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/seminars")
      .then((response) => response.json())
      .then((response) => {
        setSeminars(response);
      })
      .catch((error) => console.error("Ошибка загрузки:", error));
  }, []);
  const handleDeleteSeminar = (id) => {
    setSeminars(seminars.filter((seminar) => seminar.id !== id));
  };
  const handleUpdateSeminar = (updatedSeminar) => {
    setSeminars(
      seminars.map((seminar) =>
        seminar.id === updatedSeminar.id ? updatedSeminar : seminar
      )
    );
  };

  return (
    <div className="containerSeminars">
      {seminars.map((seminar) => {
        return (
          <SeminarCard
            key={seminar.id}
            seminar={seminar}
            handleDeleteSeminar={handleDeleteSeminar}
            onEdit={setEditingSeminar}
          />
        );
      })}
      {editingSeminar && (
        <EditSeminarModal
          seminar={editingSeminar}
          onClose={() => setEditingSeminar(null)}
          onSave={handleUpdateSeminar}
        />
      )}
    </div>
  );
}
export default SeminarList;
