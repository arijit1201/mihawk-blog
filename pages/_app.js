import Navbar from "../components/Navbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='navbarContainer'>
        <Navbar />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
