import type { Metadata } from "next";
import { pageMetadata } from "@/config/metadata";
import HomeView from "./features/home/HomeView";

export const metadata: Metadata = pageMetadata.home;

const Home = () => {
  return <HomeView />;
};

export default Home;
