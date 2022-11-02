import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1>Welcome to HomePage</h1>
            <p>
            <Link href='/comments'>Go To Comment Page</Link>
            </p>
        </div>
    );
}

export default Home;