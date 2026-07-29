"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
];

type HeaderProps = {
  variant?: "light" | "dark";
};

export default function Header({ variant = "light" }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDarkText = variant === "dark";

  const palette = {
    nav: isDarkText ? "#6b6f76" : "#9aa3b5",
    navActive: isDarkText ? "#14161a" : "#ffffff",
    logo: isDarkText ? "#14161a" : "#f4f4f2",
    pitchBg: isDarkText ? "#14161a" : "#ffffff",
    pitchText: isDarkText ? "#f7f5f1" : "#0b0d16",
    menuIcon: isDarkText ? "#14161a" : "#f4f4f2",
    menuBg: isDarkText ? "#ffffff" : "#0b0d16",
    menuBorder: isDarkText ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
  };

  return (
    <header style={styles.header}>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((v) => !v)}
        style={{ ...styles.menuButton, color: palette.menuIcon }}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              ...styles.navItem,
              color: pathname === item.href ? palette.navActive : palette.nav,
              fontWeight: pathname === item.href ? 600 : 400,
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href="/" className="mobile-logo" style={styles.logoLink}>
        <Logo color={palette.logo} size={15} />
      </Link>

      <div style={styles.right}>
        <Link
          href="/pitch"
          style={{ ...styles.pitchButton, backgroundColor: palette.pitchBg, color: palette.pitchText }}
        >
          Pitch to us ↗
        </Link>
      </div>

      {menuOpen && (
        <div
          style={{
            ...styles.mobileMenu,
            backgroundColor: palette.menuBg,
            borderColor: palette.menuBorder,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                ...styles.mobileItem,
                color: pathname === item.href ? palette.navActive : palette.nav,
                fontWeight: pathname === item.href ? 600 : 400,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

type Styles = { [key: string]: React.CSSProperties };

const styles: Styles = {
  header: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoLink: {
    textDecoration: "none",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },
  navItem: {
    fontSize: "13px",
    textDecoration: "none",
  },
  pitchButton: {
    fontSize: "13px",
    fontWeight: 600,
    padding: "8px 16px",
    borderRadius: "999px",
    textDecoration: "none",
  },
  menuButton: {
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    padding: "4px 6px",
  },
  mobileMenu: {
    position: "absolute",
    top: "calc(100% + 12px)",
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    border: "1px solid",
    borderRadius: "12px",
    padding: "20px",
    zIndex: 10,
  },
  mobileItem: {
    fontSize: "15px",
    textDecoration: "none",
  },
};