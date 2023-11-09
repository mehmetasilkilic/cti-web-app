import React from "react";
import { Icon as IconX } from "@iconify/react";

type IconType = {
  icon: string;
  className?: string;
  width?: string;
  rotate?: number;
  hFlip?: boolean;
  vFlip?: boolean;
};

export const Icon = ({
  icon,
  className,
  width,
  rotate,
  hFlip,
  vFlip,
}: IconType) => {
  return (
    <>
      <IconX
        width={width}
        rotate={rotate}
        hFlip={hFlip}
        icon={icon}
        className={className}
        vFlip={vFlip}
      />
    </>
  );
};
