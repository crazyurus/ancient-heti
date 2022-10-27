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
  const random = getRandom(1000);
  const response = await fetch('https://raw.githubusercontent.com/crazyurus/ancient-heti/main/data/0.json');
  const articles = await response.json();

  return articles[random];
}
