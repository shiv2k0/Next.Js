import Footer from "../components/layout/Footer"
import Head from 'next/head'


function About(){
    return(
        <>
            <Head>
                <title>About CodeWithMe</title>
                <meta name='description' content='Free tutorials on Web development' />
                {/* Adding title & meta in a page will set it for this particular page only */}
            </Head>
            <h1 className="container">About Page</h1>
        </>
    )
}

export default About

About.getLayout = function PageLayout(page){
    return(
        <>
            {page}
            <Footer/>
        </>
    )
}