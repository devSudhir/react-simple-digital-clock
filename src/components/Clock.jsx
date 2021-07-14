import { useState } from "react";

export function Clock({ show }) {
  console.log("clock", show);
  const [currentTime, setCurrentTime] = useState("");

  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };
  const id = setInterval(updateTime, 1000);
  if (!show) {
    clearInterval(id);
  }

  return show ? (
    <>
      <h3>{currentTime}</h3>
    </>
  ) : (
    ""
  );
}
