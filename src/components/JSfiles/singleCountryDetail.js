/* eslint-disable react/prop-types */
import React from 'react';
import '../CSSfiles/singleCountryDetail.css';

const SingleCountryDetail = ({ data }) => (

  <div className="container2">
    {data.map((value) => (
      <div className="card2" key={value.id}>
        <h2 className="show-country-detail">SHOW COUNTRY DETAIL</h2>
        <img src={value.image} alt="singlemap" className="single-map-image" />
        <div className="detail2">
          <div className="row">
            <span>Name:</span>
            <span>{value.name}</span>
          </div>
          <div className="row">
            <span>Capital:</span>
            <span>{value.capital}</span>
          </div>
          <div className="row">
            <span>Area:</span>
            <span>{value.area}</span>
          </div>
          <div className="row">
            <span>Population:</span>
            <span>{value.population}</span>
          </div>
          <div className="row">
            <span>Region:</span>
            <span>{value.region}</span>
          </div>
          <div className="row">
            <span>Subregion:</span>
            <span>{value.subregion}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default SingleCountryDetail;
