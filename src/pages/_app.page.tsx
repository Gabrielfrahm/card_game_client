import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import AudioPlayer from "./audioPlayer";
import { ToastContainer } from "react-toastify";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <AudioPlayer />
      <ToastContainer />
    </>
  );
}
