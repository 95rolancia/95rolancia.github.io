import { FaArrowUp } from "react-icons/fa";

export default function ArrowUpBtn() {
  return (
    <div className="text-center pb-10">
      <button
        className="text-3xl border-2 rounded-full p-1 border-white"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}
