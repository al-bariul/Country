import React, { use, useState } from "react";
import "./Country.css";
import ShowCountry from "./ShowCountry";
ShowCountry;

const Countries = ({ countriesPromise }) => {
  const storeCountriesPromise = use(countriesPromise);
  const receiveCountryProperty = storeCountriesPromise.countries;

  const [visitedCountry, setVisitedCountry] = useState([]);

  {
    /*
    const handleVisitedCountry = (sendData) => {
      const newVisitedCounties = [...visitedCountry, sendData];
      setVisitedCountry(newVisitedCounties);
    };
  */
  }

  const handleVisitedCountry = (country) => {
    const isVisited = visitedCountry.find((c) => c.cca3 === country.cca3);

    if (isVisited) {
      // remove
      const remaining = visitedCountry.filter((c) => c.cca3 !== country.cca3);
      setVisitedCountry(remaining);
    } else {
      // add
      setVisitedCountry([...visitedCountry, country]);
    }
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
