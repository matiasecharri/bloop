"use client"; // Esto es importante para usar useState y efectos en Next.js app router

import { useState, useEffect } from "react";
// import type { Metadata } from "next";
// import { pageMetadata } from "@/config/metadata";
import HomeView from "./features/home/HomeView";

// export const metadata: Metadata = pageMetadata.home;

const Home = () => {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null); // null = no validado aún

  useEffect(() => {
    const password = prompt("Enter the trial password:");

    if (password === "bl00000p") {
      setHasAccess(true);
    } else {
      setHasAccess(false);
    }
  }, []);

  if (hasAccess === null) {
    return null;
  }

  if (!hasAccess) {
    return <div>Invalid password</div>;
  }

  return <HomeView />;
};

export default Home;
