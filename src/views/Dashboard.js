import WalletStatus from "../components/WalletStatus";
import InfoSection from "../components/InfoSection";
import BaseSlider from "../components/BaseSlider";
import BaseCatalog from "../components/BaseCatalog";
import BitcoinIcon from "../assets/icons/Bitcoin.png";
import TetherIcon from "../assets/icons/Tether.png";
import EtheriumIcon from "../assets/icons/Etherium.png";
import SolanaIcon from "../assets/icons/Solana.png";
import BinanceIcon from "../assets/icons/Binance.png"
import BitmexIcon from "../assets/icons/Bitmex.png"


export default function DashboardPage() {

  const catalogItems = [
    {
      iconUrl: BitcoinIcon,
      totalQuantity: 14123,
      USDPriceTotal: 3245,
      TRYPriceTotal: 23542,
      marketPlaces: [
        {
          iconUrl: BinanceIcon,
          URL: "https://www.binance.com"
        },
        {
          iconUrl: BitmexIcon,
          URL: "https://www.bitmex.com"
        }
      ],
    },
    {
      iconUrl: TetherIcon,
      totalQuantity: 123,
      USDPriceTotal: 141241,
      TRYPriceTotal: 71638,
      marketPlaces: [
        {
          iconUrl: BinanceIcon,
          URL: "https://www.binance.com"
        },
        {
          iconUrl: BitmexIcon,
          URL: "https://www.bitmex.com"
        }
      ],
    },
    {
      iconUrl: EtheriumIcon,
      totalQuantity: 94,
      USDPriceTotal: 293712,
      TRYPriceTotal: 2837418,
      marketPlaces: [
        {
          iconUrl: BinanceIcon,
          URL: "https://www.binance.com"
        },
        {
          iconUrl: BitmexIcon,
          URL: "https://www.bitmex.com"
        }
      ],
    },
    {
      iconUrl: SolanaIcon,
      totalQuantity: 131,
      USDPriceTotal: 3345,
      TRYPriceTotal: 346345,
      marketPlaces: [
        {
          iconUrl: BinanceIcon,
          URL: "https://www.binance.com"
        },
        {
          iconUrl: BitmexIcon,
          URL: "https://www.bitmex.com"
        }
      ],
    },
  ]
  const catalogItems2 = [
    {
      iconUrl: BitcoinIcon,
      totalQuantity: 0,
      USDPriceTotal: 0,
      TRYPriceTotal: 0,
      marketPlaces: [
        {
          iconUrl: BinanceIcon,
          URL: "https://www.binance.com"
        },
        {
          iconUrl: BitmexIcon,
          URL: "https://www.bitmex.com"
        }
      ],
    },
    {
      iconUrl: TetherIcon,
      totalQuantity: 0,
      USDPriceTotal: 0,
      TRYPriceTotal: 0,
      marketPlaces: [
        {
          iconUrl: BinanceIcon,
          URL: "https://www.binance.com"
        },
        {
          iconUrl: BitmexIcon,
          URL: "https://www.bitmex.com"
        }
      ],
    },
    {
      iconUrl: EtheriumIcon,
      totalQuantity: 0,
      USDPriceTotal: 0,
      TRYPriceTotal: 0,
      marketPlaces: [
        {
          iconUrl: BinanceIcon,
          URL: "https://www.binance.com"
        },
        {
          iconUrl: BitmexIcon,
          URL: "https://www.bitmex.com"
        }
      ],
    },
    {
      iconUrl: SolanaIcon,
      totalQuantity: 0,
      USDPriceTotal: 0,
      TRYPriceTotal: 0,
      marketPlaces: [
        {
          iconUrl: BinanceIcon,
          URL: "https://www.binance.com"
        },
        {
          iconUrl: BitmexIcon,
          URL: "https://www.bitmex.com"
        }
      ],
    },
  ]

  const catalogOfCoins = <BaseCatalog items={catalogItems} title={"Catalog of Coins"} description={"Lorem ipsum dolor"}/>
  const catalogOfCoins2 = <BaseCatalog items={catalogItems2} title={"Catalog of Coins"} description={"Lorem ipsum dolor"}/>

  return (
    <div className="flex flex-col gap-12 w-full mb-12">
      <WalletStatus />
      <InfoSection />
      <BaseSlider components={[catalogOfCoins, catalogOfCoins2]} />
    </div>
  )
}
