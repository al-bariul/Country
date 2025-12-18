import React, { use } from "react";

const Countries = ({ countriesPromise }) => {
  const storeCountriesPromise = use(countriesPromise);
  console.log(storeCountriesPromise);
  
  return <div></div>;
};

export default Countries;
