'use client';

import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Download, Loader2 } from 'lucide-react';
import ResumeDocument from './ResumeDocument';
import { personalInfo } from '@/data/personal';

export default function ResumeDownloadButtonInner() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await pdf(<ResumeDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to generate resume PDF:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      id="resume-download-button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '16px 36px',
        background: loading
          ? 'var(--bg-elevated)'
          : 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
        color: '#fff',
        borderRadius: 'var(--radius-full)',
        fontSize: 'var(--text-base)',
        fontWeight: 600,
        letterSpacing: '0.01em',
        cursor: loading ? 'wait' : 'pointer',
        border: 'none',
        transition: 'transform var(--transition-fast), box-shadow var(--transition-base)',
        boxShadow: loading ? 'none' : '0 4px 24px rgba(var(--accent-rgb), 0.35)',
      }}
    >
      {loading ? (
        <>
          <Loader2 style={{ width: 18, height: 18, animation: 'spin 1s linear infinite' }} />
          Generating Resume…
        </>
      ) : (
        <>
          <Download style={{ width: 18, height: 18 }} />
          Download Resume (PDF)
        </>
      )}
    </button>
  );
}
