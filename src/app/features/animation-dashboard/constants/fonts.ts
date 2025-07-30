export const availableFonts = [
  { name: "satoshi", url: "/fonts/Satoshi.ttf" },
  { name: "bebas neue", url: "/fonts/Bebas_Neue.ttf" },
  { name: "comfortaa", url: "/fonts/Comfortaa.ttf" },
  { name: "crimson text", url: "/fonts/Crimson_Text.ttf" },
  { name: "inter", url: "/fonts/Inter.ttf" },
  { name: "jost", url: "/fonts/Jost.ttf" },
  { name: "libre baskerville", url: "/fonts/Libre_Baskerville.ttf" },
  { name: "lilita one", url: "/fonts/Lilita_One.ttf" },
  { name: "merriweather", url: "/fonts/Merriweather.ttf" },
  { name: "montserrat", url: "/fonts/Montserrat.ttf" },
  { name: "open sans", url: "/fonts/Open_Sans.ttf" },
  { name: "oxygen", url: "/fonts/Oxygen.ttf" },
  { name: "pacifico", url: "/fonts/Pacifico.ttf" },
  { name: "playfair display", url: "/fonts/Playfair_Display.ttf" },
  { name: "poppins", url: "/fonts/Poppins.ttf" },
  { name: "roboto mono", url: "/fonts/Roboto_Mono.ttf" },
  { name: "roboto", url: "/fonts/Roboto.ttf" },
  { name: "space grotesk", url: "/fonts/Space_Grotesk.ttf" },
] as const;

export type FontType = (typeof availableFonts)[number];
