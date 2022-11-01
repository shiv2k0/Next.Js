
import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1>Welcome to HomePage</h1>
            <br/>
            <Link href='/news'>News</Link>
        </div>
    );
}

export default Home;