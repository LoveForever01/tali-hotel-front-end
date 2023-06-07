import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarHeader from "./header/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <NavbarHeader />;
}
