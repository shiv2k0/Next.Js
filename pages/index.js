import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Welcome to HomePage</h1>
      <Link href='/about'>About</Link>
    </>
  );
}

export default Home;
