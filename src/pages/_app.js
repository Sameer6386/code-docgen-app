// pages/_app.js
import "../styles/globals.css"; // Ensure global styles are imported

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
