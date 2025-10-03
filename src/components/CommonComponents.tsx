"use client";

import React, {
  useContext,
  ButtonHTMLAttributes,
  VideoHTMLAttributes,
} from "react";
import { LoadingContext } from "../utils/LoadingContext";
import Skeleton from "./skeleton";
import Image, { ImageProps } from "next/image";

// TYPES
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number | string;
  height?: number | string;
}

interface CustomImageProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height"> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

interface CustomVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

interface ParagraphProps {
  children: React.ReactNode;
  lines?: number;
}

// DEFAULT EXPORT (MAIN COMPONENT)
export default function CustomButton({
  children,
  width = 160,
  height = 44,
  ...props
}: CustomButtonProps) {
  const { loading } = useContext(LoadingContext);

  if (loading) {
    return (
      <div style={{ margin: "8px 0" }}>
        <Skeleton height={height} width={width} />
      </div>
    );
  }

  return (
    <button {...props} style={{ width, height }}>
      {children}
    </button>
  );
}

// NAMED EXPORT: CustomImage
export function CustomImage({
  src,
  alt,
  width = 300,
  height = 200,
  className,
  ...rest
}: CustomImageProps) {
  const { loading } = useContext(LoadingContext);

  if (loading) {
    return (
      <div style={{ margin: "8px 0" }}>
        <Skeleton
          height={height}
          width={width}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={typeof width === "number" ? width : parseInt(width)}
      height={typeof height === "number" ? height : parseInt(height)}
      className={className}
      {...rest}
    />
  );
}

// NAMED EXPORT: CustomVideo
export function CustomVideo({
  width = "100%",
  height = 300,
  className,
  ...props
}: CustomVideoProps) {
  const { loading } = useContext(LoadingContext);

  if (loading) {
    return (
      <div style={{ margin: "8px 0" }}>
        <Skeleton height={height} width={width} />
      </div>
    );
  }

  return <video {...props} className={className} style={{ width, height }} />;
}

// NAMED EXPORT: Paragraph
export function Paragraph({ children, lines = 3 }: ParagraphProps) {
  const { loading } = useContext(LoadingContext);

  if (loading) {
    return (
      <div>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} style={{ marginBottom: "8px" }}>
            <Skeleton
              height="20px"
              width={`${90 - i * 10}%`}
            />
          </div>
        ))}
      </div>
    );
  }

  return <p>{children}</p>;
}
