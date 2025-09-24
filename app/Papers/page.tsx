'use client';

import Link from 'next/link';

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
  const papers: Paper[] = [
    {
      id: 1,
      title: "Unlocking Value in Web3 Gaming",
      description: "The gaming world is entering an exciting new phase with the rise of Web3 technologies, especially through GameFi — a mix of online gaming and decentralised finance (DeFi). Picture yourself in a colourful world where blockchain and NFTs aren't just fancy words but tools for your adventure! This article will show how Web3 gaming is changing the scene, giving players true ownership of their digital items. Explore play-to-earn (P2E) games that reward your skills and creativity and take part in community-led decision-making that lets you help shape your gaming world.",
      date: "2024-11-24",
      readTime: 9,
      isPinned: true,
      mediumLink: "https://medium.com/@yourusername/unlocking-value-in-web3-gaming"
    },
    {
      id: 2,
      title: "CEX or DEX? The FTX Collapse Disruption",
      description: "The shocking downfall of a crypto trading platform called FTX Trading Ltd, amidst allegations of insider trading and fraud, exposed the vulnerabilities such as lack of transparency, and misuse of customer funds in centralised exchanges (CEXs). This event has highlighted the importance of using blockchain technology to aid transparency and accountability, two key traits inherent to decentralised exchanges (DEXs).",
      date: "2024-08-01",
      readTime: 8,
      mediumLink: "https://medium.com/@yourusername/cex-or-dex-the-ftx-collapse-disruption"
    },
    {
      id: 3,
      title: "Kaito AI: Turning Crypto Knowledge into Earnings",
      description: "Kaito AI, a Web3 intelligence platform, is transforming how we access and use crypto information by combining artificial intelligence and blockchain technology. Founded in 2022 by Yu Hu (ex-Citadel portfolio manager, now CEO) and Yunzhong He in Seattle, USA, the platform is built on Base. While it operates in a competitive space alongside platforms like CoinGecko, Coin Metrics, and Covalent, Kaito stands out by blending AI-driven search, real-time analytics, and tokenized incentives into a single, seamless ecosystem.",
      date: "2025-09-06",
      readTime: 9,
      mediumLink: "https://medium.com/@yourusername/kaito-ai-turning-crypto-knowledge-into-earnings"
    },
    {
      id: 4,
      title: "The Breach That Rocked the Crypto World: Bybit's $1.5 Billion Heist",
      description: "On February 21st, 2025, 14:13:35 UTC Bybit fell victim to a sophisticated cyberattack that resulted in the theft of over 400,000 ETH — valued at nearly $1.5 billion at the time -unraveling critical questions about security in the DeFi space.",
      date: "2025-04-24",
      readTime: 6,
      mediumLink: "https://medium.com/@yourusername/the-breach-that-rocked-the-crypto-world-bybits-heist"
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

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.Recent;

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
          color: '#6B7280',
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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#2d3748'
    }}>
      {/* Navigation */}
      <nav style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link href="/" style={{
          color: '#667eea',
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
            background: 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
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
            color: '#4a5568',
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
              background: 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(102, 126, 234, 0.1)';
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
                    color: '#2d3748',
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
                  color: '#6B7280',
                  fontSize: '0.9rem'
                }}>
                  📅 {formatDate(paper.date)}
                </span>
              </div>
              
              {/* Description */}
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                height: '4.8em', // Approximately 3 lines of text
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
                  color: '#667eea',
                  border: '1px solid #667eea',
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
                  e.currentTarget.style.background = '#667eea';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.gap = '0.75rem';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#667eea';
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


    </div>
  );
}