import { useState, useCallback, useRef, useEffect } from "react";
import poster from "../assets/poster.jpeg";

export default function MainSection() {
  const imgRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  const handleIntersection = useCallback(([entry]) => {
    setOpacity(entry.intersectionRatio); // 뷰포트에 보이는 비율을 opacity로 설정
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // 뷰포트 기준
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // 0.0 ~ 1.0까지 감지
    });

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <div className="flex flex-col h-screen">
      <img
        ref={imgRef}
        src={poster}
        alt="poster"
        className="w-full max-h-screen object-contain transition-opacity duration-200 ease-out"
        style={{ opacity }}
      />

      <div
        className="flex items-center justify-center absolute bottom-10 w-full flex-col text-center"
        style={{ opacity }}
      >
        <div className="font-bold text-3xl mb-1">2025. 3. 15.(토) 오후 6시</div>
        <div>컨벤트펍(프리버드 리부트)</div>
        <CaretDownIcon />
      </div>
    </div>
  );
}

// SVG 아이콘 컴포넌트 분리
const CaretDownIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>caret-down</title>
    <path
      d="M11.6428 17.0897L24.0172 29.4641L36.3916 17.0897C37.3678 16.1134 38.9508 16.1134 39.927 17.0897C40.9034 18.066 40.9034 19.6489 39.927 20.6251L25.785 34.7673C25.316 35.2361 24.6802 35.4995 24.0172 35.4995C23.3542 35.4995 22.7182 35.2361 22.2494 34.7673L8.10724 20.6251C7.9852 20.5031 7.87842 20.3717 7.78688 20.2329C7.14618 19.2626 7.25296 17.9439 8.10724 17.0897C8.22928 16.9676 8.3608 16.8608 8.49942 16.7693C9.4698 16.1286 10.7885 16.2354 11.6428 17.0897Z"
      fill="currentColor"
    ></path>
  </svg>
);
