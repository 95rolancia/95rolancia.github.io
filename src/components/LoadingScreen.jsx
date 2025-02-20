import React from "react";
import "./LoadingScreen.css"; // CSS 파일 import (글로잉 효과)

export default function LoadingScreen() {
  return (
    <div className="absolute bg-black z-50 top-0 left-0 w-screen h-screen flex justify-center items-center">
      {/* 반짝이는 테두리 */}
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 rounded-full border-transparent glowing-border"></div>
        {/* 로고 이미지 */}
        <img
          src="https://images.95jjangjun.workers.dev/Logo.webp"
          alt="Logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </div>
  );
}
