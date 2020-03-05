import React, { useEffect, useState } from "react";
import country from "./models/country";
import countryService from "./services/CountryService";
import "./App.css";
import CountryList from "./components/CountryList/CountryList";
import Header from "./components/Header/Header";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CountryDetail from "./components/CountryDetail/CountryDetail";

function App() {
  const [countries, setCountries] = useState<country[]>([] as country[]);

  useEffect(() => {
    const countriesData = () => {
      countryService.getCountries().then(res => {
        setCountries(res.data);
      });
    };
    countriesData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/mod/:country_id" component={CountryDetail}></Route>
        <div className="App">
          <div className="row justify-content-center" style={{ width: "100%" }}>
            <CountryList countries={countries}></CountryList>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
