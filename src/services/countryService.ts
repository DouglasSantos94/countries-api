import axios from "axios";

const getCountryBorders = (borders: string[]) =>
  Promise.all(
    borders.map((b) =>
      axios
        .get(`https://restcountries.eu/rest/v2/alpha/${b}`)
        .then(({ data: { name } }) => name)
        .catch((e) => console.log(e))
    )
  );

// eslint-disable-next-line import/prefer-default-export
export { getCountryBorders };
