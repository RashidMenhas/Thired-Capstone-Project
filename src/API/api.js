const baseURL = 'https://restcountries.com/v3.1/region/europe';
const SEARCHCOUNTRYURL = 'https://restcountries.com/v3.1/name';

export const fetchURLData = async () => {
  const response = await fetch(baseURL);
  const data = await response.json();
  return {
    country: data.map((value) => ({
      id: value.area,
      population: value.population,
      name: value.name.official,
      capital: value.capital[0],
      image: value.flags.png,
      timezone: value.timezones[0],
      subregion: value.subregion,
    })),
  };
};

export const searchByName = async (name) => {
  const response = await fetch(`${SEARCHCOUNTRYURL}/${name}`);
  const searchData = await response.json();
  return {
    countrydetail: searchData.map((value) => ({
      id: value.area,
      area: value.area,
      population: value.population,
      name: value.name.official,
      capital: value.capital,
      image: value.flags.png,
      region: value.region,
      currencies: value.currencies,
      subregion: value.subregion,
    })),
  };
};
