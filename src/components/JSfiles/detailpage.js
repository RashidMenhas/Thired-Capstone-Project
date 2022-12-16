import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SingleCountryDetail from './singleCountryDetail';
import { countryDetail } from '../../redux/countries/showdetail';

const DetailPage = () => {
  const location = useLocation();
  const { name } = location.state;
  const countriesDetail = useSelector((state) => state.showReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countryDetail(name));
  }, [dispatch]);
  return (
    <div>
      <SingleCountryDetail data={countriesDetail} />
    </div>
  );
};
export default DetailPage;
