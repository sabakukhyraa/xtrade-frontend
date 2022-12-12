import BaseSearchBar from "./BaseSearchBar";
import Icons from "./Icons";
import { numberWithCommas } from "../services/commaOfMoney";

export default function BaseCatalog({ items, title, description }) {
  const marketPlacesRenderer = (marketPlaces) => {
    return marketPlaces.map((marketPlace, index) => (
      <a key={index} href={marketPlace.URL} >
        <img className="w-6 h-6 aspect-square object-contain" src={marketPlace.iconUrl} alt="" />
      </a>
    ));
  };
  const listItems = items.slice(0, 4).map((item, index) => (
    <li key={index} className="flex justify-between items-center w-full">
      <a href="/">
        <img className="w-12 h-12 aspect-square object-contain" src={item.iconUrl} alt="" />
      </a>
      <div className="flex flex-col items-start">
        <h1 className="text-[20px] text-darkgray font-medium">Total Quantity</h1>
        <span className="text-gray text-2xl font-semibold">{item.totalQuantity}</span>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-[20px] text-darkgray font-medium">USD Price Total</h1>
        <span className="text-gray text-2xl font-semibold">{numberWithCommas(item.USDPriceTotal)}</span>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-[20px] text-darkgray font-medium">TRY Price Total</h1>
        <span className="text-gray text-2xl font-semibold">{numberWithCommas(item.TRYPriceTotal)}</span>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-[20px] text-darkgray font-medium">Market Places</h1>
        <span className="flex pt-2 gap-x-3">{marketPlacesRenderer(item.marketPlaces)}</span>
      </div>
      <a className="text-[20] text-laci font-semibold" href="/">See Details</a>
      <button type="">
        <Icons iconName={"Dots"}/>
      </button>
    </li>
  ));

  return (
    <div className="w-full">
    <h1 className="text-gray font-bold text-[40px]">{title}</h1>
    <div className="w-full bg-back-front p-12 rounded-[20px]">
      <div className="flex justify-between w-full mb-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-gray text-2xl font-bold">Header</h1>
          <span className="text-[20px] font-semibold text-darkgray">{description}</span>
        </div>
        <BaseSearchBar haveIcon={true} placeholder="Search"/>
      </div>
      <div className="w-full">
        <ul className="w-full flex flex-col gap-12">{listItems}</ul>
      </div>
    </div>
    </div>
  );
}
