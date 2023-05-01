import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import AudioPlayer from "./audioPlayer";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/context/authContext";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
        <AudioPlayer />
        <ToastContainer />
      </AuthProvider>
    </>
  );
}
