import React from "react";

interface SkeletonProps {
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  height = "20px",
  width = "100%",
  borderRadius = "",
  className = "",
}) => {
  // normalize numeric values into px
  const heightValue = typeof height === "number" ? `${height}px` : height;
  const widthValue = typeof width === "number" ? `${width}px` : width;

  const roundedClass =
    borderRadius
      ? borderRadius
      : heightValue === "44px"
      ? "rounded-full"
      : heightValue === "48px"
      ? "rounded-md"
      : ["200px", "300px", "350px"].includes(heightValue)
      ? "rounded-lg"
      : "rounded";

  return (
    <div
      className={`
        mx-auto mb-3
        bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300
        bg-400
        animate-skeleton-loading
        ${roundedClass}
        ${className}
      `}
      style={{ height: heightValue, width: widthValue }}
    />
  );
};

export default Skeleton;
