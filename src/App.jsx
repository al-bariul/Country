import { Suspense } from "react";
import "./App.css";
import Countries from "./Countrys/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((response) => response.json());

function App() {
  return (
    <>
      <h1>React Show World In The UI</h1>
      <Suspense fallback={<p>Country Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
