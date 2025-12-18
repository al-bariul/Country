import React, { use, useState } from "react";
import "./Country.css";
import ShowCountry from "./ShowCountry";
ShowCountry;

const Countries = ({ countriesPromise }) => {
  const storeCountriesPromise = use(countriesPromise);
  const receiveCountryProperty = storeCountriesPromise.countries;

  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountry = (sendData) => {
    console.log(sendData);
    const newVisitedCounties = [...visitedCountry, sendData];
    setVisitedCountry(newVisitedCounties);
  };

  return (
    <div>
      <h1>Total Country : {receiveCountryProperty.length}</h1>
      <h3>Total visited country : {visitedCountry.length}</h3>
      <div className="grid">
        {receiveCountryProperty.map((sendData) => (
          <ShowCountry
            key={sendData.cca3.cca3}
            sendData={sendData}
            handleVisitedCountry={handleVisitedCountry}
          ></ShowCountry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
