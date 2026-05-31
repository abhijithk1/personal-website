export interface BlogPost {
  title: string;
  excerpt: string;
  tags: string[];
  publishDate: string;
  readUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Reflections on the Creative Process',
    excerpt:
      'Writing is rewriting. Here are some thoughts on embracing the messy, nonlinear journey of bringing a story to life — and what it teaches us about patience.',
    tags: ['Writing', 'Creativity'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807',
  },
  {
    title: 'Lessons from Learning Something New',
    excerpt:
      'Every time we start from scratch, we rediscover humility. A personal reflection on the parallels between picking up new skills and personal growth.',
    tags: ['Personal', 'Growth'],
    publishDate: '2024',
    readUrl: 'https://medium.com/@abhijith0807',
  },
];
