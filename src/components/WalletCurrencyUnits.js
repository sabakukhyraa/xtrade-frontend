import { useEffect, useState } from "react";
import BaseCurrencyUnit from "./BaseCurrencyUnit";
import { get } from "../services/request";

export default function WalletCurrencyUnits({
  fromCurrency,
  toCurrencies,
  fromValue,
}) {
  const BASE_URL =
    "https://api.freecurrencyapi.com/v1/latest?apikey=baELxjtiYZ5BkEYodjtfKDp4Xhzhy0BkBPbUAY7U";

  const [toValues, setToValues] = useState([]);
  const [currencyHtml, setCurrencyHtml] = useState([]);
  const [API_DATA, setAPI_DATA] = useState()

  useEffect(() => {
    get(BASE_URL)
      .then((res) => { setAPI_DATA(res.data)
        // toCurrencies.map((currencyUnit) =>
        //   setToValues(
        //     {
        //       unit: currencyUnit,
        //       value:
        //         fromValue * (res.data[currencyUnit] / res.data[fromCurrency]),
        //     }
        //   )
        // );
      })
  }, []);

  function DataPrinter(data) {
    return (
      <div className="flex gap-x-8">
        {
          toCurrencies.map((currencyUnit, index) =>
            <BaseCurrencyUnit currency={{unit: currencyUnit, value: (fromValue * (data[currencyUnit] / data[fromCurrency])).toFixed(2)}} key={index}/>
          )
        }
      </div>
    )
  }

  return <div>{API_DATA && DataPrinter(API_DATA)}</div>;
}
