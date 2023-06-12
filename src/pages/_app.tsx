import "@/styles/globals.css";
import "@/styles/navbar-style.css";
import "@/styles/login.css";
import "@/styles/top-up.css";
import type { AppProps } from "next/app";
import Toast from "../component/toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toast />
    </>
  );
}
