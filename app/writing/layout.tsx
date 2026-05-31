import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing | Abhijith K',
  description: 'Creative writing, stories, blog posts, and hobbies by Abhijith K — Writer & Storyteller.',
};

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
