import "../styles/globals.css";
import Head from 'next/head'
// import Header from "components/layout/Header";
// import Footer from "components/layout/Footer";
//  {we can use this formate with baseUrl}

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
// {we can use this formate with path}
import 'styles/layout.css'
import 'styles/container.css'

function MyApp({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Head>
        <title>CodeWithMe</title> 
        <meta name='description' content={` Coming soon`} />
        {/* adding title and meta in _app.js will it for all the pages available unless specially added in any page */}
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
