import { useState } from "react";
import WalletCurrencyUnits from "./WalletCurrencyUnits";

export default function WalletStatus() {

  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrencies, setToCurrencies] = useState(["USD", "TRY"]);
  const [fromValue, setFromValue] = useState(12);
  

  return (
    <div className="flex flex-col items-start w-full gap-y-8">
      <h1 className="text-white text-[24px] lg:text-[40px] font-bold">
        Z - Wallet
      </h1>
      <div className="flex flex-col lg:flex-row w-full bg-back-front rounded-[20px] p-6 lg:p-10 gap-6">
        <div className="w-full lg:w-2/5 space-y-8">
          <div className="flex flex-col items-center lg:items-start gap-y-3">
            <h3 className="font-semibold text-2xl text-darkgray">Total Balance</h3>
            <span className="text-gray font-bold text-4xl">+12,366.0</span>
            <span className="font-inter font-semibold my-2 px-1 pt-px lg:self-start text-gain bg-gain-dark rounded-[3px] neon">9.9%</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-y-3">
            <h3 className="font-semibold text-2xl text-darkgray">Total</h3>
            <WalletCurrencyUnits fromCurrency={fromCurrency} toCurrencies={toCurrencies} fromValue={fromValue}/>
          </div>
        </div>
        <div className="w-full lg:w-3/5 bg-blue-500">
          <p className="text-white text-2xl font-bold">ajknsxjkasnxkjlasmxklsal alksdnasdk adkl naslkd nklasnkl asndkj as</p>
        </div>
      </div>
    </div>
  );
}
