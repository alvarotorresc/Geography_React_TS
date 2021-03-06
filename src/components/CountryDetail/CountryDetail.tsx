import React, { useState, useEffect } from "react";
import country from "../../models/country";
import countryService from "../../services/CountryService";
import { useParams } from "react-router";
import { useLocation, useHistory } from "react-router-dom";

function CountryDetail() {
  const [country, setCountry] = useState<country | null>(null);

  let { country_id } = useParams();

  useEffect(() => {
    const countriesData = () => {
      countryService.getCountry(country_id).then(res => {
        setCountry(res.data);
        console.log(res.data);
      });
    };
    countriesData();
  }, [country_id]);

  const nf = new Intl.NumberFormat();
  let history = useHistory();

  if (!country) {
    return <>Loading</>;
  }

  return (
    <div className="justify-content-center" style={{ color: "white" }}>
      
      <img src={country.flag} alt="" className="" height="40%" width="40%" />
      <br/>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => history.goBack()}
      >
        Go back
      </button>
      <div className="">
        <h2 className="card-title">{country.name}</h2>
        <h6 className="card-text">Region: {country.region}</h6>
        <h6 className="card-text">Capital: {country.capital}</h6>
        <h6>Principal Timezone(s): </h6>
        <h6 className="card-text">
          Population: {nf.format(country.population)}
        </h6>
        <h6 className="card-text">Native Name: {country.nativeName}</h6>
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
          <strong>Currency:</strong>{" "}
          {country.currencies.map(currency => {
            return `${currency["name"]} ${currency["symbol"]} `;
          })}
        </p>
        <p className="card-text">
          <strong>Languages:</strong>{" "}
          {country.languages.map(language => {
            return `${language["name"]} `;
          })}
        </p>
        <p className="card-text">
          <strong>Translations:</strong>{" "}
          {`${Object.values(country.translations)} `}
        </p>
        <p className="card-text">
          <strong>Cioc:</strong> {country.cioc}
        </p>
      </div>
    </div>
  );
}

export default CountryDetail;
