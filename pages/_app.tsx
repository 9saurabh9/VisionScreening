import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { BoxSizeProvider } from '../context/BoxSizeContext';
import { TestProvider } from "@/context/TestContext";
import { TestSelectionContextProvider } from "@/context/TestSelectionContext";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <TestProvider>
        <BoxSizeProvider>
          <TestSelectionContextProvider>
            <Head>
              <link rel="icon" href="/deareyes_logo_white.png" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Component {...pageProps} />
          </TestSelectionContextProvider>
        </BoxSizeProvider>
      </TestProvider>
  );
};
