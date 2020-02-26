import React from "react";
import country from "../../models/country";
import Country from "../Country/Country";

function CountryList({ countries }: AppProps) {
  return (
    <div className="col-12 p-5 row">
      {countries.map(country => {
        return <Country key={country.alpha3Code} country={country}></Country>;
      })}
    </div>
  );
}

type AppProps = {
  countries: country[];
};

export default CountryList;
