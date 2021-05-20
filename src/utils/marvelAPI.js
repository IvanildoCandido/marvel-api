const md5 = require("md5");
const fetch = require("node-fetch");
const timestamp = Math.floor(Date.now() / 1000);
const publicKey = "27e31479f5d88e0538d72a4dbb03300b";
const hash = md5(timestamp + process.env.REACT_APP_MARVEL_KEY + publicKey);
const baseURL = "https://gateway.marvel.com:443/v1/public/comics?ts=";
const geoLocation = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

export const getComics = () => {
  const result = fetch(
    `${baseURL + timestamp}&apikey=${publicKey}&hash=${hash}`,
  )
    .then((response) => response.json())
    .then((result) => result.data.results);
  return result;
};

export const getCharacters = (URL) => {
  const result = fetch(
    `${URL + "?ts=" + timestamp}&apikey=${publicKey}&hash=${hash}`,
  )
    .then((response) => response.json())
    .then((result) => result.data.results);
  return result;
};

export const getAddress = (lat, lng) => {
  const result = fetch(
    `${geoLocation}${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
  )
    .then((response) => response.json())
    .then((result) => result.results[0].formatted_address);
  return result;
};
