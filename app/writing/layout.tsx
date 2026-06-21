import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing',
  description:
    'Creative writing, stories, blog posts, and hobbies by Abhijith K — Writer & Storyteller. Explore fiction, novels, technical articles, and personal essays.',
  alternates: {
    canonical: 'https://abhijithk.dev/writing',
  },
};

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
