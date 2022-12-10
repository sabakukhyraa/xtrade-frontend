import infoIcon from "../assets/icons/Info.png";

export default function InfoSection() {
  return (
    <div className="flex items-center w-full bg-[#1d1f25] rounded-[14px] py-6 px-8 border-[1px] border-[#46484d] max-w-[950px] gap-x-4">
      <img src={infoIcon} alt="" />
      <p className="text-laci font-inter">
        Here, if the API integration is completed correctly, the coins, NFTs and
        summary information in the market wallets are displayed.
      </p>
    </div>
  );
}
