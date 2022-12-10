import { PieChart } from "react-minimal-pie-chart";
import { numberWithCommas } from "../services/commaOfMoney";

export default function WalletGraphic({ statisticArray }) {
  const coins = statisticArray.map((coin, index) => (
    <li className="flex 3xl:gap-x-0 gap-x-12 sm:gap-x-24 justify-between items-center" key={index}>
      <div className="flex items-center gap-x-4">
        <img className="!w-7 !h-7 sm:!w-10 sm:!h-10 object-contain" src={coin.iconUrl} alt={coin.title} />
        <span className="text-md sm:text-xl font-semibold text-white">{coin.title}</span>
        <span className="font-inter px-[2px] text-[10px] font-semibold text-notr border-[1px] border-notr rounded-[3px]">9.9%</span>
      </div>
      <span className="text-md sm:text-xl font-semibold text-white">{numberWithCommas(coin.value)}</span>
    </li>
  ));

  return (
    <div className="w-full flex 3xl:flex-row 3xl:justify-between items-center flex-col gap-y-12">
      <div className="relative w-60 h-60 flex self-center justify-center items-center wallet-graphic">
        <PieChart className="!w-[84%] !h-[84%] z-30" data={statisticArray} />
        <PieChart className="z-0 absolute opacity-50" data={statisticArray} />
        <div className="bg-back-front absolute w-3/5 h-3/5 rounded-full z-50"></div>
        <div className="bg-back-front absolute w-[92%] h-[92%] rounded-full z-10"></div>
      </div>
      <div className="w-full 3xl:w-1/2 px-4 sm:px-16 lg:px-4">
        <ul className="flex flex-col gap-6 2xl:gap-8">{coins}</ul>
      </div>
    </div>
  );
}
