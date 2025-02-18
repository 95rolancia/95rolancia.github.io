import { useEffect, useState } from "react";
import "./Countdown.css";

const CountDown = () => {
  const targetDate = new Date("2025-03-15T18:00:00");
  const [timeLeft, setTimeLeft] = useState(formatTime(getTimeRemaining()));

  function getTimeRemaining() {
    const total = targetDate - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  }

  function formatTime(time) {
    return {
      days: String(time.days).padStart(2, "0"),
      hours: String(time.hours).padStart(2, "0"),
      minutes: String(time.minutes).padStart(2, "0"),
      seconds: String(time.seconds).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(formatTime(getTimeRemaining()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container absolute top-13 bg-transparent">
      <div className="countdown-timer">
        <CountdownItem value={timeLeft.days} />
        <div className="text-2xl mr-3 -mx-[1px] text-gray-300">D</div>
        <CountdownItem value={timeLeft.hours} />
        <div className="text-2xl mr-3 -mx-[1px] text-gray-300">H</div>
        <CountdownItem value={timeLeft.minutes} />
        <div className="text-2xl mr-3 -mx-[1px] text-gray-300">M</div>
        <CountdownItem value={timeLeft.seconds} />
        <div className="text-2xl mr-3 -mx-[1px] text-gray-300">S</div>
      </div>
    </div>
  );
};

const CountdownItem = ({ value, label }) => {
  return (
    <div className="countdown-item text-2xl">
      {value.split("").map((digit, index) => (
        <RollingNumber key={index} digit={digit} />
      ))}
    </div>
  );
};

const RollingNumber = ({ digit }) => {
  const [previousDigit, setPreviousDigit] = useState(digit);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (digit !== previousDigit) {
      setAnimate(true);
      setTimeout(() => {
        setPreviousDigit(digit);
        setAnimate(false);
      }, 500);
    }
  }, [digit, previousDigit]);

  return (
    <div className="digit-container">
      <span className={`digit ${animate ? "digit-exit" : ""}`}>
        {previousDigit}
      </span>
      {animate && <span className="digit digit-enter">{digit}</span>}
    </div>
  );
};

export default CountDown;
