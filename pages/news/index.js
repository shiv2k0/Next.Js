function NewsArticleList({articles}) {
  return (
    <div>
      <h1>List of new Articles</h1>
      <div>
        {
            articles.map(article=>{
                return (
                    <div key={article.id}>
                        <h2> {article.id} {article.title} {article.category}</h2>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
}

export default NewsArticleList;

export async function getServerSideProps(){
    const response = await fetch("http://localhost:4000/news")
    const data = await response.json()
    return {
        props:{
            articles:data,
        },
    }
}