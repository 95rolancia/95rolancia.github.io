import { useState, useRef, useEffect } from "react";
import poster from "../assets/poster.jpeg";

export default function MainSection({imgUrl}) {
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
      <div className="flex h-screen justify-center items-center">
        <img
          ref={imgRef}
          src={imgUrl}
          alt="overtime poster"
          style={{ opacity }}
        />
      </div>
  );
}
