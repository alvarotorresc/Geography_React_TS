import React from 'react'

function Country ({country}: CountryListProps) {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card"></div>
        </div>
    )
}

type CountryListProps = {
    country: any;
  };

export default Country;

