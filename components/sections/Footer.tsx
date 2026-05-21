"use client";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Links", href: "#links" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "#0A0A0A",
        borderColor: "#1E1E1E",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        paddingLeft: "clamp(1.5rem, 5vw, 4rem)",
        paddingRight: "clamp(1.5rem, 5vw, 4rem)",
      }}
    >
      <div
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto", width: "100%" }}
      >
        <div className="flex flex-col gap-2">
          <p
            className="text-[11px] tracking-[0.5em] uppercase"
            style={{ color: "#C9A84C", fontFamily: "var(--font-inter), sans-serif" }}
          >
            SusumuMind
          </p>
          <p
            className="text-[9px] tracking-[0.25em]"
            style={{ color: "#333333", fontFamily: "var(--font-inter), sans-serif" }}
          >
            © 2026 SusumuMind. All rights reserved.
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[9px] tracking-[0.3em] uppercase transition-colors duration-300"
              style={{ color: "#333333", fontFamily: "var(--font-inter), sans-serif" }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#666666";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#333333";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
