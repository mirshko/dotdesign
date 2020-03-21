import * as Fathom from "fathom-client";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import Nav from "../components/nav";
import { SITE_ID } from "../lib/fathom";
import "../styles/reset.css";

Router.events.on("routeChangeComplete", () => Fathom.trackPageview());

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Fathom.load();
    Fathom.setSiteId(SITE_ID);
    Fathom.trackPageview();
  }, []);

  return (
    <div className="site">
      <Head>
        <link
          rel="preload"
          href="/Parabole-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <meta name="author" content="@mirshko" />
        <meta
          name="description"
          content="Freelance Design Engineer based in Berlin. Team @ Coal, and Union"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reiner.design" />
        <meta
          property="og:description"
          content="Freelance Design Engineer based in Berlin. Team @ Coal, and Union"
        />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://reiner.design" />
        <meta
          property="twitter:description"
          content="Freelance Design Engineer based in Berlin. Team @ Coal, and Union"
        />
      </Head>

      <header>
        <Nav />
      </header>

      <div className="content">
        <Component {...pageProps} />
      </div>

      <footer className="mt-lg">
        <p>© 2020</p>
      </footer>

      <style jsx>{`
        .site {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }

        .content {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
