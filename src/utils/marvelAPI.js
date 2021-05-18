const md5 = require("md5");
const fetch = require("node-fetch");
const timestamp = Math.floor(Date.now() / 1000);
const publicKey = "27e31479f5d88e0538d72a4dbb03300b";
const privateKey = "9a8b93a6feb42c60f88f3f4e82408e9642e7bfce";
const hash = md5(timestamp + privateKey + publicKey);
const baseURL = "https://gateway.marvel.com:443/v1/public/comics?ts=";

const getComics = () => {
  const result = fetch(
    `${baseURL + timestamp}&apikey=${publicKey}&hash=${hash}`,
  )
    .then((response) => response.json())
    .then((result) => result.data.results);
  return result;
};

export default getComics;
