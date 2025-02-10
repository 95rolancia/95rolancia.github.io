import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

// 네비게이션 항목 리스트
const navItems = [
  { href: "#intro", label: "세션 소개" },
  { href: "#promise", label: "지켜주세요" },
  { href: "#faq", label: "자주 하는 질문" },
  { href: "#location", label: "여기서 만나요" },
];

// 네비게이션 항목 컴포넌트
const NavItem = ({ href, children, onClick }) => (
  <li className="text-2xl mb-8 last:mb-0 font-bold hover:text-gray-400">
    <a href={href} className="block w-full" onClick={onClick}>
      {children}
    </a>
  </li>
);

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-10">
      <div className="flex justify-between items-center pl-5 pr-1 py-1">
        <a href="/" className="font-bold text-xl">
          2025 시간외
        </a>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>

      {/* 애니메이션 적용된 nav */}
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
