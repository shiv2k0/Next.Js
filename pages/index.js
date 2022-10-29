import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      <br/>
      <Link href='/posts'>Posts</Link>
    </div>
  );
}
export default Home