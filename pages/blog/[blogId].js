import Head from 'next/head'

function Blog({title,description}){
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}/>
                
            </Head>
            <h1 className='content'> Env User {process.env.DB_USER} Password {process.env.DB_PASSWORD} 
            {/* This is provided in Next.js to prevent accidental exposure of User Data */}

            Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
            </h1>
        </>
    )
}

export default Blog

// export async function getStaticPaths(){
//     return{
//         paths: [{params: {blogId: '1'}}],
//         fallback: false,
//     }
// }

export async function getServerSideProps(){
    const user= process.env.DB_USER
    const password= process.env.DB_PASSWORD

    console.log(`Connecting to database with username ${user} and password ${password}`)

    return{
        props:{
            title: 'Article',
            description: 'Article Description'

        },
    }
}

// Error: Error for page /blog/[blogId]: pages with `getServerSideProps` can not be exported.

// Error: getStaticPaths is required for dynamic SSG pages and is missing for '/blog/[blogId]'.