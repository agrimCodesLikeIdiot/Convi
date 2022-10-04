import "../styles/globals.css";
import NextNProgressbar from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgressbar color="white"/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
