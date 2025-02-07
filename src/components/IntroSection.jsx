import { useState, useCallback, useRef, useEffect } from "react";
import arrow from "../assets/arrow.svg";

export default function IntroSection({ infos, openLyricsPopup }) {
  const [isSessionFilterOpen, setIsSessionFilterOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");

  const toggleSessionFilter = useCallback(() => {
    setIsSessionFilterOpen((prev) => !prev);
  }, []);

  const sectionsRef = useRef([]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const currentScrollY = window.scrollY;
        const scrollDown = currentScrollY > lastScrollY.current;
        lastScrollY.current = currentScrollY;

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target);

        if (visibleSections.length > 0) {
          setActiveTitle(
            scrollDown
              ? visibleSections[0].dataset.title
              : visibleSections[visibleSections.length - 1].dataset.title
          );
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px -88% 0px",
        threshold: 0,
      }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClickSessionFilter = useCallback((id) => {
    setIsSessionFilterOpen(false);
    const targetRef = sectionsRef.current.find((el) => el.id === id);

    if (targetRef) {
      const yOffset = -100;
      const y =
        targetRef.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <section id="intro" className="text-center w-full mt-10 pt-20">
      <h2 className="font-bold text-4xl mb-10">세션 소개</h2>

      <div className="border-t-gray-700 border-t-2 bg-black sticky top-[55px]">
        <div
          className="flex justify-between p-4 pl-5 border-b-gray-500 border-b-1 cursor-pointer"
          onClick={toggleSessionFilter}
        >
          <div className="font-bold text-xl">{activeTitle || "비상장밴드"}</div>
          <img
            src={arrow}
            className={`mr-[2px] transition-transform ${
              isSessionFilterOpen ? "rotate-270" : "rotate-90"
            }`}
            width={20}
            height={10}
            alt="arrow"
          />
        </div>

        {isSessionFilterOpen && (
          <ul className="absolute p-4 bg-black w-full">
            {Object.keys(infos).map((item, index) => (
              <li
                key={index}
                className="font-bold text-xl mb-3 text-left cursor-pointer"
                onClick={() => handleClickSessionFilter(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {Object.values(infos).map((info, idx) => (
        <div
          id={info[0].teamname}
          ref={(el) => (sectionsRef.current[idx] = el)}
          key={info[0].teamname}
          data-title={info[0].teamname}
        >
          <div className="bg-amber-600 flex justify-center items-center">
            <div className="m-10 rounded-xl bg-gray-300 w-[200px] h-[200px] flex items-center justify-center text-gray-700 font-bold text-3xl">
              {info[0].teamname}
              <br /> 썸네일
            </div>
          </div>
          <ul className="bg-white text-black">
            {info.map((song, index) => (
              <li
                key={index}
                className="p-4 border-b-gray-200 border-b-1 mx-4 text-left cursor-pointer"
                onClick={() => openLyricsPopup(song.lyrics)}
              >
                <div className="font-bold">
                  {song.title} - {song.artist}
                </div>
                <div className="text-[0.8rem] text-gray-700">
                  {song.participants.join(", ")}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
