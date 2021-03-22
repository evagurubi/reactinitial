import "./App.css";
import React, { useState, useEffect } from "react";
import LoadingMask from "./LoadingMask";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch("api/hotels")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })

      .catch(function () {
        setError(true);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
    </div>
  );
};

export default App;
