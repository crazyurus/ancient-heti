interface Article {
  title: string;
  author: {
    name: string;
    dynasty: string;
  };
  content: string;
  notes: string;
  reviews: string;
}

async function getRandomArticle(): Promise<Article> {
  await fetch('https://raw.githubusercontent.com/caoxingyu/chinese-gushiwen/master/guwen/guwen0-1000.json');
}

export default getRandomArticle;
