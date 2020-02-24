import React, { useEffect, useState } from "react";
import countryService from "./services/CountryService";
import "./App.css";
import CountryList from "./components/CountryList/CountryList";
import Header from "./components/Header/Header";

function App(){
  const [countries, setCountries] = useState<[]>([]);

  useEffect(() => {
    const countriesData = () => {
      countryService.getCountries().then(res => {
        console.log("object");
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
