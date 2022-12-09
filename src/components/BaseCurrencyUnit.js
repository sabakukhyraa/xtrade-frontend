import Icons from "./Icons";
export default function BaseCurrencyUnit({ currency }) {
  return (
    <div className="flex items-center gap-x-4">
      <span className={`w-11 h-11 flex items-center justify-center rounded-lg bg-units-${currency.unit}`}>
        <Icons iconName={currency.unit} />
      </span>
      <div>
        <h5 className="font-semibold text-xs text-gray">{currency.unit}</h5>
        <span className="font-semibold text-2xl text-gray">{currency.value}</span>
      </div>
    </div>
  );
}
