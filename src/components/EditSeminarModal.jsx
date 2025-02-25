import React, { useState } from "react";

const EditSeminarModal = ({ seminar, onClose, onSave }) => {
  const [title, setTitle] = useState(seminar.title);
  const [description, setDescription] = useState(seminar.description);
  const [date, setDate] = useState(seminar.date);
  const [time, setTime] = useState(seminar.time);

  const handleSave = (e) => {
    const updatedSeminar = { ...seminar, title, description, date, time };
    e.preventDefault();
    fetch(`http://localhost:5000/seminars/${seminar.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedSeminar),
    })
      .then((response) => response.json())
      .then((data) => {
        onSave(data);
        onClose();
      })
      .catch((error) => console.error("Ошибка обновления:", error));
  };

  return (
    <div className="modalEdit">
      <div className="mainModalEdit">
        <h2>Редактировать семинар</h2>
        <form onSubmit={handleSave}>
          <div>
            <label htmlFor="title">Название: </label>
            <textarea
              type="text"
              name="title"
              placeholder="Название"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              rows="3"
            />
          </div>
          <div>
            <label htmlFor="date">Дата: </label>
            <input
              type="date"
              name="date"
              value={date.split(".").reverse().join("-")}
              onChange={(e) =>
                setDate(e.target.value.split("-").reverse().join("."))
              }
            />
          </div>
          <div>
            <label htmlFor="time">Время: </label>
            <input
              type="time"
              placeholder="Время"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Описание: </label>
            <textarea
              placeholder="Описание"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
            />
          </div>
          <div className="buttonsModalEdit">
            <button type="submit" className="save-button">
              Сохранить
            </button>
            <button onClick={onClose} className="cancel-button">
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSeminarModal;
