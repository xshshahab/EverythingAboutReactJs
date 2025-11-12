import React, { type ReactNode } from "react";

interface SplitScreenProps {
  children: [ReactNode, ReactNode];
  leftWeight?: number;
  rightWeight?: number;
}

const SplitScreen: React.FC<SplitScreenProps> = ({
  children,
  leftWeight = 1,
  rightWeight = 1,
}) => {
  const [left, right] = children;

  return (
    <section className="flex flex-1 overflow-hidden">
      <div className="p-4 h-full overflow-y-auto" style={{ flex: leftWeight }}>
        {left}
      </div>
      <div
        className="p-4 h-full flex-1 overflow-y-auto"
        style={{ flex: rightWeight }}
      >
        {right}
      </div>
    </section>
  );
};

export default SplitScreen;
