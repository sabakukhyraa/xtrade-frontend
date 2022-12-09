import Icons from "./Icons"
export default function BaseCurrencyUnit({currency}) {
  return (
    <div>
      <span className={`p-6 bg-units-${currency.unit.toLowerCase()}`}>
        <Icons iconName={currency.unit}/>
      </span>
      <div>
        <h5>{currency.unit}</h5>
        <span>{currency.value}</span>
      </div>
    </div>
  )
}
