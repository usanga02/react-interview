type Props = {
  name: { common: string };
  capital: string;
};

const CountryData = (data: Props) => {
  return (
    <div className="card">
      <h3>{data.name.common}</h3>
      <p>{data.capital}</p>
    </div>
  );
};

export default CountryData;
