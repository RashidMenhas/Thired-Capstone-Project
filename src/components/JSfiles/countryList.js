/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSSfiles/countryList.css';

const CountryList = ({ data }) => (
  <div className="container">
    {data.map((countries) => (
      <Link
        to="/detail"
        state={{ name: countries.name }}
        key={countries.name}
        className="sub-container"
      >
        <div className="cards">
          <div className="images">
            <img src={countries.image} alt="europe map" className="map" />
            <p className="country-name">{countries.name}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default CountryList;
