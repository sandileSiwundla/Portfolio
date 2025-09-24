'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ArticlesPage() {
  const [hoverStates, setHoverStates] = useState<{[key: string]: boolean}>({});
  const [linkHoverStates, setLinkHoverStates] = useState<{[key: string]: boolean}>({});

  const articles = [
    {
      id: 1,
      title: "Blockchain Technology in African Healthcare Systems",
      publication: "International Journal of Medical Informatics",
      date: "2024",
      abstract: "Exploring the potential of blockchain technology to revolutionize healthcare data management in underserved African communities. This research examines scalability, privacy concerns, and implementation strategies for decentralized medical records.",
      link: "#",
      tags: ["Blockchain", "Healthcare", "Africa", "Data Privacy"],
      status: "Published"
    },
    {
      id: 2,
      title: "Decentralized Identity Management Using Smart Contracts",
      publication: "IEEE Conference on Blockchain Research",
      date: "2023", 
      abstract: "A novel approach to digital identity verification using Ethereum smart contracts and zero-knowledge proofs. This paper presents a framework for self-sovereign identity that prioritizes user privacy and control.",
      link: "#",
      tags: ["Smart Contracts", "Identity", "Ethereum", "ZK Proofs"],
      status: "Published"
    },
    {
      id: 3,
      title: "IPFS Integration for Academic Paper Distribution",
      publication: "Journal of Distributed Systems",
      date: "2023",
      abstract: "Leveraging InterPlanetary File System for decentralized academic paper storage and distribution. This research addresses challenges in traditional academic publishing and proposes a more accessible model.",
      link: "#",
      tags: ["IPFS", "Academic Publishing", "Decentralization"],
      status: "Under Review"
    },
    {
      id: 4,
      title: "Sustainable Blockchain Solutions for Developing Economies",
      publication: "African Technology Review",
      date: "2024",
      abstract: "Analyzing energy-efficient consensus mechanisms and their applicability in resource-constrained environments. Focus on Proof-of-Stake adaptations and layer-2 solutions tailored for African infrastructure.",
      link: "#",
      tags: ["Sustainability", "PoS", "Layer-2", "Africa"],
      status: "In Progress"
    }
  ];

  const handleMouseEnter = (id: string) => {
    setHoverStates(prev => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: string) => {
    setHoverStates(prev => ({ ...prev, [id]: false }));
  };

  const handleLinkMouseEnter = (id: string) => {
    setLinkHoverStates(prev => ({ ...prev, [id]: true }));
  };

  const handleLinkMouseLeave = (id: string) => {
    setLinkHoverStates(prev => ({ ...prev, [id]: false }));
  };

  const StatusBadge = ({ status }: { status: string }) => {
    const statusConfig = {
      Published: { color: '#10B981', background: 'rgba(16, 185, 129, 0.1)', label: 'Published' },
      'Under Review': { color: '#F59E0B', background: 'rgba(245, 158, 11, 0.1)', label: 'Under Review' },
      'In Progress': { color: '#3B82F6', background: 'rgba(59, 130, 246, 0.1)', label: 'In Progress' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['In Progress'];

    return (
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
    );
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
        <Link 
          href="/" 
          style={{
            color: '#667eea',
            textDecoration: 'none',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease'
          }}
        >
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
            Research & Publications
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a5568',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Academic papers, research publications, and thought leadership in blockchain and software engineering
          </p>
        </header>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {articles.map((article) => (
            <div 
              key={article.id}
              style={{
                background: 'white',
                borderRadius: '12px',
                padding: '2.5rem',
                boxShadow: hoverStates[article.id] 
                  ? '0 10px 25px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(102, 126, 234, 0.1)'
                  : '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: hoverStates[article.id] ? 'translateY(-2px)' : 'translateY(0)'
              }} 
              onMouseEnter={() => handleMouseEnter(article.id.toString())}
              onMouseLeave={() => handleMouseLeave(article.id.toString())}
              onClick={() => article.link !== '#' && window.open(article.link, '_blank')}
            >
              {/* Article Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#2d3748',
                    margin: '0 0 0.5rem 0',
                    lineHeight: '1.3'
                  }}>
                    {article.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      color: '#667eea',
                      fontWeight: '600',
                      fontSize: '0.95rem'
                    }}>
                      {article.publication}
                    </span>
                    <span style={{
                      color: '#a0aec0',
                      fontSize: '0.9rem'
                    }}>
                      {article.date}
                    </span>
                  </div>
                </div>
                <StatusBadge status={article.status} />
              </div>
              
              {/* Abstract */}
              <p style={{
                color: '#4a5568',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontSize: '1rem'
              }}>
                {article.abstract}
              </p>
              
              {/* Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {article.tags.map((tag, i) => (
                  <span key={i} style={{
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    border: '1px solid rgba(102, 126, 234, 0.2)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Action */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#667eea',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: linkHoverStates[article.id] ? '0.75rem' : '0.5rem',
                    opacity: article.link === '#' ? 0.5 : 1,
                    pointerEvents: article.link === '#' ? 'none' : 'auto'
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={() => handleLinkMouseEnter(article.id.toString())}
                  onMouseLeave={() => handleLinkMouseLeave(article.id.toString())}
                >
                  {article.link === '#' ? 'Coming Soon' : 'Read Paper →'}
                </a>
                
                {article.status === 'Published' && (
                  <span style={{
                    fontSize: '0.8rem',
                    color: '#a0aec0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    📄 PDF Available
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Research Interests */}
        <div style={{
          background: 'rgba(102, 126, 234, 0.05)',
          borderRadius: '12px',
          padding: '3rem',
          border: '1px solid rgba(102, 126, 234, 0.1)',
          marginBottom: '3rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#2d3748',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Research Focus Areas
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              { area: "Blockchain in Healthcare", description: "Decentralized medical records and patient data sovereignty" },
              { area: "Sustainable Web3", description: "Energy-efficient consensus mechanisms and green blockchain solutions" },
              { area: "African Tech Innovation", description: "Tailored solutions for developing economies and local challenges" },
              { area: "Decentralized Identity", description: "Self-sovereign identity systems and privacy-preserving authentication" }
            ].map((focus, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '1.5rem'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(102, 126, 234, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: '#667eea',
                  fontSize: '1.5rem'
                }}>
                  {['🏥', '🌱', '🌍', '🆔'][index]}
                </div>
                <h4 style={{
                  margin: '0 0 0.5rem 0',
                  color: '#2d3748',
                  fontSize: '1.1rem'
                }}>
                  {focus.area}
                </h4>
                <p style={{
                  margin: 0,
                  color: '#4a5568',
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '3rem'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            color: '#2d3748',
            marginBottom: '1rem'
          }}>
            Interested in Research Collaboration?
          </h3>
          <p style={{
            color: '#4a5568',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            I'm open to collaborative research projects, peer reviews, and academic discussions.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="mailto:sandile@example.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                border: '2px solid #667eea',
                background: '#667eea',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              📧 Discuss Research
            </a>
            <Link 
              href="/projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                border: '2px solid #a0aec0',
                background: 'transparent',
                color: '#4a5568',
                textDecoration: 'none',
                fontWeight: '600',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              ← View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        marginTop: '4rem',
        color: '#a0aec0',
        borderTop: '1px solid #e2e8f0'
      }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Sandile Siwundla. Research Portfolio.
        </p>
      </footer>
    </div>
  );
}