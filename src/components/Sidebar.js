import Icons from "./Icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="fixed h-[1000px] top-0 left-0 flex flex-col justify-between items-center bg-back-front font-semibold">
      <div>
        <img
          className="p-2 !mx-0 lg:!m-8 lg:!my-12 logo"
          src="/assets/logo.png"
          alt="logo"
        />
        <ul className="text-faint flex flex-col navbar gap-y-4 text-2xl">
          <li>
            <NavLink to="/dashboard">
              <span></span>
              <div>
                <Icons iconName="Dashboard" />
                <p className="lg:inline-block hidden">Dashboard</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet">
              <span></span>
              <div>
                <Icons iconName="Wallet" />
                <p className="lg:inline-block hidden">Wallet</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cards">
              <span></span>
              <div>
                <Icons iconName="Cards" />
                <p className="lg:inline-block hidden">Cards</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <span></span>
              <div>
                <Icons iconName="Settings" />
                <p className="lg:inline-block hidden">Settings</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq">
              <span></span>
              <div>
                <Icons iconName="FAQ" />
                <p className="lg:inline-block hidden">FAQ</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <span className="text-extraFaint text-xl font-semibold mb-2 lg:inline hidden">
        Lorem ipsum dolor
      </span>
    </aside>
  );
}
