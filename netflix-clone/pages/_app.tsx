import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </SessionProvider>
  );
}
