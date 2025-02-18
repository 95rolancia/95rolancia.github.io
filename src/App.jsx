import { useState, useMemo, useEffect } from "react";

import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import MainSection from "./components/MainSection";
import NotiSection from "./components/NotiSection";
import ArrowUpBtn from "./components/ArrowUpBtn";
import LocationSection from "./components/LocationSection";

import { IoMdClose } from "react-icons/io";

import { Analytics } from "@vercel/analytics/react";

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
    artist: "Sixpence None The Richer",
    title: "Kiss me",
    teamname: "비상장밴드",
    participants: [
      "허은재(보컬), 서예찬(기타), 노윤정(키보드), 송인욱(베이스), 김재동(드럼)",
    ],
    lyrics: `
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
    So kiss me`,
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
    title: "Lithium",
    teamname: "비상장밴드",
    participants: ["양재혁(보컬), 장준혁(기타), 허은재(베이스), 김재동(드럼)"],
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
    I killed you, I'm not gonna crack`,
  },
  {
    artist: "Green day",
    title: "Basket Case",
    teamname: "비상장밴드",
    participants: ["양재혁(보컬), 김수연(기타), 허은재(베이스), 송인욱(드럼)"],
    lyrics: `
    Do you have the time to listen to me whine
    About nothing and everything all at once?
    I am one of those
    Melodramatic fools
    Neurotic to the bone
    No doubt about it

    Sometimes I give myself the creeps
    Sometimes my mind plays tricks on me
    It all keeps adding up
    I think I'm cracking up
    Am I just paranoid?
    Or am I just stoned?
    
    I went to a shrink
    To analyze my dreams
    She says it's lack of sex that's bringing me down
    I went to a whore
    He said my life's a bore
    So quit my whining 'cause it's bringing her down

    Sometimes I give myself the creeps
    Sometimes my mind plays tricks on me
    It all keeps adding up
    I think I'm cracking up
    Am I just paranoid?
    Huh yeah, yeah, yeah
    (Ooh, ooh)

    Grasping to control
    So I better hold on

    Sometimes I give myself the creeps
    Sometimes my mind plays tricks on me
    It all keeps adding up
    I think I'm cracking up
    Am I just paranoid?
    Or am I just stoned?`,
  },
  {
    artist: "이적",
    title: "빨래",
    teamname: "운영본부",
    participants: [
      "김준호(보컬), 원다연(키보드), 허은재(베이스), 이규민(드럼)",
    ],
    lyrics: `
    빨래를 해야겠어요
    오후엔 비가 올까요
    그래도 상관은 없어요
    괜찮아요
    뭐라도 해야만 할 것 같아요
    그러면 나을까 싶어요
    잠시라도 모두
    잊을 수 있을지 몰라요
    그게 참 맘처럼 쉽지가 않아서
    그게 참 말처럼 되지가 않아서
    무너진 가슴이 다시 일어설 수 있게
    난 어떡해야 할까요
    어떻게 해야만 할까요

    그대가 날 떠난 건지
    내가 그댈 떠난 건지
    일부러 기억을 흔들어 뒤섞어도
    금세 또 앙금이 가라앉듯
    다시금 선명해져요
    잠시라도 모두 잊을 수 있을까 했는데 음 음

    그게 참 맘처럼 쉽지가 않아서
    그게 참 말처럼 되지가 않아서
    무너진 가슴이 다시 일어설 수 있게
    난 어떡해야 할까요
    어떻게 해야만 할까요
    뒤집혀 버린 마음이 사랑을 쏟아내도록
    그래서 아무것도 남김없이 비워내도록
    난 이를 앙다물고 버텨야 했죠
    하지만 여태 내 가슴속엔 후 예 예

    그게 참 말처럼 쉽게 되지가 않아서
    무너진 가슴이 다시 일어설 수 있게
    난 어떡해야 할까요
    어떻게 해야만 할까요
    빨래를 해야겠어요
    오후엔 비가 올까요
    `,
  },
  {
    artist: "원모어찬스",
    title: "널 생각해",
    teamname: "운영본부",
    participants: ["조용걸(보컬), 김세영(기타), 원다연(키보드), 이규민(드럼)"],
    lyrics: `
    Tonight 널 바래다 주는 길 내내
    내가 변했다고 말하지
    널 생각하지 않는다고 너는 투덜대지
    언제나 넌 사랑이 설레임이니
    내겐 사랑은 익숙함야
    너를 떠올리는 그 시간을 따로 두진 않아
    
    늘 널 생각해 그래 널 생각해
    바쁜 하루의 순간 순간 그 순간도 니가 보여
    모두 보여줄 순 없지만 조금은 너도 느끼잖아
    늘 널 생각해 매일 널 생각해
    잠이 들어 꿈꾸는 순간도
    내 앞에 웃는 그런 너를 생각해
    
    기억나 내가 처음 고백했던 그 날
    멋진 이벤트도 없었지만 나 받아준 널
    내 가슴에 늘 지금처럼
    
    늘 널 생각해 그래 널 생각해
    바쁜 하루의 순간 순간 그 순간도 니가 보여
    모두 보여줄 순 없지만 조금은 너도 느끼잖아
    늘 널 생각해 매일 널 생각해
    잠이 들어 꿈꾸는 순간도
    내 앞에 웃는 그런 너를 생각해
    
    늘 널 생각해 그래 널 생각해
    우리 함께 한 순간 순간 그 순간이 소중해서
    말로 다 할 수는 없지만 조금씩 네게 보여줄게
    늘 난 생각해 매일 난 생각해
    이른 아침 잠에서 깨어나
    이 세상에서 가장 행복한 너를
    내 앞에 웃는 그런 널 보며 I Love You
    `,
  },

  {
    artist: "Ra.D",
    title: "I'm in Love",
    teamname: "운영본부",
    participants: ["조용걸(보컬), 원다연(키보드)"],
    lyrics: `
    사실은 첨봤을때부터 그댈 좋아했다고
    말하기가 내겐 참 어려웠던거죠
    먼저 다가서지 않으면 그댈 놓칠까봐
    편지를 쓰고 또 작은 선물을 준비했죠
    
    깊어지면 상처뿐일꺼라는 생각에
    두려움이 앞선건 사실이지만
    간절한 맘으로 기도하고 바랬던
    사람이 그대라고 난 믿어
    
    I'm I'm in love,
    I'm I'm fallen love
    어쩔수 없네요 내 맘을 숨기기엔
    그대는 너무 아름답죠
    
    나는 그대가 정말 좋은데
    뛰는 가슴 어쩔줄을 모른체
    만날때마다 고백해 좋아해
    매일 그댈 사랑했지
    내 마음에 가득한 얘기죠
    하루종일 난 하루종일 난
    
    깊어지면 상처뿐일거라는 생각에
    두려움이 앞선건 사실이지만
    간절한 맘으로 기도하고 바랬던
    사람이 그대라고 난 믿어
    
    I'm I'm in love,
    I'm I'm fallen love
    어쩔 수 없네요 내 맘을 숨기기엔
    그대는 너무 아름답죠
    
    I'm I'm in love,
    I'm I'm fallen love
    어쩔 수 없네요 내 맘을 숨기기엔
    그대는 너무 아름답죠
    
    그대는 너무 아름답죠
    `,
  },

  {
    artist: "Radiohead",
    title: "Creep",
    teamname: "운영본부",
    participants: [
      "이은상(보컬), 서예찬&김세영(기타), 원다연(키보드), 허은재(베이스), 김준호(드럼)",
    ],
    lyrics: `
    When you were here before
    Couldn't look you in the eye
    You're just like an angel
    Your skin makes me cry
    You float like a feather in a beautiful world
    I wish i was special
    You're so fucking special

    But i'm a creep
    I'm a wierdo
    What the hell am i doing here
    I don't belong here

    I don't care if it hurts
    I wanna have control
    I wanna perfect body
    I wanna perfect soul
    I want you to notice
    When i'm not around
    You're so fucking special
    I wish i was special

    But im a creep
    I'm a wierdo
    What the hell am i doing here
    I don't belong here

    She..
    She's running out again
    She's running out
    She run run run

    Whatever makes you happy
    Whatever you want
    You're so fucking special
    I wish i was special

    But I'm a creep I'm a wierdo
    What the hell am i doing here

    I don't belong here
    I don't belong here
    `,
  },
  {
    artist: "윤하",
    title: "비밀번호 486",
    teamname: "시간외 파도타기",
    participants: [
      "이희주(보컬), 서예찬&김세영(기타), 김은지(키보드), 권혁민(베이스), 김형욱(드럼)",
    ],
    lyrics: `
    한 시간마다 보고 싶다고 감정 없이 말하지 말아
    흔하게 널린 연애 지식은 통하지 않아
    백 번을 넘게 사랑한다고 감동 없이 말하지 말아
    잘 잡혀 가던 분위기마저 깨 버리잖아

    여자는 생각보다 단순하지 않아
    행복하게 만드는 방법도 조금씩은 달라

    하루에 네 번 사랑을 말하고
    여덟 번 웃고 여섯 번의 키스를 해 줘
    날 열어주는 단 하나뿐인 비밀번호야
    누구도 알 수 없게 너만이 나를 가질 수 있도록
    You are my secret boy boy boy, boy boy boy

    아무데서나 나타나지 마 항상 놀라지만은 않아
    화장기 없는 얼굴 보이면 화도 나는 걸

    남자는 여자만큼 섬세하지 않아
    하고 싶은 대로만 한다면 다 된다고 믿어

    하루에 네 번 사랑을 말하고
    여덟 번 웃고 여섯 번의 키스를 해 줘
    날 열어주는 단 하나뿐인 비밀번호야
    누구도 알 수 없게 너만이 나를 가질 수 있도록
    You are my secret boy boy boy, boy boy boy

    어렵다고 포기하지 말아 줘
    너 하나만 원하는 날 알아줘
    바람둥이같은 남자들에게
    여자들은 늘 속고 마는걸
    날 애태우고 달랠 줄 아는 네가 되길 바라

    하루에 네 번 사랑을 말하고
    여덟 번 웃고 여섯 번의 키스를 해 줘
    날 열어주는 단 하나뿐인 비밀번호야
    누구도 알 수 없게 너만이 나를 가질 수 있도록
    You are my secret boy boy boy, boy boy boy
    `,
  },
  {
    artist: "러브홀릭",
    title: "그대만 있다면",
    teamname: "시간외 파도타기",
    participants: [
      "이희주(보컬), 서예찬&김세영(기타), 김은지&원다연(키보드), 권혁민(베이스), 김형욱(드럼)",
    ],
    lyrics: `
    날 사랑해서 떠난다며
    눈물짓던 그대의 말을 믿을 수 없죠
    하지만 나의 전부였던
    그대가 힘들어하기에 잡을 수 없었죠

    온통 너와의 기억뿐인
    나를 위해서였다면
    조금씩 무너져가는 날 날 위한다면

    이대로 내 곁에 있어야 해요
    나를 떠나면 안 돼요
    세상의 모든 걸 잃어도 괜찮아요
    그대만 있다면 그대만 있다면

    함께 웃던 시간들을 함께했던 약속들을
    지금 또 영원히 기억하겠어요
    다시 한번 생각해요
    무엇이 날 위한 건지 그대는 알고 있어요

    영원히 내 곁을 지켜주세요
    나를 떠나지 말아요
    세상의 모든 걸 잃어도 난 좋아요
    그대만 있다면 그대만 있다면

    온통 그대의 생각뿐인
    나를 위해서였다면
    초라하게 쓰러지는 날
    날 위한다면

    이대로 내 곁에 있어야 해요
    나를 떠나면 안 돼요
    세상의 모든 걸 잃어도 괜찮아요
    그대만 있다면 그대만 있다면

    영원히 내 곁을 지켜주세요
    나를 떠나지 말아요
    세상의 모든 걸 잃어도 난 좋아요
    그대만 있다면 그대만 있다면
    `,
  },
  {
    artist: "아이유",
    title: "있잖아",
    teamname: "시간외 파도타기",
    participants: [
      "이희주(보컬), 서예찬&김세영(기타), 원다연(키보드), 권혁민(베이스), 김형욱(드럼)",
    ],
    lyrics: `
    One two three go

    있잖아 왠지 두근 두근 가슴이 떨려 몰라
    있잖아 괜히 나를 보는 눈빛이 너무 좋아
    
    (Baby one two three) 내게 다가 와
    (Luv) 부끄럽지만
    (A to Z) 알고 싶어 난 숨겨 둔 너의 맘
    
    나를 원하니 가지고 싶니
    나의 모든 게 전부 네 것이길 바라니
    사랑한단 한 마디만 솔직히 말해 봐
    
    이별에 혼자 훌쩍 훌쩍 우는 건 싫어 정말
    사랑에 너와 생글 생글 웃고만 싶어 항상
    
    (Baby one two three) 두 손을 꼽아
    (Luv) 세어보지만
    (A to Z) 그 누구보다 네가 제일 좋아
    
    나를 원하니 가지고 싶니
    나의 모든 게 전부 네 것이길 바라니
    사랑한단 한 마디만 솔직히 말해 봐
    
    I believe you cause I'm in love with you
    이런 느낌은 처음이니까
    
    나를 원하니 가지고 싶니
    나의 모든 게 전부 네 것이길 바라니
    사랑한단 한 마디만 솔직히 말해 봐
    
    나를 원하니 가지고 싶니
    나의 모든 게 전부 네 것이길 바라니
    사랑한단 한 마디만 솔직히 말해 봐
    
    부드러운 내 입술이 네 볼에 닿을 때
    나만 사랑한단 말만 속삭여 줘 Darling
    `,
  },

  {
    artist: "서영은",
    title: "혼자가 아닌 나",
    teamname: "시간외 파도타기",
    participants: [
      "이희주(보컬), 원성호&김세영(기타), 원다연(키보드), 권혁민(베이스), 이규민(드럼)",
    ],
    lyrics: `
    이제 다시 울지 않겠어 더는 슬퍼하지 않아
    다신 외로움에 슬픔에 난 흔들리지 않겠어
    더는 약해지지 않을께 많이 아파도 웃을꺼야
    그런 내가 더 슬퍼보여도 날 위로 하지마
    
    가끔 나 욕심이 많아서 울어야 했는지 몰라
    행복은 늘 멀리 있을때 커 보이는 걸
    
    힘이 들땐 하늘을 봐 나는 항상 혼자가 아니야
    비가 와도 모진 바람 불어도 다시 햇살은 비추니까
    눈물나게 아픈날엔 크게 한번만 소리를 질러봐
    내게 오려던 연약한 슬픔이 또 달아날 수 있게
    
    가끔 어제가 후회되도
    나 지금 사는 오늘이 내일보면 어제가 되는 하루 일테니
    
    힘이 들땐 하늘을 봐 나는 항상 혼자가 아니야
    비가 와도 모진 바람 불어도 다시 햇살은 비추니까
    눈물나게 아픈날엔 크게 한번만 소리를 질러봐
    내게 오려던 연약한 슬픔이 또 달아날 수 있게
    
    앞만 보고 걸어갈께 때론 혼자서 뛰어라도 갈께.
    내게 멈추던 조그만 슬픔도 날 따라오지 않게
    `,
  },
  // 2부
  {
    artist: "숀",
    title: "Way back home",
    teamname: "시간외안가",
    participants: [
      "조용걸(보컬), 이명근&이지은(기타), 윤혜정(키보드), 김남석(베이스), 김준호(드럼)",
    ],
    lyrics: `
    멈춘 시간 속 잠든 너를 찾아가
    아무리 막아도 결국 너의 곁인 걸
    길고 긴 여행을 끝내 이젠 돌아가
    너라는 집으로 지금 다시 Way back home

    아무리 힘껏 닫아도 다시 열린 서랍 같아
    하늘로 높이 날린 넌 자꾸 내게 되돌아와
    힘들게 삼킨 이별도 다 그대로인 걸 Oh oh oh

    수없이 떠난 길 위에서 난 너를 발견하고
    비우려 했던 맘은 또 이렇게 너로 차올라
    발걸음의 끝에 늘 니가 부딪혀 그만 그만

    멈춘 시간 속 잠든 너를 찾아가
    아무리 막아도 결국 너의 곁인 걸
    길고 긴 여행을 끝내 이젠 돌아가
    너라는 집으로 지금 다시 Way back home

    조용히 잠든 방을 열어 기억을 꺼내 들어
    부서진 시간 위에서 선명히 너는 떠올라
    길 잃은 맘 속에 널 가둔 채 살아 그만 그만

    멈춘 시간 속 잠든 너를 찾아가
    아무리 막아도 결국 너의 곁인 걸
    길고 긴 여행을 끝내 이젠 돌아가
    너라는 집으로 지금 다시 Way back home

    세상을 뒤집어 찾으려 해
    오직 너로 완결된 이야기를
    모든 걸 잃어도 난 너 하나면 돼

    빛이 다 꺼진 여기 나를 안아줘

    눈을 감으면 소리 없이 밀려와
    이 마음 그 위로 넌 또 한 겹 쌓여가
    내겐 그 누구도 아닌 니가 필요해
    돌아와 내 곁에 그날까지 I'm not done`,
  },

  {
    artist: "주시크",
    title: "너를 생각해",
    teamname: "시간외안가",
    participants: [
      "조용걸(보컬), 이명근&이지은(기타), 윤혜정(키보드), 김남석(베이스), 최윤정(드럼)",
    ],
    lyrics: `
    너를 들려주고 싶었어
    이 노랠 만들 때
    아마 니가 정말 많이 좋아할꺼야
    이젠 내겐 니가 없어서 나 혼자 불러도
    혹시 듣게 되면 그게 니 얘기라고
    
    난 노랠 만들 땐
    늘 너를 생각해
    어딘가 혼자 진지한 표정
    고개를 끄덕거리고 나선
    항상 흥얼거리며 따라 불렀어
    
    나를 보며 신나있던 너에게
    불러주고 싶던 노래를
    왜 이제야 겨우 완성했을까
    
    이 노랜 널 사랑한다는 내 얘기가
    잔뜩 들어갔어야 하는 노랜데
    
    너를 들려주고 싶었어
    이 노랠 만들 때
    아마 니가 정말 많이 좋아할꺼야
    이젠 내겐 니가 없어서 나 혼자 불러도
    혹시 듣게 되면 그게 니 얘기라고
    
    니가 자주 가곤했던 카페에
    이 노래가 나올 때까지
    니 친구가 따라 부를 때까지
    
    이 노랠 유명해지게 계속 불러서
    나는 너에게로 꼭 닿고 말거야
    
    너를 들려주고 싶었어
    이 노랠 만들때
    아마 니가 정말 많이 좋아할꺼야
    이젠 내겐 니가 없어서 나 혼자 불러도
    혹시 듣게 되면 그게 니 얘기라고
    
    너를 사랑할땐 몰랐던
    바보라 미안해
    아마 이걸 듣고 너는 원망하겠지
    이젠 내가 많이 잘할게
    너 혼자 울지마
    혹시 듣게 되면 아직 너뿐이라고
    `,
  },

  {
    artist: "(여자)아이들",
    title: "나는 아픈건 딱 질색이니까",
    teamname: "시간외안가",
    participants: [
      "윤소정(보컬), 이명근&이지은(기타), 윤혜정(키보드), 김남석(베이스), 최윤정(드럼)",
    ],
    lyrics: `
    오늘도 아침엔 입에 빵을 물고
    똑같이 하루를 시작하고
    온종일 한 손엔 아이스 아메리카노
    피곤해 죽겠네
    
    지하철 속 이 장면 어제 꿈에서 봤나
    아참 매일이지 지나치고
    바쁜 이 삶에 그냥 흔한 날에
    그 애를 보고 말야
    
    평온했던 하늘이 무너지고
    어둡던 눈앞이 붉어지며
    뭔가 잊고 온 게 있는 것 같아
    괜히 이상하게 막 울 것만 같고
    그냥 지나치는 게 나을 것 같아
    나는 생각은 딱 질색이니까
    
    카페인으로 잡은 정신은 빠졌고
    하루 종일 신경 쓰여 토할 것 같아
    저녁이 돼도 배고픔까지 까먹고
    그치 이상하지 근데 말야 있잖아
    
    처음 본 순간 뭐라 할까 그립달까
    나도 웃긴데 말야
    
    평온했던 하늘이 무너지고
    어둡던 눈앞이 붉어지며
    뭔가 잊고 온 게 있는 것 같아
    괜히 이상하게 막 울 것만 같고
    그냥 지나치는 게 나을 것 같아
    나는 생각은 딱 질색이니까
    
    오랫동안 나를 아는
    슬픈 표정을 하고 Oh
    흔적 없는 기억 밖
    혹 과거에 미래에 딴 차원에 세계에
    1 2 3 4 5 6 7 8
    
    평온했던 하늘이 무너지고
    어둡던 눈앞이 붉어져도
    다시 놓쳐버리는 것만 같아
    괜히 이상하게 막 울 것만 같고
    그냥 지나치는 게 나을 것 같아
    나는 생각은 딱 질색이니까
    
    아냐 지나치는 게 나을 것 같아
    나는 아픈 건 딱 질색이니까
    `,
  },
  {
    artist: "OK PUNK!",
    title: "Ugly",
    teamname: "uniT",
    participants: [
      "허은재(보컬), 최재혁&이명근(기타), 석은록(키보드), 송인욱(베이스), 김형욱(드럼)",
    ],
    lyrics: `
    난 왜 이렇게 못난 걸까
    어떡하면 나도 너처럼 환하게 웃어볼 수 있을까
    또 화가나 왜 늘 완벽하지 못해
    이 깨진 거울 속 못난 모습을 향해 탓하기만 해
    
    쳐다보지마 지금 이 느낌이 싫어 난
    어디론가 숨고만 싶어 벗어 나고 싶어
    이 세상은 거짓말
    
    I think I’m ugly
    And nobody wants to love me
    Just like her I wanna be pretty I wanna be pretty
    Don’t lie to my face tellin’ me I’m pretty
    
    I think I’m ugly
    And nobody wants to love me
    Just like her I wanna be pretty I wanna be pretty
    Don’t lie to my face cuz I know I’m ugly
    
    말 시키지마 난 너와 어울리지 못해
    그 잘난 눈빛 속 차가운 가식이 날 숨막히게 해
    
    다가오지마 너의 관심조차 싫어 난
    어디론가 떠나고 싶어 소리 치고 싶어
    이 세상은 거짓말
    
    I think I’m ugly
    And nobody wants to love me
    Just like her I wanna be pretty I wanna be pretty
    Don’t lie to my face tellin’ me I’m pretty
    
    I think I’m ugly
    And nobody wants to love me
    Just like her I wanna be pretty I wanna be pretty
    Don’t lie to my face cuz I know I’m ugly
    
    All alone
    I’m all alone (X2)
    따뜻함이란 없어
    곁엔 아무도 없어
    
    All alone I’m all alone (X2)
    I’m all alone
    
    따뜻함이란 없어
    곁엔 아무도 없어
    
    I think I’m ugly
    And nobody wants to love me
    Just like her I wanna be pretty I wanna be pretty
    Don’t lie to my face tellin’ me I’m pretty
    
    I think I’m ugly
    And nobody wants to love me
    Just like her I wanna be pretty I wanna be pretty
    Don’t lie to my face cuz I know I’m ugly
    `,
  },

  {
    artist: "Journey",
    title: "Separate Ways",
    teamname: "uniT",
    participants: [
      "이은상(보컬), 최재혁(기타), 석은록(키보드), 송인욱(베이스), 김형욱(드럼)",
    ],
    lyrics: `
    Here we stand
    Worlds apart, hearts broken in two, two, two

    Sleepless nights, losing ground
    I'm reachin' for you, you, you

    Feelin' that it's gone
    Can change your mind
    If we can't go on
    To survive the tide, love divides

    Someday love will find you
    Break those chains that bind you
    One night will remind you
    How we touched and went our separate ways
    If he ever hurts you
    True love won't desert you
    You know I still love you
    Though we touched and went our separate ways

    Troubled times
    Caught between confusion and pain, pain, pain
    Distant eyes
    Promises we made were in vain, in vain, in vain

    If you must go, I wish you love
    You'll never walk alone
    Take care, my love
    Miss you, love

    Someday love will find you
    Break those chains that bind you
    One night will remind you
    How we touched and went our separate ways
    If he ever hurts you
    True love won't desert you
    You know I still love you
    Though we touched and went our separate ways

    No, someday love will find you
    Break those chains that bind you
    One night will remind you

    If he ever hurts you
    True love won't desert you
    You know I still love you

    I still love you, girl
    I really love you, girl

    And if he ever hurts you
    True love won't desert you

    No, no
    `,
  },
  {
    artist: "Hoobastank",
    title: "Same Direction",
    teamname: "은록도 록이다",
    participants: ["이은상(보컬), 최재혁(기타), 이지연(베이스), 김민지(드럼)"],
    lyrics: `
    whenever i step outside, somebody claims to see the light
    it seems to me that all of us have lost our patience.
    'cause everyone thinks they're right, and nobody thinks that there just might
    be more than one road to our final destination
    
    but i'm not ever going to know if i'm right or wrong
    'cause we're all going in the same direction
    and i'm not sure which way to go because all along
    we've been going in the same direction
    
    i'm tired of playing games, of looking for someone else to blame
    
    for all the holes in answers that are clearly showing
    for something to fill the space, was all of the time i spent a waste
    'cause so many choices point the same way i was going.....
    
    so why does there only have to be one correct philosophy?
    i don't want to go and follow you just to end up like one of them
    and why are you always telling me what you want me to believe?
    i'd like to think that i can go my own way and meet you in the end.
    
    but i'm not ever going to know..........
    `,
  },

  {
    artist: "델리스파이스",
    title: "고백",
    teamname: "은록도 록이다",
    participants: [
      "이은상(보컬), 최재혁(기타), 김송현(키보드), 이지연(베이스), 김민지(드럼)",
    ],
    lyrics: `
    중2때까진 늘 첫째 줄에
    겨우 160이 됐을 무렵
    쓸만한 녀석들은 모두 다
    이미 첫사랑 진행 중
    
    정말 듣고 싶었던 말이야
    물론 2년전 일이지만
    기뻐야하는 게 당연한데
    내 기분은 그게 아냐
    
    하지만 미안해 네 넓은 가슴에 묻혀
    다른 누구를 생각했었어
    미안해 너의 손을 잡고 걸을 때에도
    떠올렸었어 그 사람을
    
    널 좋아하면 좋아할수록
    상처 입은 날들이 더 많아
    모두가 즐거운 한 때에도
    나는 늘 그곳에 없어
    
    정말 미안한 일을 한걸까
    나쁘진 않았었지만
    친구인 채였다면 오히려
    즐거웠을 것만 같아
    
    하지만 미안해 네 넓은 가슴에 묻혀
    다른 누구를 생각했었어
    미안해 너의 손을 잡고 걸을 때에도
    떠올랐었어 그 사람이
    
    하지만 미안해 네 넓은 가슴에 묻혀
    다른 누구를 생각했었어
    미안해 너의 손을 잡고 걸을 때에도
    떠올랐었어 그 사람이
    `,
  },

  {
    artist: "체리필터",
    title: "Happy day",
    teamname: "은록도 록이다",
    participants: [
      "진소희(보컬), 최재혁(기타), 석은록(키보드), 이지연(베이스), 김민지(드럼)",
    ],
    lyrics: `
    난 내가 말야 스무살 쯤엔 요절할 천재일 줄만 알고
    어릴 땐 말야 모든게 다 간단하다 믿었지
    이제 나는 딸기향 해열제 같은
    환상적인 해결책이 필요해
    징그러운 일상에 불을 지르고 어디론가 도망갈까
    
    찬란하게 빛나던 내 모습은
    어디로 날아갔을까? 어느 별로
    작은 일에도 날 설레게 했던
    내 안의 그 무언가는 어느 별에 묻혔나?
    
    가끔 울리는 전화벨소리 두근거리며 열어보면
    역시 똑같은 이상한 광고 메세지일 뿐이야..
    이제 여기 현실은 삼류영화 속
    너무 뻔한 일들의 연속이야
    징그러운 일상은 멈춰 세우고 어디론가 도망갈까
    
    거칠 것이 없었던 내 모습은
    어디로 사라졌을까? 어느 틈에
    작은 일에도 늘 행복했었던
    예전 그대로의 모습 찾고 싶어
    찬란하게 빛나던 내 모습은
    어디로 날아갔을까? 어느 별로
    작은 일에도 날 설레게 했던
    내 안의 그 무언가는 어느 별에 묻혔나?
    
    찬란하게 빛나던 내 모습은
    어디로 날아갔을까? 어느 별로
    작은 일에도 날 설레게 했던
    내 안의 그 무언가는 어느 별에
    
    거칠 것이 없었던 내 모습은
    어디로 사라졌을까? 어느 틈에
    작은 일에도 늘 행복했었던
    예전 그대로의 모습 다시 찾고만 싶어
    `,
  },

  {
    artist: "터치드",
    title: "Highlight",
    teamname: "은록도 록이다",
    participants: [
      "진소희(보컬), 최재혁(기타), 석은록(키보드), 이지연(베이스), 김민지(드럼)",
    ],
    lyrics: `
    저 멀리 기다리는
    이름 모를 고민들과
    언젠가 그리워질
    지나간 것들도 안녕
    간질간질하게
    피어나는 다가오는
    이 순간의 하얀
    Highlight
    Highlight
    Highlight
    춤추자 큰 소리로
    이 또한 사라질 시간
    다시는 오지 않을
    것들을 탐해가자
    아슬아슬하게
    올라오는 다가오는
    이 순간의 하얀
    Highlight
    Highlight
    Highlight
    간질간질하게
    피어나는 다가오는
    이 순간의 하얀
    Highlight
    Highlight
    Highlight
    Highlight
    Highlight`,
  },
];

const NOTI_INFOS = {
  title: "지켜주세요",
  notis: ["안전에 유의해주세요", "뚜껑이 있는 음료만 반입이 가능합니다."],
};

const SECTION_META_DATA = [
  {
    id: "intro",
    title: "세션 소개",
    order: 1,
    component: <IntroSection />,
  },

  {
    id: "location",
    title: "여기서 만나요",
    order: 2,
    component: <LocationSection />,
  },
  {
    id: "noti",
    title: "지켜주세요",
    order: 3,
    component: <NotiSection />,
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
      <MainSection imgUrl="https://images.95jjangjun.workers.dev/IMG_9499.webp" />
      <MainSection imgUrl="https://images.95jjangjun.workers.dev/IMG_9498.webp" />

      {/* <Schedule /> */}
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

      <Analytics />
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
