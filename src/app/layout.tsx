import localFont from "next/font/local";
import "./globals.css";

const syne = localFont({
  src: [
    {
      path: "./fonts/syne/Syne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/syne/Syne-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/syne/Syne-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/syne/Syne-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/syne/Syne-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-primary",
  display: "swap",
});

const degularMono = localFont({
  src: [
    {
      path: "./fonts/degularmono/DegularMono-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/degularmono/DegularMono-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/degularmono/DegularMono-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/degularmono/DegularMono-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/degularmono/DegularMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/degularmono/DegularMono-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/degularmono/DegularMono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/degularmono/DegularMono-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/degularmono/DegularMono-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/degularmono/DegularMono-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/degularmono/DegularMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/degularmono/DegularMono-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/degularmono/DegularMono-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/degularmono/DegularMono-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-secondary",
  display: "swap",
});

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${degularMono.variable}`}>
      <body>
          {children}
      </body>
    </html>
  );
}