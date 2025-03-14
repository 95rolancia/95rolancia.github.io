export default function LocationSection({ id }) {
  return (
    <section id={id} className="h-screen text-center pt-20">
      <h2 className="font-bold text-4xl pb-6">LOCATION</h2>

      <div className="m-4 flex justify-center">
        <img
          src="https://images.95jjangjun.workers.dev/convent-pub-naver-map.webp"
          className="border-2 border-amber-100 rounded-md min-w-0 max-w-[400px]"
          onClick={() => {
            window.open("https://naver.me/xiquDF3a");
          }}
        ></img>
      </div>

      <p className="px-6 pt-3 font-bold break-words text-xl">
        서울 마포구 와우산로17길 19-22 B1
        <br />
      </p>

      <p className="font-bold text-gray-400">(상수역 1번 출구에서 290m)</p>
    </section>
  );
}
