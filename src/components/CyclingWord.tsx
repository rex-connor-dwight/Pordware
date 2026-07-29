"use client";

import { useEffect, useState } from "react";

const words = ["accelerate ", "invest", "scale"];

type CyclingWordProps = {
  color?: string;
  underlineColor?: string;
};

export default function CyclingWord({
  color = "#ffffff",
  underlineColor = "#5b8cff",
}: CyclingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ display: "inline-block" }}>
      <span
        style={{
          display: "inline-block",
          color,
          borderBottom: `3px solid ${underlineColor}`,
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}