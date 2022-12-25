import { useEffect, useState } from "react";
import BaseCurrencyUnit from "./BaseCurrencyUnit";
import { get } from "../services/request";

export default function WalletCurrencyUnits({
  fromCurrency,
  toCurrencies,
  fromValue,
}) {
  const BASE_URL =
    "https://api.freecurrencyapi.com/v1/latest?apikey=1ns771E6ppySmcpwHyv32ODlvdBs9Ww0TKqj0Wjm";

  const [API_DATA, setAPI_DATA] = useState();

  useEffect(() => {
    get(BASE_URL).then((res) => {
      setAPI_DATA(res.data);
    });
  }, []);

  function DataPrinter(data) {
    return (
      <div className="flex flex-wrap gap-8">
        {toCurrencies.map((currencyUnit, index) => (
          <BaseCurrencyUnit
            currency={{
              unit: currencyUnit,
              value: (
                fromValue *
                (data[currencyUnit] / data[fromCurrency])
              ).toFixed(2),
            }}
            key={index}
          />
        ))}
      </div>
    );
  }

  return <div>{API_DATA && DataPrinter(API_DATA)}</div>;
}
