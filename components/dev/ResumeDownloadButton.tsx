'use client';

import dynamic from 'next/dynamic';

const ResumeDownloadButton = dynamic(
  () => import('./ResumeDownloadButtonInner'),
  {
    ssr: false,
    loading: () => (
      <button
        disabled
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '16px 36px',
          background: 'var(--bg-elevated)',
          color: 'var(--text-secondary)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--text-base)',
          fontWeight: 600,
          border: '1px solid var(--border)',
          cursor: 'wait',
        }}
      >
        Loading Resume Generator…
      </button>
    ),
  }
);

export default ResumeDownloadButton;
