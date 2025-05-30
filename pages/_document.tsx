import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="shortcut icon"
          href="assets/favicon.ico"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="px-8 md:px-[12%] pt-5 min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
