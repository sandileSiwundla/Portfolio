'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Paper {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: number;
  isPinned?: boolean;
  mediumLink: string;
}

export default function ResearchPapersPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or saved preference
    const savedMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    } else {
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };

  const papers: Paper[] = [
    {
      id: 1,
      title: "Unlocking Value in Web3 Gaming",
      description: "The gaming world is entering an exciting new phase with the rise of Web3 technologies, especially through GameFi — a mix of online gaming and decentralised finance (DeFi). Picture yourself in a colourful world where blockchain and NFTs aren't just fancy words but tools for your adventure! This article will show how Web3 gaming is changing the scene, giving players true ownership of their digital items. Explore play-to-earn (P2E) games that reward your skills and creativity and take part in community-led decision-making that lets you help shape your gaming world.",
      date: "2024-11-24",
      readTime: 9,
      isPinned: true,
      mediumLink: "https://medium.com/@africablockchainclub/unlocking-value-in-web3-gaming-e92401d553ff"
    },
    {
      id: 2,
      title: "CEX or DEX? The FTX Collapse Disruption",
      description: "The shocking downfall of a crypto trading platform called FTX Trading Ltd, amidst allegations of insider trading and fraud, exposed the vulnerabilities such as lack of transparency, and misuse of customer funds in centralised exchanges (CEXs). This event has highlighted the importance of using blockchain technology to aid transparency and accountability, two key traits inherent to decentralised exchanges (DEXs).",
      date: "2024-08-01",
      readTime: 8,
      mediumLink: "https://medium.com/@africablockchainclub/cex-or-dex-the-ftx-collapse-disruption-f20a863f416a"
    },
    {
      id: 3,
      title: "Kaito AI: Turning Crypto Knowledge into Earnings",
      description: "Kaito AI, a Web3 intelligence platform, is transforming how we access and use crypto information by combining artificial intelligence and blockchain technology. Founded in 2022 by Yu Hu (ex-Citadel portfolio manager, now CEO) and Yunzhong He in Seattle, USA, the platform is built on Base. While it operates in a competitive space alongside platforms like CoinGecko, Coin Metrics, and Covalent, Kaito stands out by blending AI-driven search, real-time analytics, and tokenized incentives into a single, seamless ecosystem.",
      date: "2025-09-06",
      readTime: 9,
      mediumLink: "https://medium.com/@africablockchainclub/kaito-ai-turning-crypto-knowledge-into-earnings-493dc8cd1ba0"
    },
    {
      id: 4,
      title: "The Breach That Rocked the Crypto World: Bybit's $1.5 Billion Heist",
      description: "On February 21st, 2025, 14:13:35 UTC Bybit fell victim to a sophisticated cyberattack that resulted in the theft of over 400,000 ETH — valued at nearly $1.5 billion at the time -unraveling critical questions about security in the DeFi space.",
      date: "2025-04-24",
      readTime: 6,
      mediumLink: "https://medium.com/@africablockchainclub/the-breach-that-rocked-the-crypto-world-bybits-1-5-billion-heist-9a1b0d50ebd3"
    }
  ];

  // Function to limit description to 150 characters
  const truncateDescription = (description: string, maxLength: number = 150) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  const StatusBadge = ({ status, readTime }: { status: string; readTime: number }) => {
    const statusConfig = {
      Pinned: { color: '#10B981', background: 'rgba(16, 185, 129, 0.1)', label: 'Pinned' },
      Recent: { color: '#3B82F6', background: 'rgba(59, 130, 246, 0.1)', label: 'Recent' },
      Archive: { color: '#6B7280', background: 'rgba(107, 114, 128, 0.1)', label: 'Archive' }
    };

    const darkStatusConfig = {
      Pinned: { color: '#10B981', background: 'rgba(16, 185, 129, 0.2)', label: 'Pinned' },
      Recent: { color: '#60A5FA', background: 'rgba(96, 165, 250, 0.2)', label: 'Recent' },
      Archive: { color: '#9CA3AF', background: 'rgba(156, 163, 175, 0.2)', label: 'Archive' }
    };

    const config = isDarkMode 
      ? darkStatusConfig[status as keyof typeof darkStatusConfig] || darkStatusConfig.Recent
      : statusConfig[status as keyof typeof statusConfig] || statusConfig.Recent;

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{
          padding: '0.25rem 0.75rem',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: '600',
          backgroundColor: config.background,
          color: config.color,
          border: `1px solid ${config.color}40`
        }}>
          {config.label}
        </span>
        <span style={{
          color: isDarkMode ? '#9CA3AF' : '#6B7280',
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem'
        }}>
          ⏱️ {readTime} min read
        </span>
      </div>
    );
  };

  const getCategory = (paper: Paper) => {
    if (paper.isPinned) return 'Pinned';
    const paperDate = new Date(paper.date);
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    return paperDate > threeMonthsAgo ? 'Recent' : 'Archive';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEmoji = (title: string) => {
    if (title.includes('Web3') || title.includes('Gaming')) return '🎮';
    if (title.includes('CEX') || title.includes('DEX') || title.includes('FTX')) return '⚖️';
    if (title.includes('AI')) return '🤖';
    if (title.includes('breach') || title.includes('Heist') || title.includes('Bybit')) return '🔐';
    return '📄';
  };

  return (
    <div className={`projects-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Dark Mode Toggle */}
      <button 
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{
          position: 'fixed',
          top: '1.5rem',
          right: '1.5rem',
          background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)',
          border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)'}`,
          borderRadius: '20px',
          padding: '0.5rem 1rem',
          fontSize: '0.9rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
          color: isDarkMode ? '#e2e8f0' : '#4f46e5'
        }}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Navigation */}
      <nav style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link href="/" style={{
          color: isDarkMode ? '#818cf8' : '#667eea',
          textDecoration: 'none',
          fontWeight: '600',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s ease'
        }}>
          ← Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem 4rem'
      }}>
        {/* Header */}
        <header style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            background: isDarkMode 
              ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)'
              : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
            margin: '0'
          }}>
            Research Papers
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: isDarkMode ? '#cbd5e1' : '#4a5568',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Analysis in Web3, DeFi, and blockchain security
          </p>
        </header>

        {/* Papers Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {papers.map((paper, index) => (
            <div key={index} style={{
              background: isDarkMode ? 'rgba(30, 41, 59, 0.5)' : 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
              border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              backdropFilter: isDarkMode ? 'blur(10px)' : 'none'
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(129, 140, 248, 0.2)'
                : '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(102, 126, 234, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)';
            }}
            onClick={() => window.open(paper.mediumLink, '_blank')}
            >
              {/* Paper Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{getEmoji(paper.title)}</span>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: isDarkMode ? '#f1f5f9' : '#2d3748',
                    margin: '0'
                  }}>
                    {paper.title}
                  </h3>
                </div>
              </div>
              
              {/* Status and Date */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <StatusBadge status={getCategory(paper)} readTime={paper.readTime} />
                <span style={{
                  color: isDarkMode ? '#9CA3AF' : '#6B7280',
                  fontSize: '0.9rem'
                }}>
                  📅 {formatDate(paper.date)}
                </span>
              </div>
              
              {/* Description */}
              <p style={{
                color: isDarkMode ? '#cbd5e1' : '#4a5568',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                height: '4.8em',
                overflow: 'hidden'
              }}>
                {truncateDescription(paper.description, 150)}
              </p>
              
              {/* Action */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <button style={{
                  background: 'transparent',
                  color: isDarkMode ? '#818cf8' : '#667eea',
                  border: `1px solid ${isDarkMode ? '#818cf8' : '#667eea'}`,
                  padding: '0.5rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(paper.mediumLink, '_blank');
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isDarkMode ? '#818cf8' : '#667eea';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.gap = '0.75rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = isDarkMode ? '#818cf8' : '#667eea';
                  e.currentTarget.style.gap = '0.5rem';
                }}
                >
                  Read  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-page {
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          transition: all 0.3s ease;
        }

        .projects-page.light {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
          color: #1e293b;
        }

        .projects-page.dark {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: #f1f5f9;
        }

        .dark-mode-toggle:hover {
          transform: translateY(-1px);
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'};
        }

        @media (max-width: 768px) {
          .projects-page {
            padding: 1rem;
          }

          h1 {
            font-size: 2.5rem !important;
          }

          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .project-card {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem !important;
          }

          .dark-mode-toggle {
            top: 1rem;
            right: 1rem;
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}