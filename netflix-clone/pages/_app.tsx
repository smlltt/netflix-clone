import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          style: {
            //   zinc-800
            background: "#1e293b",
            color: "white",
          },
        }}
      />
    </SessionProvider>
  );
}
