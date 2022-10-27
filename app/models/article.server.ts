import { getRandom } from '../utils/math';

export interface Article {
  title: string;
  type: 'ancient' | 'poetry';
  author: {
    name: string;
    dynasty: string;
  };
  foreword?: string;
  content: string;
}

export async function getRandomArticle(): Promise<Article> {
  const fileID = getRandom(20);
  const articleID = getRandom(50);
  const response = await fetch(`https://raw.githubusercontent.com/crazyurus/ancient-heti/main/data/${fileID}.json`);
  const articles = await response.json();

  return articles[articleID];
}
