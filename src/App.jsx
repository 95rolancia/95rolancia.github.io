import { useState, useMemo, useEffect } from "react";

import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import MainSection from "./components/MainSection";
import NotiSection from "./components/NotiSection";
import Schedule from "./components/Schedule";
import ArrowUpBtn from "./components/ArrowUpBtn";
import LocationSection from "./components/LocationSection";

import { IoMdClose } from "react-icons/io";

// const thumbnails = [
//   {
//     teamname: '은록도 록이다',
//     thumbnail: 'https://images.95jjangjun.workers.dev/IMG_9470.jpeg'
//   },
//   {
//     teamname: '은록도 록이다',
//     thumbnail: 'https://images.95jjangjun.workers.dev/IMG_9470.jpeg'
//   },
//   {
//     teamname: '은록도 록이다',
//     thumbnail: 'https://images.95jjangjun.workers.dev/IMG_9470.jpeg'
//   },
//   {
//     teamname: '은록도 록이다',
//     thumbnail: 'https://images.95jjangjun.workers.dev/IMG_9470.jpeg'
//   },
//   {
//     teamname: '은록도 록이다',
//     thumbnail: 'https://images.95jjangjun.workers.dev/IMG_9470.jpeg'
//   },
//   {
//     teamname: '은록도 록이다',
//     thumbnail: 'https://images.95jjangjun.workers.dev/IMG_9470.jpeg'
//   },
// ]

const songs = [
  {
    artist: "Sixpence none the richer",
    title: "Kiss me",
    teamname: "비상장밴드",
    participants: [
      "허은재(보컬), 서예찬(기타), 노윤정(키보드), 송인욱(베이스), 드럼(김재동)",
    ],
    lyrics:`
    Kiss me, out of the bearded barley
    Nightly, beside the green, green grass
    Swing, swing, swing the spinning step
    You'll wear those shoes and I will wear that dress

    Oh, kiss me, beneath the milky twilight
    Lead me out on the moonlit floor
    Lift your open hand
    Strike up the band and make the fireflies dance
    Silver moon's sparkling
    So kiss me

    Kiss me, down by the broken tree house
    Swing me, upon its hanging tire
    Bring, bring, bring your flowered hat
    We'll take the trail marked on your father's map

    Oh, kiss me, beneath the milky twilight
    Lead me out on the moonlit floor
    Lift your open hand
    Strike up the band and make the fireflies dance
    Silver moon's sparkling    
    So kiss me

    Kiss me, beneath the milky twilight
    Lead me out on the moonlit floor
    Lift your open hand
    Strike up the band and make the fireflies dance
    Silver moon's sparkling
    So kiss me

    So kiss me
    So kiss me
    So kiss me`
  },
  {
    artist: "윤도현밴드",
    title: "잊을게",
    teamname: "비상장밴드",
    participants: [
      "양재혁(보컬), 장준혁&김수연(기타), 노윤정(키보드), 송인욱(베이스), 김재동(드럼)",
    ],
    lyrics: `
    아침에 눈을 떴을 때 너를 
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
    lyrics: `
    I'm so happy 'cause today I found my friends
    They're in my head
    I'm so ugly, that's okay, 'cause so are you
    Broke our mirrors
    Sunday morning is everyday, for all I care
    And I'm not scared
    Light my candles in a daze
    'Cause I've found God
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah, yeah
    I'm so lonely, that's okay, I shaved my head
    And I'm not sad
    And just maybe I'm to blame for all I've heard
    But I'm not sure
    I'm so excited, I can't wait to meet you there
    And I don't care
    I'm so horny, that's okay
    My will is good
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah, yeah
    I like it, I'm not gonna crack
    I miss you, I'm not gonna crack
    I love you, I'm not gonna crack
    I killed you, I'm not gonna crack
    I like it, I'm not gonna crack
    I miss you, I'm not gonna crack
    I love you, I'm not gonna crack
    I killed you, I'm not gonna crack
    I'm so happy 'cause today I found my friends
    They're in my head
    I'm so ugly, that's okay, 'cause so are you
    Broke our mirrors
    Sunday morning is everyday, for all I care
    And I'm not scared
    Light my candles in a daze
    'Cause I've found God
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah
    Yeah, yeah, yeah
    I like it, I'm not gonna crack
    I miss you, I'm not gonna crack
    I love you, I'm not gonna crack
    I killed you, I'm not gonna crack
    I like it, I'm not gonna crack
    I miss you, I'm not gonna crack
    I love you, I'm not gonna crack
    I killed you, I'm not gonna crack`
  },
  {
    artist: "Green day",
    title: "Basket Case",
    teamname: "비상장밴드",
    participants: ["양재혁(보컬), 김수연(기타), 허은재(베이스), 드럼(송인욱)"],
  },
  {
    artist: "이적",
    title: "빨래",
    teamname: "운영본부",
    participants: [
      "김준호(보컬), 원다연(키보드), 허은재(베이스), 이규민(드럼)",
    ],
  },
  {
    artist: "원모어찬스",
    title: "널 생각해",
    teamname: "운영본부",
    participants: ["조용걸(보컬), 김세영(기타), 원다연(키보드), 드럼(이규민)"],
  },

  {
    artist: "Ra.D",
    title: "I'm in Love",
    teamname: "운영본부",
    participants: ["조용걸(보컬), 원다연(키보드)"],
  },

  {
    artist: "Radiohead",
    title: "Creep",
    teamname: "운영본부",
    participants: [
      "이은상(보컬), 서예찬&김세영(기타), 원다연(키보드), 허은재(베이스)",
    ],
  },
  {
    artist: "윤하",
    title: "비밀번호 486",
    teamname: "시간외 파도타기",
    participants: [
      "이희주(보컬), 서예찬&김세영(기타), 김은지(키보드), 권혁민(베이스), 김형욱(드럼)",
    ],
  },
  {
    artist: "러브홀릭",
    title: "그대만 있다면",
    teamname: "시간외 파도타기",
    participants: [
      "이희주(보컬), 서예찬&김세영(기타), 김은지(키보드), 원다연(키보드), 권혁민(베이스), 김형욱(드럼)",
    ],
  },
  {
    artist: "아이유",
    title: "있잖아",
    teamname: "시간외 파도타기",
    participants: [
      "이희주(보컬), 서예찬&김세영(기타), 원다연(키보드), 권혁민(베이스), 김형욱(드럼)",
    ],
  },

  {
    artist: "서영은",
    title: "혼자가 아닌 나",
    teamname: "시간외 파도타기",
    participants: [
      "이희주(보컬), 원성호&김세영(기타), 원다연(키보드), 권혁민(베이스), 김형욱(드럼)",
    ],
  },
  // 2부
  {
    artist: "숀",
    title: "Way back home",
    teamname: "시간외안가",
    participants: [
      "조용걸(보컬), 이명근&이지은(기타), 윤혜정(키보드), 김남석(베이스), 김준호(드럼)",
    ],
  },

  {
    artist: "주시크",
    title: "너를 생각해",
    teamname: "시간외안가",
    participants: [
      "조용걸(보컬), 이명근&이지은(기타), 윤혜정(키보드), 김남석(베이스), 최윤정(드럼)",
    ],
  },

  {
    artist: "(여자)아이들",
    title: "나는 아픈건 딱 질색이니까",
    teamname: "시간외안가",
    participants: [
      "윤소정(보컬), 이명근&이지은(기타), 윤혜정(키보드), 김남석(베이스), 최윤정(드럼)",
    ],
  },

  {
    artist: "OK Punk",
    title: "ugly",
    teamname: "uniT",
    participants: [
      "허은재(보컬), 최재혁&이명근(기타), 석은록(키보드), 송인욱(베이스), 김형욱(드럼)",
    ],
  },

  {
    artist: "Journey",
    title: "Separate Ways",
    teamname: "uniT",
    participants: [
      "이은상(보컬), 최재혁(기타), 석은록(키보드), 송인욱(베이스), 김형욱(드럼)",
    ],
  },
  {
    artist: "Same Direction",
    title: "Hoobastank",
    teamname: "은록도 록이다",
    participants: ["이은상(보컬), 최재혁(기타), 이지연(베이스), 드럼(김민지)"],
  },

  {
    artist: "델리스파이스",
    title: "고백",
    teamname: "은록도 록이다",
    participants: [
      "이은상(보컬), 최재혁(기타), 김송현(키보드), 이지연(베이스), 드럼(김민지)",
    ],
  },

  {
    artist: "체리필터",
    title: "Happy day",
    teamname: "은록도 록이다",
    participants: [
      "진소희(보컬), 최재혁(기타), 석은록(키보드), 이지연(베이스), 드럼(김민지)",
    ],
  },

  {
    artist: "터치드",
    title: "Highlight",
    teamname: "은록도 록이다",
    participants: [
      "진소희(보컬), 최재혁(기타), 석은록(키보드), 이지연(베이스), 드럼(김민지)",
    ],
  },
];

