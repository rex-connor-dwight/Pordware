type LogoProps = {
  color?: string;
  size?: number;
};

export default function Logo({ color = "#e8e8e6", size = 14 }: LogoProps) {
  return (
    <span
      style={{
        fontSize: `${size}px`,
        fontWeight: 600,
        letterSpacing: "0.06em",
        color,
      }}
    >
      PORDWARE
    </span>
  );
}