function DeleteSeminarModal({ seminar, setShowConfirm, onDelete }) {
  const handleDelete = () => {
    fetch(`http://localhost:5000/seminars/${seminar.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          onDelete(seminar.id);
        } else {
          console.error("Ошибка при удалении");
        }
      })
      .catch((error) => console.error("Ошибка сети:", error));
  };

  return (
    <div className="modalDelete">
      <div className="mainModalDelete">
        <h3>Подтверждение удаления</h3>
        <p>Вы уверены, что хотите удалить семинар?</p>
        <div className="buttonsModalDelete">
          <button onClick={() => setShowConfirm(false)} className="button">
            Отмена
          </button>
          <button onClick={handleDelete} className="buttonDelete">
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteSeminarModal;
