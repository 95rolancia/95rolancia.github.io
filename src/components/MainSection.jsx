import { useState, useRef, useEffect } from "react";
import CountDown from "./CountDown";

export default function MainSection({ imgUrl, withCountdown, setIsLoaded }) {
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
    <div className="h-screen w-full flex justify-center items-center">
      <div class="relative">
        <img
          ref={imgRef}
          src={imgUrl}
          alt="overtime poster"
          style={{ opacity }}
          className="w-full h-auto"
          onLoad={() => {
            setIsLoaded && setIsLoaded(true);
          }}
        />
        {withCountdown && (
          <div className="w-full absolute -top-16 left-1/2 transform -translate-x-1/2 text-white">
            <CountDown />
          </div>
        )}
      </div>
    </div>
  );
}
