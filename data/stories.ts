export interface Story {
  title: string;
  genre: string;
  excerpt: string;
  readUrl?: string;
  platform?: string;
  penName?: string;
  isNovel?: boolean;
  isWip?: boolean;
  wipStatus?: string;
}

export const stories: Story[] = [
  {
    title: 'Quantum Reckoning',
    genre: 'Science Fiction',
    excerpt:
      "A quantum physicist is hurled into a mutation-ravaged future by his own failed experiment. Hunted as the man who caused the apocalypse and hunted for the cure he might carry in his blood, he has to survive long enough to find the truth — and a way to undo what he's done.",
    isNovel: true,
    isWip: true,
    wipStatus: 'Draft 2 — In Progress',
  },
  {
    title: 'The Girl Behind the Shadow',
    genre: 'Romance / Literary Fiction',
    excerpt:
      'In a park filled with flickering streetlights and moving shadows, Aravind encounters a voice and a shadow that capture his heart. But before he can meet the girl behind the shadow, she vanishes. Drawn by an inexplicable longing, he embarks on an emotional journey that blends fleeting encounters, quiet introspection, and the ache of a connection almost made.',
    readUrl: 'https://www.wattpad.com/story/380238428-the-girl-behind-the-shadow',
    platform: 'Wattpad',
    penName: 'Aaron Kbot',
  },
  {
    title: 'The Man Who Saved The World',
    genre: 'Comedy / Meta-Fiction',
    excerpt:
      'Deepak\'s mundane life takes an unexpected turn when he meets a mysterious cat named "World" and the captivating Divya on his way to work. In this lighthearted, meta-fictional tale, Deepak breaks the fourth wall, converses with the narrator, and discovers that saving the world might not be what he expected — but it could be exactly what he needs.',
    readUrl: 'https://www.wattpad.com/story/375095281-the-man-who-saved-the-world',
    platform: 'Wattpad',
    penName: 'Aaron Kbot',
  },
  {
    title: 'Unspoken Voices: The Journey Beyond Words',
    genre: 'Social Drama / Coming of Age',
    excerpt:
      'In the quiet outskirts of an Indian town, 15-year-old Shabda finds solace in her drawings — a silent world where her creativity knows no bounds. Born deaf and mute, she has always let her art speak for her. But when a brutal attack on her father shatters her world, she meets Parthiban, an elderly man who teaches her that communication transcends words, and that her art holds the power to change everything.',
    readUrl: 'https://www.wattpad.com/story/375104339-unspoken-voices-the-journey-beyond-words',
    platform: 'Wattpad',
    penName: 'Aaron Kbot',
  },
];

