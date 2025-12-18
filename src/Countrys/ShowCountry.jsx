import React, { useState } from "react";
import "./Country.css";

const ShowCountry = ({ sendData, handleVisitedCountry }) => {
  //   const { name } = sendData;
  //   console.log(handleVisitedCountry);
  const population = `${sendData.population.population / 1000}`;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountry(sendData);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={sendData.flags.flags.png} alt={sendData.flags.flags.alt} />
      <h4>Name : {sendData.name.common}</h4>
      <p>Population : {population}</p>
      <p>
        Area : {sendData.area.area}{" "}
        {sendData.area.area > 300000 ? (
          <b>Big Country</b>
        ) : (
          <b>Small Country</b>
        )}
      </p>
      <button onClick={handleVisited}>
        {/*         
        At frist আমি কোনও country visite করি নি । 
        তাই setVisited = false । 
        এর পর যখন button click হবে 
        তখন setVisited = true হবে। 
        এবং যখন true হবে তখন visited দেখাবে। 
        Initially যেখেতু false তাই Not Visited দেখাবে 
        */}
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default ShowCountry;

{
  /*}
const handleVisited = () => {
  // setVisited(true);
  if (visited) {
    setVisited(false);
  } else {
    setVisited(true);
  }
  // OR
  {
    /*
    setVisited(visited ? false : true);
    */
}
// OR
{
  /*
    setVisited(!visited);
    */
}
{
  /*}
  handleVisitedCountry(sendData);
};

*/
}
