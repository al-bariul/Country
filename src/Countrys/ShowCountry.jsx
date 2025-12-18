import React from "react";
import "./Country.css";

const ShowCountry = ({ sendData }) => {
  //   const { name } = sendData;
  //   console.log(sendData.flags.flags.alt);
  const population = `${sendData.population.population / 1000}`;
  return (
    <div className="country">
      <img src={sendData.flags.flags.png} alt={sendData.flags.flags.alt} />
      <h4>Name : {sendData.name.common}</h4>
      <p>Population : {population}</p>
    </div>
  );
};

export default ShowCountry;
