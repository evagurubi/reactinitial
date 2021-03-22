import "./App.css";
import React, { useState, useEffect } from "react";
import LoadingMask from "./LoadingMask";
import Hotel from "./Hotel";
import Subscription from "./Subscription";

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);

  const fetchData = () => {
    fetch("api/hotels")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      })

      .catch(function () {
        setError(true);
        setLoader(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Hotels</h1>
      {!data && loader ? (
        <LoadingMask />
      ) : (
        <div>
          {data && data.map((hotel, i) => <Hotel key={i} hotel={hotel} />)}
          {error && <p>Oops, something happened</p>}

          {data && <Subscription />}
        </div>
      )}
    </div>
  );
};

export default App;
