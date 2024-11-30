// Create a simple React application that displays a list of countries and their capitals
// The application should have the following features:

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

interface Country {
  name: {
    common: string;
  };
  capital: string;
}

export default function App() {
  return (
    <div className="App"><h1>React Interview</h1></div>
  );
}
