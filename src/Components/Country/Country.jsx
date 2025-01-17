import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
  // console.log(country);
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h5>Country Name:{name.common}</h5>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code:{cca3}</small>
      </p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark as visited
      </button>
      <br />
      <br />
      <button onClick={handleVisited}>{visited ? "visited" : "going"}</button>
      {visited && "I have visited this country"}
    </div>
  );
};

export default Country;
