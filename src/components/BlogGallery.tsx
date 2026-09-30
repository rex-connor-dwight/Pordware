"use client";

import { useState } from "react";
import Image from "next/image";

type BlogGalleryProps = {
  images: string[];
  alt: string;
};

export default function BlogGallery({ images, alt }: BlogGalleryProps) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div style={styles.wrapper}>
      <div style={styles.imageBox}>
        <Image
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          fill
          style={styles.image}
        />

        {images.length > 1 && (
          <>
            <button onClick={prev} style={{ ...styles.arrow, left: "12px" }} aria-label="Previous image">
              ←
            </button>
            <button onClick={next} style={{ ...styles.arrow, right: "12px" }} aria-label="Next image">
              →
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div style={styles.dots}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              style={{ ...styles.dot, ...(i === index ? styles.dotActive : {}) }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

type Styles = { [key: string]: React.CSSProperties };

const styles: Styles = {
  wrapper: {
    margin: "32px 0",
  },
  imageBox: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 10",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#f0f0ee",
  },
  image: {
    objectFit: "cover",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
  },
  dots: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginTop: "14px",
  },
  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#d8d8d4",
    cursor: "pointer",
    padding: 0,
  },
  dotActive: {
    backgroundColor: "#5b8cff",
  },
};