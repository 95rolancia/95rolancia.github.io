import { useState, useRef, useEffect } from "react";
import CountDown from "./CountDown";

export default function MainSection({ imgUrl, withCountdown }) {
  const imgRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setOpacity(entry.intersectionRatio),
      {
        root: null, // 뷰포트 기준
        threshold: Array.from({ length: 101 }, (_, i) => i * 0.01), // 0.01 ~ 1.00까지 감지
      }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex h-screen justify-center items-center relative">
      <img
        ref={imgRef}
        src={imgUrl}
        alt="overtime poster"
        style={{ opacity }}
      />
      {withCountdown && (
        <div className="w-full absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-lg font-bold">
          <CountDown />
        </div>
      )}
    </div>
  );
}
