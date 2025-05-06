import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [time, setTime] = useState(60);
  const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   let intervalId: number | undefined;

  //   if (isActive && time > 0) {
  //     intervalId = window.setInterval(() => {
  //       setTime((prevTime) => prevTime - 1);
  //     }, 1000);
  //   } else if (time === 0) {
  //     setIsActive(false);
  //   }

  //   return () => {
  //     if (intervalId) clearInterval(intervalId);
  //   };
  // }, [isActive, time]);

  // const handleStart = () => {
  //   setIsActive(true);
  // };

  // const handleStop = () => {
  //   setIsActive(false);
  // };

  // const handleReset = () => {
  //   setIsActive(false);
  //   setTime(60);
  // };

  // // 格式化时间为 mm:ss
  // const formatTime = () => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = time % 60;
  //   return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  // };

  const [timer, setTimer] = useState(60);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    if (active && timer > 0) {
      intervalId = window.setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timer === 0) {
      setActive(false);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [active, timer]);
  const handleStart = () => {
    setActive(true);
  };
  const handleStop = () => {
    setActive(false);
  };
  const handleReset = () => {
    setActive(false);

    setTimer(60);
  };
  // 格式化时间为 mm:ss
  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };


  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Countdown Timer</h2>
      <div className="text-4xl font-bold mb-4">{formatTime()}</div>
      <div className="flex gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={handleStart}
          disabled={isActive}
        >
          Start
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={handleStop}
          disabled={!isActive}
        >
          Stop
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
