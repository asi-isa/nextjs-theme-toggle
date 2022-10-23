import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import setInitialColorTheme from "../theme";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script id="initial-color-theme" strategy="beforeInteractive">
          {setInitialColorTheme}
        </Script>
      </body>
    </Html>
  );
}
