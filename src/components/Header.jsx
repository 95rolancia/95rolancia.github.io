import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

// 네비게이션 항목 컴포넌트
const NavItem = ({ href, children, onClick }) => (
  <li className="text-2xl mb-8 last:mb-0 font-bold hover:text-gray-400">
    <a href={href} className="block w-full" onClick={onClick}>
      {children}
    </a>
  </li>
);

export default function Header({ infos }) {
  const [isOpen, setOpen] = useState(false);

  const navItems = infos
    .sort((a, b) => a.order - b.order)
    .map((info) => ({
      href: "#" + info.id,
      label: info.title,
    }));

  return (
    <header className="fixed top-0 w-screen max-w-[465px] bg-black text-white z-10">
      <div className="flex justify-between items-center pl-5 py-1">
        <a href="/" className="font-bold text-xl">
          시간외:시작
        </a>

        <div className="flex items-center">
          <button
            className="border-1 p-1 text-sm font-bold"
            onClick={() => window.open("https://forms.gle/oVAfeywjkw2cKWWp9")}
          >
            티켓 예매
          </button>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
        </div>
      </div>

      <nav
        className={`absolute top-full left-0 w-full bg-black text-center transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="py-4">
          {navItems.map(({ href, label }) => (
            <NavItem key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </NavItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}
