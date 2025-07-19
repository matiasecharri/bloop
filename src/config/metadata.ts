const baseMetadata = {
  title: "Library Animations | Your Animation Resource",
  description:
    "Discover and create stunning animations with Library Animations. Explore tutorials, tools, and resources for animators of all levels.",
  keywords:
    "animations, animation library, animation tutorials, motion design, animated effects, animation tools, creative animations",
  openGraph: {
    type: "website",
    url: "https://libraryanimations.com",
    image: "https://libraryanimations.com/images/og-image.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Library Animations - Your Animation Resource",
    description:
      "Library Animations offers comprehensive tutorials, tools, and inspiration to help you master the art of animation.",
    siteName: "Library Animations",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Library Animations | Your Animation Resource",
    description:
      "Discover and create stunning animations with Library Animations. Explore tutorials, tools, and resources for animators of all levels.",
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
    title: "Home | Library Animations",
    description:
      "Your go-to place for animation tutorials, libraries, and resources to bring your ideas to life.",
  },
  about: {
    ...baseMetadata,
    title: "About Us | Library Animations",
    description:
      "Learn about our mission to empower creators with high-quality animation tools and tutorials.",
  },
};
