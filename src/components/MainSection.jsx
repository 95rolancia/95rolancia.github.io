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
    <div className="flex flex-col h-screen justify-center items-center">
      <img
        ref={imgRef}
        src={poster}
        alt="poster"
        className="h-[30rem] object-contain transition-opacity duration-200 ease-out"
        style={{ opacity }}
      />
    </div>
  );
}
