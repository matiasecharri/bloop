const baseMetadata = {
  title: "Bloop | Your Animation Resource",
  description:
    "Discover and create stunning animations with Bloop. Explore tutorials, tools, and resources for animators of all levels.",
  keywords:
    "animations, animation library, animation tutorials, motion design, animated effects, animation tools, creative animations",
  openGraph: {
    type: "website",
    url: "https://libraryanimations.com",
    image: "https://libraryanimations.com/images/og-image.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Bloop - Your Animation Resource",
    description:
      "Bloop offers comprehensive tutorials, tools, and inspiration to help you master the art of animation.",
    siteName: "Bloop",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloop | Your Animation Resource",
    description:
      "Discover and create stunning animations with Bloop. Explore tutorials, tools, and resources for animators of all levels.",
    images: ["https://libraryanimations.com/images/og-image.jpg"],
    site: "@libraryanimations",
    creator: "@libraryanimations",
  },

  icons: {
    shortcut: "/favicon.png",
  },
  robots: "index,follow",
  canonical: "https://libraryanimations.com",
};

export const pageMetadata = {
  home: {
    ...baseMetadata,
    title: "Home | Bloop",
    description:
      "Your go-to place for animation tutorials, libraries, and resources to bring your ideas to life.",
  },
  about: {
    ...baseMetadata,
    title: "About Us | Bloop",
    description:
      "Learn about our mission to empower creators with high-quality animation tools and tutorials.",
  },
};
