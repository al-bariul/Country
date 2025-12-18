import React, { use } from "react";
import "./Country.css";
import ShowCountry from "./ShowCountry";
ShowCountry;

const Countries = ({ countriesPromise }) => {
  const storeCountriesPromise = use(countriesPromise);
  const receiveCountryProperty = storeCountriesPromise.countries;

  

  return (
    <div>
      <h1>Total Country : {receiveCountryProperty.length}</h1>
      <h3>Total visited country : </h3>
      <div className="grid">
        {receiveCountryProperty.map((sendData) => (
          <ShowCountry
            key={sendData.cca3.cca3}
            sendData={sendData}
          ></ShowCountry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