const NOTI_INFOS = {
  title: "지켜주세요",
  notis: ["안전을 유의해주세요", "뚜겅이 있는 음료만 반입이 가능합니다."],
};

const SECTION_META_DATA = [
  {
    id: "intro",
    title: "세션 소개",
    order: 1,
    component: <IntroSection />,
  },
  {
    id: "noti",
    title: "지켜주세요",
    order: 2,
    component: <NotiSection />,
  },
  {
    id: "location",
    title: "여기서 만나요",
    order: 3,
    component: <LocationSection />,
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

  useEffect(() => {
    // hashchange 이벤트 리스너 등록
    const handleHashChange = () => {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // 처음 로딩 시에도 해시가 있으면 바로 스크롤
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Header infos={SECTION_META_DATA} />
      <MainSection />
      <Schedule />
      <IntroSection
        id="intro"
        infos={groupedSongs}
        openLyricsPopup={openLyricsPopup}
      />
      <LocationSection id="location" />
      <NotiSection
        id="noti"
        title={NOTI_INFOS.title}
        notis={NOTI_INFOS.notis}
      />
      <ArrowUpBtn />

      {showLyricsPopup && (
        <LyricsPopup
          lyrics={lyrics}
          onClose={() => setShowLyricsPopup(false)}
        />
      )}
    </>
  );
}

const LyricsPopup = ({ lyrics, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <button className="text-3xl fixed right-4 top-4" onClick={onClose}>
      <IoMdClose />
    </button>
    <div className="my-20 max-h-[80vh] overflow-y-auto max-w-screen">
      <pre className="text-sm">{lyrics || "가사 없음"}</pre>
    </div>
  </div>
);
