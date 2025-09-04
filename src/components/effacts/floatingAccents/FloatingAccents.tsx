import React from "react";
import "./FloatingAccents.css";

type AccentConfig = {
  id: number;
  transform: string;
  sizeClass: string;
};

const accents: AccentConfig[] = [
  {
    id: 1,
    transform: "translate(-40px, -40px) rotate(-11deg)",
    sizeClass: "size--sm",
  },
  {
    id: 2,
    transform: "translate(-100px, -150px) rotate(-6deg)",
    sizeClass: "size--md",
  },
  {
    id: 3,
    transform: "translate(300px, -55px) rotate(11deg)",
    sizeClass: "size--xs",
  },
  {
    id: 4,
    transform: "translate(-298px, -13px) rotate(8deg)",
    sizeClass: "size--lg",
  },
  {
    id: 5,
    transform: "translate(246px, 88px) rotate(-16deg)",
    sizeClass: "size--xl",
  },
  {
    id: 6,
    transform: "translate(-8px, 97px) rotate(-10deg)",
    sizeClass: "size--md",
  },
  {
    id: 7,
    transform: "translate(49px, -125px) rotate(-3deg)",
    sizeClass: "size--sm",
  },
];

export const FloatingAccents = () => {
  return (
    <>
      {accents.map(({ id, transform, sizeClass }) => (
        <div
          key={id}
          className={`floating-accent ${sizeClass}`}
          style={{ transform }}
        >
          <div className="floating-accent__inner" />
        </div>
      ))}
    </>
  );
};

export default FloatingAccents;
