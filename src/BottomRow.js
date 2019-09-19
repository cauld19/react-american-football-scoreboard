import React, { useState, useEffect } from "react";
import "./App.css";

const BottomRow = () => {

  const [quarter, setQuarter] = useState(1);

 useEffect(() => {
  let timer = null;
  if ( quarter === 1 ) {
    const timer = setTimeout(() => {
      setQuarter( quarter + 1);
    }, 180000);
  } else if (quarter === 2 ) {
    const timer = setTimeout(() => {
      setQuarter( quarter + 1);
    }, 180000);
  } else if (quarter === 3 ) {
    const timer = setTimeout(() => {
      setQuarter( quarter + 1);
    }, 180000);
  } else {
    setQuarter(4);
  } 
  return () => clearTimeout(timer);
}, [quarter]);






  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">1</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
