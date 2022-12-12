import Icons from "./Icons";

export default function BaseSearchBar({haveIcon, placeholder}) {
  return (
    <div className="self-start relative flex items-center justify-between bg-back-extra-front pl-20 pr-8 py-4 rounded-2xl">
      {haveIcon && <Icons iconName={"Search"} className={"absolute left-4"}/>}
      <input className="outline-none bg-transparent text-semigray text-[20px] font-medium search-bar" type="" name="" placeholder={placeholder} />
      {/* <span className="absolute placeholder left-12 text-semigray text-[20px] font-medium">{placeholder}</span> */}
    </div>
  )
}
