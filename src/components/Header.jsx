import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

// 네비게이션 항목 컴포넌트
const NavItem = ({ href, children, onClick, isLast }) => (
  <li className={`text-2xl ${isLast ? "" : "mb-8"} font-bold hover:text-gray-400`} onClick={onClick}>
    <a href={href}>{children}</a>
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

      {/* 애니메이션 적용된 nav (헤더 높이에 영향 안 주도록 absolute 적용) */}
      <nav
        className={`absolute top-full left-0 w-full bg-black text-center transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="py-4">
          <NavItem href="#intro" onClick={() => setOpen(false)}>
            세션 소개
          </NavItem>
          <NavItem href="#promise" onClick={() => setOpen(false)}>
            지켜주세요
          </NavItem>
          <NavItem href="#faq" onClick={() => setOpen(false)}>
            자주 하는 질문
          </NavItem>
          <NavItem href="#location" onClick={() => setOpen(false)} isLast>
            여기서 만나요
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}