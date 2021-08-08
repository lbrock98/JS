import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar.js';
import { getGeoData } from './App.js';
import DateFilter from './DateFilter.js'


export default function FilterHolder() {

    //state variables from searchBar
    const [options, setOptions] = useState([]);
    console.log("options", options);
    const [geoData, setGeoData] = useState({});

    //state variable for buttons
    const [locationLevel, setLocationLevel] = useState("");

    //set options for search bar
    useEffect(() => {
        console.log("trigger", options);
        getGeoData().then(result => {
            const allData = [...result.cities, ...result.counties, ...result.states];
            allData.sort((a, b) => (a.label > b.label) ? 1 : -1);
            setOptions(allData);
            setGeoData(result);
            console.log("my data : ", allData);
        })
    }, []
    );

    //button function to filter geography options in searchbar 
    function filterOptions(location) {
        setLocationLevel(location);
        setOptions(geoData[location]);
    }

    return (
        <div className="FilterHolder">
            <div className="DateFilter">
                <DateFilter />
            </div>
            <div>
                <button className={locationLevel == "cities" ? "highlighted" : ""} id="button1" onClick={() => filterOptions("cities")}>CITIES</button>
                <button className={locationLevel == "counties" ? "highlighted" : ""} id="button2" onClick={() => filterOptions("counties")}>COUNTIES</button>
                <button className={locationLevel == "states" ? "highlighted" : ""} id="button3" onClick={() => filterOptions("states")}>STATES</button>
            </div >
            <SearchBar
                options={options}
            />
        </div>
    );
}