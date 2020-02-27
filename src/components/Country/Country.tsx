import React from "react";
import country from "../../models/country";
import { useHistory } from "react-router-dom";

function Country({ country }: CountryListProps) {
  const history = useHistory();
  const { flag, name, region, capital, timezones, population, nativeName } = country;
  const nf = new Intl.NumberFormat();

  const timezonesFunction = () => [
    ` ${timezones[0]} ${timezones[1]}`
  ];

  const redirect = () => {
    history.push('/');
  }

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img
          src={flag}
          alt=""
          className="card-img-top"
          height="250"
          width="200"
        />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h6 className="card-text">Region: {region}</h6>
          <h6 className="card-text">Capital: {capital}</h6>
          <h6 className="card-text">
            Principal Timezone(s):{" "}
            {timezones.length >= 2 ? timezonesFunction() : timezones[0]}
          </h6>
          <h6 className="card-text">Population: {nf.format(population)}</h6>
          <h6 className="card-text">Native Name: {nativeName}</h6>
          <button type="button" className="btn btn-outline-primary" onClick={redirect}></button>
          
        </div>
      </div>
    </div>
  );
}

type CountryListProps = {
  country: country;
};

export default Country;
