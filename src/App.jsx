import { Suspense } from "react";
import "./App.css";
import FetchCountries from "./Countrys/FetchCountries";
import ShowCountry from "./Countrys/ShowCountry";
ShowCountry;

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((response) => response.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Country Loading...</p>}>
        <FetchCountries countriesPromise={countriesPromise}></FetchCountries>
      </Suspense>
    </>
  );
}

export default App;
