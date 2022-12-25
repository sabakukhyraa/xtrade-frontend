import { useState, useEffect } from "react";
import WalletCurrencyUnits from "./WalletCurrencyUnits";
import { numberWithCommas } from "../services/commaOfMoney";
import WalletGraphic from "./WalletGraphic";
import BitcoinIcon from "../assets/icons/Bitcoin.png";
import TetherIcon from "../assets/icons/Tether.png";
import EtheriumIcon from "../assets/icons/Etherium.png";

export default function WalletStatus() {
  const [coinStatistics, setCoinStatistics] = useState([]);
  const [amountOfBtc, setBtc] = useState(10);
  const [amountOfUsdt, setUsdt] = useState(10);
  const [amountOfEth, setEth] = useState(10);

  useEffect(() => {
    setCoinStatistics([
      {
        title: "BTC",
        value: amountOfBtc,
        color: "#F7931A",
        iconUrl: BitcoinIcon,
      },
      {
        title: "USDT",
        value: amountOfUsdt,
        color: "#50AF95",
        iconUrl: TetherIcon,
      },
      {
        title: "ETH",
        value: amountOfEth,
        color: "#627EEA",
        iconUrl: EtheriumIcon,
      },
    ]);
  }, [amountOfBtc, amountOfUsdt, amountOfEth]);

  const fromCurrency = "EUR";
  const toCurrencies = ["USD", "TRY"];
  const [fromValue, setFromValue] = useState(1);

  const reactiveInput = (event, method) => {
    if (event.target.value === "") {
      method(0);
    } else {
      method(parseFloat(event.target.value));
    }
  };

  return (
    <div className="flex flex-col items-start w-full gap-y-8">
      <h1 className="text-white text-[24px] lg:text-[40px] font-bold">
        Z - Wallet
      </h1>
      <div className="flex flex-col lg:flex-row w-full bg-back-front rounded-[20px] 2xl:p-10 p-6 gap-8">
        <div className="w-full lg:w-[44.9%] space-y-8">
          <div className="flex flex-col items-center lg:items-start gap-y-3">
            <h3 className="text-2xl font-semibold text-darkgray">
              Total Balance
            </h3>
            <span className="text-4xl font-bold text-gray">
              {fromValue > 0
                ? `+${numberWithCommas(fromValue.toFixed(2))}`
                : `${numberWithCommas(fromValue.toFixed(2))}`}
            </span>
            <span className="font-inter font-semibold my-2 px-1 pt-px lg:self-start text-gain bg-gain-dark rounded-[3px] neon">
              9.9%
            </span>
            <input
              className="w-40 px-4 text-5xl font-bold rounded-lg outline-none text-gray bg-back"
              onChange={(e) => reactiveInput(e, setFromValue)}
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-y-3">
            <h3 className="text-2xl font-semibold text-darkgray">Total</h3>
            <WalletCurrencyUnits
              fromCurrency={fromCurrency}
              toCurrencies={toCurrencies}
              fromValue={fromValue}
            />
          </div>
        </div>
        <div className="flex flex-col lg:items-start items-center w-full lg:w-[55%]">
          <h3 className="self-center mb-6 text-2xl font-semibold 3xl:self-start text-darkgray">
            Genel Cüzdan Grafiği
          </h3>
          <WalletGraphic statisticArray={coinStatistics} />
          <div className="flex gap-12 my-16">
            <div className="flex flex-col justify-center gap-2">
              <label className="text-2xl font-bold text-gray" for="btc">BTC</label>
              <input
                id="btc"
                className="w-40 px-4 text-5xl font-bold text-white rounded-lg outline-none bg-back"
                onChange={(e) => reactiveInput(e, setBtc)}
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label className="text-2xl font-bold text-gray" for="Usdt">USDT</label>
              <input
                id="Usdt"
                className="w-40 px-4 text-5xl font-bold text-white rounded-lg outline-none bg-back"
                onChange={(e) => reactiveInput(e, setUsdt)}
              />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <label className="text-2xl font-bold text-gray" for="Eth">ETH</label>
              <input
                id="Eth"
                className="w-40 px-4 text-5xl font-bold text-white rounded-lg outline-none bg-back"
                onChange={(e) => reactiveInput(e, setEth)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
