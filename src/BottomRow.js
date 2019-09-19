import React, { useState, useEffect } from "react";
import "./App.css";

const BottomRow = () => {

  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [togo, setTogo] = useState(10);
  const [ballOn, setBallOn] = useState(1);

  if ( down === 5) {
    setDown(1);
  }

  if ( togo > 101) {
    setTogo(0);
  }

  if ( ballOn > 101) {
    setBallOn(0);
  }



 useEffect(() => {
  let timer = null;
  if ( quarter === 1 ) {
    const timer = setTimeout(() => {
      setQuarter( quarter + 1);
    }, 2000);
  } else if (quarter === 2 ) {
    const timer = setTimeout(() => {
      setQuarter( quarter + 1);
    }, 2000);
  } else if (quarter === 3 ) {
    const timer = setTimeout(() => {
      setQuarter( quarter + 1);
    }, 2000);
  } else if (quarter === 4 ) {
    const timer = setTimeout(() => {
      setQuarter( quarter + 1);
    }, 2000);
  } else {
    setQuarter(1);
  } 
  return () => clearTimeout(timer);
}, [quarter]);






  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <button  onClick={() => setDown(down + 1)}>click</button>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title" >To Go</h3>
        <button  onClick={() => setTogo(togo + 10)}>click</button>
        <div className="toGo__value">{togo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title" >Ball on</h3>
        <button  onClick={() => setBallOn(ballOn + 1)}>click</button>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
