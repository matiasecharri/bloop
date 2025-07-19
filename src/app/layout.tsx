import localFont from "next/font/local";
import "./globals.css";

const helveticaNeue = localFont({
  src: [
    {
      path: "./fonts/helveticaneue/HelveticaNeueThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueHeavy.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueHeavyItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueBlack.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/helveticaneue/HelveticaNeueBlackItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-primary",
  display: "swap",
});

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${helveticaNeue.variable}`}>
      <body>
          {children}
      </body>
    </html>
  );
}