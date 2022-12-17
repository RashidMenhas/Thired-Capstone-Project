import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import europe from '../../images/europe.png';
import CountryList from './countryList';
import {
  getCountries,
  countryDetail,
} from '../../redux/countries/countrystate';
import '../CSSfiles/homepage.css';

const HomePage = () => {
  const selector = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();

  const [getValue, setValue] = useState('');

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (getValue !== '') {
      setTimeout(() => {
        dispatch(countryDetail(getValue));
      }, 1000);
    } else {
      dispatch(getCountries());
    }
  }, [getValue]);

  return (
    <div className="home">
      <div className="map1">
        <img src={europe} alt="europe map" className="map-photo" />
        <div>
          <h3 className="europe-title">europe</h3>
          <p className="europe-title">746.4 Million</p>
        </div>
        <input
          value={getValue}
          onChange={(e) => setValue(e.target.value)}
          type="search"
          placeholder="Search"
          className="search"
        />
      </div>
      <div className="title-div">
        <h3 className="title">See All Countries</h3>
      </div>
      <div>
        <CountryList data={selector} />
      </div>
    </div>
  );
};
export default HomePage;
