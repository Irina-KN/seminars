import DeleteSeminarModal from "../DeleteSeminarModal";
import "./../../style/App.css";
import React, { useState } from "react";

function SeminarCard({ seminar, handleDeleteSeminar, onEdit }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <article className="blockSeminar">
      <div className="imageBlockSeminar">
        <img src={seminar.photo} alt="Фотография семинара" />
      </div>
      <div className="mainBlockSeminar">
        <h2>{seminar.title}</h2>
        <p className="dateMainBlockSeminar">
          <b>Дата проведения: </b>
          {seminar.date}
        </p>
        <p className="timeMainBlockSeminar">
          <b>Время: </b>
          {seminar.time}
        </p>
        <p>{seminar.description}</p>
        <div className="buttonsMainBlockSeminar">
          <button
            className="buttonChange"
            type="button"
            onClick={() => {
              onEdit(seminar);
            }}
          >
            Изменить
          </button>
          <button
            className="buttonDelete"
            type="button"
            onClick={() => setShowConfirm(true)}
          >
            Удалить
          </button>
          {showConfirm && (
            <DeleteSeminarModal
              seminar={seminar}
              setShowConfirm={setShowConfirm}
              onDelete={handleDeleteSeminar}
            />
          )}
        </div>
      </div>
    </article>
  );
}
export default SeminarCard;
