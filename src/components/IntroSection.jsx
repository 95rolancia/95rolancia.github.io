import { useState, useRef, useEffect } from "react";
import arrow from "../assets/arrow.svg";

const thumbnails = {
  운영본부: "https://images.95jjangjun.workers.dev/IMG_9581.webp",
  비상장밴드: "https://images.95jjangjun.workers.dev/IMG_9593.webp",
  "은록도 록이다": "https://images.95jjangjun.workers.dev/IMG_9582.webp",
  uniT: "https://images.95jjangjun.workers.dev/IMG_9591.webp",
  "시간외 파도타기": "https://images.95jjangjun.workers.dev/IMG_9592.webp",
  시간외안가: "https://images.95jjangjun.workers.dev/IMG_9595.webp",
};

export default function IntroSection({ id, infos, openLyricsPopup }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");
  const sectionsRef = useRef(new Map());
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const scrollDown = window.scrollY > lastScrollY.current;
        lastScrollY.current = window.scrollY;

        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          setActiveTitle(
            scrollDown
              ? visibleSections[0].target.dataset.title
              : visibleSections[visibleSections.length - 1].target.dataset.title
          );
        }
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0 }
    );

    sectionsRef.current.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleFilterClick = (sessionId) => {
    setIsFilterOpen(false);
    const targetRef = sectionsRef.current.get(sessionId);
    if (targetRef) {
      window.scrollTo({ top: targetRef.offsetTop - 85, behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="text-center w-full mt-10 pt-20">
      <h2 className="font-bold text-4xl mb-10">SET LIST</h2>

      <div className="border-t-gray-800 border-t-2 bg-black sticky top-[55px]">
        <div
          className="flex justify-between p-4 pl-5 border-b-gray-500 border-b cursor-pointer"
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          <div className="font-bold text-xl">{activeTitle || "비상장밴드"}</div>
          <img
            src={arrow}
            className={`mr-[2px] transition-transform ${
              isFilterOpen ? "rotate-270" : "rotate-90"
            }`}
            width={20}
            height={10}
            alt="arrow"
          />
        </div>
        {isFilterOpen && (
          <SessionList infos={infos} onClick={handleFilterClick} />
        )}
      </div>

      {Object.entries(infos).map(([sessionId, songs]) => (
        <SessionSection
          key={sessionId}
          sessionId={sessionId}
          songs={songs}
          sectionsRef={sectionsRef}
          openLyricsPopup={openLyricsPopup}
        />
      ))}
    </section>
  );
}

function SessionList({ infos, onClick }) {
  return (
    <ul className="absolute p-4 bg-black w-full">
      {Object.keys(infos).map((sessionId) => (
        <li
          key={sessionId}
          className="font-bold text-xl mb-3 text-left cursor-pointer"
          onClick={() => onClick(sessionId)}
        >
          {sessionId}
        </li>
      ))}
    </ul>
  );
}

function SessionSection({ sessionId, songs, sectionsRef, openLyricsPopup }) {
  return (
    <div
      id={sessionId}
      ref={(el) => sectionsRef.current.set(sessionId, el)}
      data-title={sessionId}
    >
      {/* {sessionId} */}

      {thumbnails[sessionId] ? (
        <div className="h-60 w-full bg-inherit">
          <img
            src={thumbnails[sessionId]}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="h-60 w-full bg-inherit">
          <div className="flex justify-center items-center h-full font-bold text-4xl">{sessionId}</div>
        </div>
      )}

      <SongList songs={songs} openLyricsPopup={openLyricsPopup} />
    </div>
  );
}

function SongList({ songs, openLyricsPopup }) {
  return (
    <ul className="bg-white text-black">
      {songs.map((song, index) => (
        <li
          key={index}
          className="p-4 border-b-gray-200 border-b mx-4 text-left cursor-pointer"
          onClick={() => openLyricsPopup(song.lyrics)}
        >
          <div className="font-bold">
            {song.title} - {song.artist}
          </div>
          <div className="text-[0.8rem] text-gray-700 break-words">
            {song.participants}
          </div>
        </li>
      ))}
    </ul>
  );
}
