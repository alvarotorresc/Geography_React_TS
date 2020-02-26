import React from "react";
import country from "../../models/country";

function Country({ country }: CountryListProps) {
  const { flag, name, region } = country;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={flag} alt="" className="card-img-top" height="250" width="200" />
        <div className="card-body">
          <p className="card-text">Name: {name}</p>
          <p className="card-text">Region: {region}</p>
        </div>
      </div>
    </div>
  );
}

type CountryListProps = {
  country: country;
};

export default Country;
