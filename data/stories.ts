export interface Story {
  title: string;
  genre: string;
  excerpt: string;
  readUrl?: string;
  isNovel?: boolean;
  isWip?: boolean;
  wipStatus?: string;
}

export const stories: Story[] = [
  {
    title: 'The Unnamed Novel',
    genre: 'Fiction',
    excerpt:
      'A story that explores the intricate web of human connections, choices, and the echoes they leave behind. Set across timelines, it follows characters whose paths intertwine in unexpected ways.',
    isNovel: true,
    isWip: true,
    wipStatus: 'Draft 2 — In Progress',
  },
  {
    title: 'Short Story Collection',
    genre: 'Short Fiction',
    excerpt:
      'A collection of short stories exploring everyday moments, quiet revelations, and the stories we tell ourselves to make sense of the world.',
    readUrl: 'https://medium.com/@abhijith0807',
  },
];
