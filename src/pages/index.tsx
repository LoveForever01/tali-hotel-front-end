import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarHeader from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <NavbarHeader />;
}
