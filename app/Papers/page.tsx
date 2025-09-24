'use client';

import React from 'react';

interface Paper {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: number;
  isPinned?: boolean;
}

const ResearchPaper: React.FC = () => {
  const papers: Paper[] = [
    {
      id: 1,
      title: "Unlocking Value in Web3 Gaming",
      description: "Overview of Web3 Gaming and value creation mechanisms",
      date: "2024-11-24",
      readTime: 13,
      isPinned: true
    },
    {
      id: 2,
      title: "CEX or DEX? The FTX collapse disruption!",
      description: "Introduction to centralized vs decentralized exchange dynamics",
      date: "2024-08-01",
      readTime: 3
    },
    {
      id: 3,
      title: "Kaito AI: Turning Crypto Knowledge into Earnings",
      description: "Backed by Industry Leaders - AI in cryptocurrency",
      date: "2024-09-06",
      readTime: 5
    },
    {
      id: 4,
      title: "The breach that rocked the crypto world: Bybit's $1.5 Billion Heist",
      description: "Analysis of the sophisticated cyberattack on Bybit exchange",
      date: "2025-04-24",
      readTime: 7
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getEmoji = (title: string) => {
    if (title.includes('Web3')) return '🎮';
    if (title.includes('CEX') || title.includes('DEX')) return '⚖️';
    if (title.includes('AI')) return '🤖';
    if (title.includes('breach') || title.includes('Heist')) return '🔐';
    return '📄';
  };

  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.5rem'
        }}>
          📚 Research Papers
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          Cutting-edge analysis in Web3, DeFi, and blockchain security
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {papers.map((paper) => (
          <div key={paper.id} style={{
            background: 'white',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: '1px solid #e1e5e9',
            borderLeft: paper.isPinned ? '4px solid #ff6b6b' : '1px solid #e1e5e9',
            transition: 'all 0.2s ease',
            position: 'relative'
          }}>
            {paper.isPinned && (
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '1rem',
                background: '#ff6b6b',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '12px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                📌 Pinned
              </div>
            )}

            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              {getEmoji(paper.title)}
            </div>

            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '700', 
              marginBottom: '0.75rem',
              color: '#2d3748'
            }}>
              {paper.title}
            </h3>

            <p style={{ 
              color: '#718096', 
              lineHeight: '1.6', 
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}>
              {paper.description}
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.85rem',
              color: '#a0aec0',
              marginBottom: '1.5rem'
            }}>
              <span>📅 {formatDate(paper.date)}</span>
              <span>⏱️ {paper.readTime} min read</span>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Read Paper
              </button>
              <button style={{
                background: 'none',
                border: 'none',
                fontSize: '1.25rem',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '6px'
              }}>
                🔖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPaper;