import React from "react";
import { useState, useEffect } from "react";

const Hotel = ({ hotel }) => {
  const [extraNeeded, setExtraNeeded] = useState(false);

  return (
    <div>
      <h1>{hotel.name}</h1>
      <button onClick={() => setExtraNeeded(!extraNeeded)}>
        {extraNeeded ? "Show less" : "Show more"}
      </button>
      {extraNeeded && (
        <div>
          <p>Stars :{hotel.stars}</p>
          <p>{hotel.city}</p>
        </div>
      )}
    </div>
  );
};

export default Hotel;
