import React, { useState, useEffect } from "react";
import Country from '../Country/Country';
import CountryModel from '../../models/country';


 function CountryList ({ countries }: AppProps) {
  return (
    <div className="col-12 p-5 row">
      {countries.map(country => {
          console.log(country.name);
      })}
    </div>
  );
};

type AppProps = {
  countries: [CountryModel];
};

export default CountryList;
