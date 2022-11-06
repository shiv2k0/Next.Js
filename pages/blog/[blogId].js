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

export async function getStaticPaths(){
    return{
        paths: [{params: {blogId: '1'}}],
        fallback: false,
    }
}

export async function getStaticProps(){
    return{
        props:{
            title: 'Article',
            description: 'Article Description'

        },
    }
}

// Error: Error for page /blog/[blogId]: pages with `getServerSideProps` can not be exported.

// Error: getStaticPaths is required for dynamic SSG pages and is missing for '/blog/[blogId]'.