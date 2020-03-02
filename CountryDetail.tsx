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
    iso639_1,
    topLevelDomain,
    alpha2Code,
    alpha3Code,
    callingCodes,
    altSpellings,
    latlng,
    demonym,
    area,
    gini,
    borders,
    numericCode,
    cioc,
    languages,
    translations
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

  const timezonesFunction = () => [` ${timezones[0]}`];


  return (
    <div className="justify-content-center">
      <img src={flag} alt="" className="" height="40%" width="40%" />
      <div className="">
        <h2 className="card-title">{name}</h2>
        <h6 className="card-text">Region: {region}</h6>
        <h6 className="card-text">Capital: {capital}</h6>
        <h6>Principal Timezone(s): </h6>
        <h6 className="card-text">Population: {nf.format(population)}</h6>
        <h6 className="card-text">Native Name: {nativeName}</h6>
        <hr />
        <p className="card-text">
          <strong>Top Level Domain:</strong> {topLevelDomain}
        </p>
        <p className="card-text">
          <strong>Alpha2Code:</strong> {alpha2Code}
        </p>
        <p className="card-text">
          <strong>Alpha3Code:</strong> {alpha3Code}
        </p>
        <p className="card-text">
          <strong>Calling Codes:</strong> +{callingCodes}
        </p>
        <p className="card-text">
          <strong>Alt Spellings:</strong> {altSpellings}
        </p>
        <p className="card-text">
          <strong>Latitud Longitud:</strong> {latlng}
        </p>
        <p className="card-text">
          <strong>Demonym:</strong> {demonym}
        </p>
        <p className="card-text">
          <strong>Area:</strong> {area}
        </p>
        <p className="card-text">
          <strong>Gini:</strong> {gini}
        </p>
        <p className="card-text">
          <strong>Borders:</strong> {borders}
        </p>
        <p className="card-text">
          <strong>NumericCode:</strong> {numericCode}
        </p>
        <p className="card-text">
          <strong>Currencies:</strong>
        </p>
        <p className="card-text">
          <strong>Languages:</strong> {}
        </p>
        <p className="card-text">
          <strong>Translations:</strong> {}
        </p>
        <p className="card-text">
          <strong>Cioc:</strong> {cioc}
        </p>
      </div>
    </div>
  );
}

export default CountryDetail;
