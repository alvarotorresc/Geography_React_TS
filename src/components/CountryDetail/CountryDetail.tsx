import React, { useState, useEffect } from "react";
import country from "../../models/country";
import countryService from "../../services/CountryService";

function CountryDetail() {
  const [country, setCountry] = useState<country>({} as country);
  const {
    flag,
    name,
    region,
    capital,
    timezones,
    population,
    nativeName,
    iso639_1
  } = country;

  const idCountry = window.location.href.split("/")[4];

  useEffect(() => {
    const countriesData = () => {
      countryService.getCountry(idCountry).then(res => {
        setCountry(res.data);
        console.log(res.data);
      });
    };
    countriesData();
  }, [idCountry]);

  const nf = new Intl.NumberFormat();

  const timezonesFunction = () => [` ${timezones[0]} ${timezones[1]}`];

  return (
    <div className="justify-content-center">
      <img src={flag} alt="" className="" height="40%" width="40%" />
      <div className="">
        <h2 className="card-title">{name}</h2>
        <h6 className="card-text">Region: {region}</h6>
        <h6 className="card-text">Capital: {capital}</h6>
        <h6>{timezones}</h6>
        <h6 className="card-text">Population: {nf.format(population)}</h6>
        <h6 className="card-text">Native Name: {nativeName}</h6>
        <hr />
        <p className="card-text">
          <strong>Top Level Domain:</strong> {country.topLevelDomain}
        </p>
        <p className="card-text">
          <strong>Alpha2Code:</strong> {country.alpha2Code}
        </p>
        <p className="card-text">
          <strong>Alpha3Code:</strong> {country.alpha3Code}
        </p>
        <p className="card-text">
          <strong>Calling Codes:</strong> +{country.callingCodes}
        </p>
        <p className="card-text">
          <strong>Alt Spellings:</strong> {country.altSpellings}
        </p>
        <p className="card-text">
          <strong>Latitud Longitud:</strong> {country.latlng}
        </p>
        <p className="card-text">
          <strong>Demonym:</strong> {country.demonym}
        </p>
        <p className="card-text">
          <strong>Area:</strong> {country.area}
        </p>
        <p className="card-text">
          <strong>Gini:</strong> {country.gini}
        </p>
        <p className="card-text">
          <strong>Borders:</strong> {country.borders}
        </p>
        <p className="card-text">
          <strong>NumericCode:</strong> {country.numericCode}
        </p>
        <p className="card-text">
          <strong>Currencies:</strong> {  }
        </p>
        <p className="card-text">
          <strong>Languages:</strong> {}
        </p>
        <p className="card-text">
          <strong>Translations:</strong> {}
        </p>
        <p className="card-text">
          <strong>Cioc:</strong> {country.cioc}
        </p>
      </div>
    </div>
  );
}

export default CountryDetail;
