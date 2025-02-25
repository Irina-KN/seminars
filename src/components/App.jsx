import React from "react";
import "./../style/App.css";
import SeminarList from "./seminars/SeminarList";

function App() {
  return (
    <div className="container">
      <h1>Семинары</h1>
      <SeminarList />
    </div>
  );
}
export default App;
