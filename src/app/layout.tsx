import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/satoshi/Satoshi-Black.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-BlackItalic.otf",
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
    <html className={`${satoshi.variable}`} lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}