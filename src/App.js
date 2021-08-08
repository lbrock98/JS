import React from "react";
import "./App.css";
import Header from "./Header.js";
import FilterHolder from "./FilterHolder.js";

export async function getGeoData() {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const getData = await fetch("/api", options);

  const geoData = await getData.json();

  console.log("full array", geoData);
  return geoData;
}


function App() {

  return (
    <div>
      <Header />

      <FilterHolder />
    </div>
  );
}



export default App;