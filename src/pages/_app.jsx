
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
export default function App({ Component, pageProps }) {

  return (
    <>

      <Component
      
        {...pageProps}
      />
 
    </>
  );
}
