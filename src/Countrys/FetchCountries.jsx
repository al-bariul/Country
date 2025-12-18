import React, { use } from "react";
import ShowCountry from "./ShowCountry";
ShowCountry;

const Countries = ({ countriesPromise }) => {
  const storeCountriesPromise = use(countriesPromise);
  const receiveCountryProperty = storeCountriesPromise.countries;

  console.log(storeCountriesPromise);
  console.log(receiveCountryProperty);

  return (
    <div>
      <h1>Total Country : {receiveCountryProperty.length}</h1>
      {receiveCountryProperty.map((sendData) => (
        <ShowCountry sendData={sendData}></ShowCountry>
      ))}
    </div>
  );
};

export default Countries;
