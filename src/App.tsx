// Create a simple React application that displays a list of countries and their capitals
// The application should have the following features:

import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import CountryData from "./components/Country";

// The list of countries and capitals should be fetched from an API
// Each country should be displayed in a separate component
// The user should be able to filter the list by capital

/**
  To fetch all countries use the '/all' endpoint
 */

const BASE_URL = "https://restcountries.com/v3.1";
/**
  To filter by capital city, use the '/capital/{capital}' endpoint
 */

const FILTERABLE_CAPITALS = [
  "Tallinn",
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Reykjavik",
] as const;
type Capital = (typeof FILTERABLE_CAPITALS)[number];

export interface Country {
  name: {
    common: string;
  };
  capital: string;
}

export default function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountries = async () => {
    const res = await axios(BASE_URL + "/all");
    setCountries(res.data);
  };
  useEffect(() => {
    getCountries();
  }, []);

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value !== "--select--") {
      const res = await axios(BASE_URL + `/capital/${value}`);
      setCountries(res.data);
    } else {
      const res = await axios(BASE_URL + "/all");
      setCountries(res.data);
    }
  };

  return (
    <div className="App">
      <h1>React Interview</h1>
      <select onChange={handleChange}>
        <option>--select--</option>
        {FILTERABLE_CAPITALS.map((capital, index) => (
          <option key={index} value={capital}>
            {capital}
          </option>
        ))}
      </select>
      {countries.map((country, index) => (
        <CountryData key={index} {...country} />
      ))}
    </div>
  );
}
