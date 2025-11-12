import type React from "react";
import type { ReactNode } from "react";

interface SplitScreenPROPS {
  children: [ReactNode, ReactNode];
  leftWeight: number;
  rightWeight: number;
}

const SplitScreen: React.FC<SplitScreenPROPS> = ({
  children,
  leftWeight,
  rightWeight,
}) => {
  const [left, right] = children;
  const leftWidth = `${leftWeight}rem`;
  const rightWidth = `${rightWeight}rem`;
  return (
    <section className="flex w-screen">
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }}>{right}</div>
    </section>
  );
};

export default SplitScreen;
