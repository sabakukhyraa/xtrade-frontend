import Icons from "./Icons";

export default function Sidebar() {
  return (
    <aside className="h-[750px] top-0 left-0 flex flex-col justify-between items-center bg-back-front font-semibold">
      <div>
        <img className="md:m-8 md:my-12 logo" src="/assets/logo.png" alt="logo" />
        <ul className="text-faint flex flex-col navbar gap-y-4 text-2xl">
          <li className="active">
            <span></span>
            <div>
              <Icons iconName="Dashboard" />
              <a className="md:inline-block hidden" href="/">
                Dashboard
              </a>
            </div>
          </li>
          <li>
            <span></span>
            <div>
              <Icons iconName="Wallet" />
              <a className="md:inline-block hidden" href="/">
                Wallet
              </a>
            </div>
          </li>
          <li>
            <span></span>
            <div>
              <Icons iconName="Cards" />
              <a className="md:inline-block hidden" href="/">
                Cards
              </a>
            </div>
          </li>
          <li>
            <span></span>
            <div>
              <Icons iconName="Settings" />
              <a className="md:inline-block hidden" href="/">
                Settings
              </a>
            </div>
          </li>
          <li>
            <span></span>
            <div>
              <Icons iconName="FAQ" />
              <a className="md:inline-block hidden" href="/">
                FAQ
              </a>
            </div>
          </li>
        </ul>
      </div>
      <span className="text-extraFaint text-xl font-semibold mb-2 md:inline hidden">
        Lorem ipsum dolor
      </span>
    </aside>
  );
}
