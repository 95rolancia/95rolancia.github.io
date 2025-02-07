import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import { IoMdClose } from "react-icons/io";
import IntroSection from "./components/IntroSection";
import MainSection from "./components/MainSection";
import NotiSection from "./components/NotiSection";

const songs = [
  {
    artist: "윤도현밴드",
    title: "잊을게",
    teamname: "비상장밴드",
    participants: [
      "양재혁(보컬), 장준혁(기타), 김수연(기타), 송인욱(베이스), 김재동(드럼)",
    ],
    lyrics: `아침에 눈을 떴을 때 너를 
    길을 걷다 멍하니 너를 
    지금은 내 곁에 없는 너를 
    그리워하네 바보처럼 
    
    나보다 행복하기를 바래 
    내 생각 하지 않기를 바래
    더 좋은 사람 만나길 바래 
    다시는 내게 올 수 없게
    
    안개처럼 사라져간 
    다시 못 올 그 지난 날 
    함께한 추억 모두 흘려 보낼게 
    
    널 잊어야 해 힘들어도 
    널 지워야 해 기억 속에서 
    네가 떠난 후에 난 
    죽을 것 같이 아파도 
    두 번 다시 울지 않을게 
    
    잊을께 잊을께 
    
    아직도 휴대폰에 네 이름 
    지우지도 못하고 있어 
    전화기 들고 한참을 서서 
    널 생각하네 바보처럼
    
    안개처럼 사라져 간 
    다시 못 올 그 지난 날 
    함께한 추억 모두 흘려 보낼게 
    
    널 잊어야 해 힘들어도 
    널 지워야 해 기억 속에서 
    네가 떠난 후에 난 
    죽을 것 같이 아파도 
    다시는 너를 찾지 않아 
    
    아침에 눈을 떴을 때 너를 
    길을 걷다 멍하니 너를 
    지금은 내 곁에 없는 너를 
    그리워하네 바보처럼 
    
    잊을께 잊을께 잊을께`,
  },
  {
    artist: "Nirvana",
    title: "Litume",
    teamname: "비상장밴드",
    participants: ["양재혁(보컬), 장준혁(기타), 허은재(베이스), 드럼(김재동)"],
  },
  {
    artist: "Sixpence none the richer",
    title: "Kiss me",
    teamname: "비상장밴드",
    participants: ["허은재(보컬), 송인욱(베이스), 서예찬(기타), 드럼(김재동)"],
  },
  {
    artist: "Green day",
    title: "Basket Case",
    teamname: "비상장밴드",
    participants: ["양재혁(보컬), 김수연(기타), 허은재(베이스), 드럼(송인욱)"],
  },

  {
    artist: "Ra.D",
    title: "I'm in Love",
    teamname: "운영본부",
    participants: ["조용걸(보컬), 원다연(키보드)"],
  },

  {
    artist: "원모어찬스",
    title: "널 생각해",
    teamname: "운영본부",
    participants: ["조용걸(보컬), 원다연(키보드)"],
  },

  {
    artist: "이적",
    title: "빨래",
    teamname: "운영본부",
    participants: ["김준호(보컬), 원다연(키보드)"],
  },

  {
    artist: "Radiohead",
    title: "Creep",
    teamname: "운영본부",
    participants: ["이은상(보컬), 서예찬(기타), 김세영(회장), 원다연(키보드)"],
  },

  {
    artist: "서영은",
    title: "혼자가 아닌 나",
    teamname: "시간외 파도타기",
    participants: ["이은상(보컬), 서예찬(기타), 김세영(회장), 원다연(키보드)"],
  },

  {
    artist: "윤하",
    title: "비밀번호 486",
    teamname: "시간외 파도타기",
    participants: ["이은상(보컬), 서예찬(기타), 김세영(회장), 원다연(키보드)"],
  },

  {
    artist: "러브홀릭",
    title: "그대만 있다면",
    teamname: "시간외 파도타기",
    participants: ["이은상(보컬), 서예찬(기타), 김세영(회장), 원다연(키보드)"],
  },

  {
    artist: "아이유",
    title: "있잖아",
    teamname: "시간외 파도타기",
    participants: ["이은상(보컬), 서예찬(기타), 김세영(회장), 원다연(키보드)"],
  },

  {
    artist: "숀",
    title: "Way back home",
    teamname: "시간외안가",
    participants: ["이은상(보컬), 서예찬(기타), 김세영(회장), 원다연(키보드)"],
  },

  {
    artist: "주시크",
    title: "너를 생각해",
    teamname: "시간외안가",
    participants: ["이은상(보컬), 서예찬(기타), 김세영(회장), 원다연(키보드)"],
  },

  {
    artist: "(여자)아이들",
    title: "나는 아픈건 딱 질색이니까",
    teamname: "시간외안가",
    participants: ["윤소정(보컬), (기타), 김세영(회장), 원다연(키보드)"],
  },

  {
    artist: "Same Direction",
    title: "Hoobastank",
    teamname: "은록도 록이다",
    participants: ["이은상(보컬)", "..."],
  },

  {
    artist: "체리필터",
    title: "Happy day",
    teamname: "은록도 록이다",
    participants: ["진소희(보컬)", "..."],
  },

  {
    artist: "터치드",
    title: "Highlight",
    teamname: "은록도 록이다",
    participants: ["진소희(보컬)", "..."],
  },
];

export default function App() {
  const [showLyricsPopup, setShowLyricsPopup] = useState(false);
  const [lyrics, setLyrics] = useState("");

  const groupedSongs = useMemo(
    () =>
      songs.reduce((acc, song) => {
        if (!acc[song.teamname]) {
          acc[song.teamname] = [];
        }
        acc[song.teamname].push(song);
        return acc;
      }, {}),
    []
  );

  const openLyricsPopup = (lyrics) => {
    setShowLyricsPopup(true);
    setLyrics(lyrics);
  };

  useEffect(() => {
    document.body.style.overflow = showLyricsPopup ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLyricsPopup]);

  return (
    <div>
      <Header />
      <MainSection />
      <NotiSection />
      <IntroSection infos={groupedSongs} openLyricsPopup={openLyricsPopup} />

      {[
        { id: "promise", title: "지켜주세요" },
        { id: "faq", title: "자주 하는 질문" },
        { id: "location", title: "여기서 만나요" },
      ].map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="text-center w-full h-[1000px] pt-20"
        >
          <h2 className="font-bold text-4xl">{section.title}</h2>
        </section>
      ))}

      {showLyricsPopup && (
        <LyricsPopup
          lyrics={lyrics}
          onClose={() => setShowLyricsPopup(false)}
        />
      )}
    </div>
  );
}

const LyricsPopup = ({ lyrics, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-scroll">
    <button className="text-3xl fixed right-4 top-4" onClick={onClose}>
      <IoMdClose />
    </button>
    <pre>{lyrics || "가사 없음"}</pre>
  </div>
);
