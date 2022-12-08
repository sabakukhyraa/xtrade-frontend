export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-2/3 bg-back-front font-semibold text-faint">
      <div className="relative inline-block">
        <img src="/assets/logo.png" alt="" />
        <ul>
          <li>
            <span></span>
            Dashboard
          </li>
          <li>Wallet</li>
          <li>Cards</li>
          <li>Settings</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
}
