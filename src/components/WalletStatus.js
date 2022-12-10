import { useState, useEffect } from "react";
import WalletCurrencyUnits from "./WalletCurrencyUnits";
import { numberWithCommas } from "../services/commaOfMoney";
import WalletGraphic from "./WalletGraphic";
import BitcoinIcon from "../assets/icons/Bitcoin.png"
import TetherIcon from "../assets/icons/Tether.png"
import EtheriumIcon from "../assets/icons/Etherium.png"

export default function WalletStatus() {
  const [coinStatistics, setCoinStatistics] = useState([]);
  
  useEffect(() => {
    setCoinStatistics(
      [
        {
          title: "BTC",
          value: 20000,
          color: "#F7931A",
          iconUrl: BitcoinIcon,
        },
        {
          title: "USDT",
          value: 30000,
          color: "#50AF95",
          iconUrl: TetherIcon,
        },
        {
          title: "ETH",
          value: 40000,
          color: "#627EEA",
          iconUrl: EtheriumIcon,
        },
      ]
    )
  }, []);


  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrencies, setToCurrencies] = useState(["USD", "TRY"]);
  const [fromValue, setFromValue] = useState(19924);


  return (
    <div className="flex flex-col items-start w-full gap-y-8">
      <h1 className="text-white text-[24px] lg:text-[40px] font-bold">
        Z - Wallet
      </h1>
      <div className="flex flex-col lg:flex-row w-full bg-back-front rounded-[20px] 2xl:p-10 p-6 gap-8">
        <div className="w-full lg:w-[44.9%] space-y-8">
          <div className="flex flex-col items-center lg:items-start gap-y-3">
            <h3 className="font-semibold text-2xl text-darkgray">Total Balance</h3>
            <span className="text-gray font-bold text-4xl">{fromValue > 0 ? `+${numberWithCommas(fromValue.toFixed(2))}` : `${numberWithCommas(fromValue.toFixed(2))}`}</span>
            <span className="font-inter font-semibold my-2 px-1 pt-px lg:self-start text-gain bg-gain-dark rounded-[3px] neon">9.9%</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-y-3">
            <h3 className="font-semibold text-2xl text-darkgray">Total</h3>
            <WalletCurrencyUnits fromCurrency={fromCurrency} toCurrencies={toCurrencies} fromValue={fromValue}/>
          </div>
        </div>
        <div className="flex flex-col lg:items-start items-center w-full lg:w-[55%]">
          <h3 className="font-semibold self-center 3xl:self-start text-2xl mb-6 text-darkgray">Genel Cüzdan Grafiği</h3>
          <WalletGraphic statisticArray={coinStatistics}/>
        </div>
      </div>
    </div>
  );
}
