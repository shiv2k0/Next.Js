import Head from 'next/head'

function Blog({title,description}){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                {/* Head Component can be used with Dynamic pages also */}
            </Head>
        </>
    )
}

export default Blog

export async function getServerSideProps(){
    return{
        props:{
            title: 'Article',
            description: 'Article Description'

        },
    }
}