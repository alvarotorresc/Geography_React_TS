import React, { useEffect, useState } from "react";
import country from "./models/country";
import countryService from "./services/CountryService";
import "./App.css";
import CountryList from "./components/CountryList/CountryList";
import Header from "./components/Header/Header";


function App(){
  const [countries, setCountries] = useState<country[]>( [] as country[]);

  useEffect(() => {
    const countriesData = () => {
      countryService.getCountries().then(res => {
        setCountries(res.data);
      });
    };
    countriesData();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <div className="row justify-content-center">
        <CountryList countries={countries}></CountryList>
      </div>
    </div>
  );
};

export default App;
