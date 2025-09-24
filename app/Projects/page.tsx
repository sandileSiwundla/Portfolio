'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);

  const projects = [
    {
      title: "Charity NFT",
      description: "A Web3 platform leveraging account abstraction for gasless transactions and social logins. Each NFT purchase automatically donates to verified charities, combining digital art collection with real-world impact through smart contract automation.",
      technologies: ["Next.js", "TypeScript", "ZeroDev AA", "Scroll Blockchain", "ERC-721", "Social Logins", "Paymaster"],
      status: "Live", 
      link: "https://nft-app-dun-six.vercel.app",
      category: "blockchain",
    },
    {
      title: "Africa's Blockchain Club Hub",
      description: "The official platform for Africa's leading blockchain community, featuring research papers, event coordination, and member networking. Showcasing African blockchain innovation through interactive content and educational resources for enthusiasts of all levels.",
      technologies: ["React", "Next.js", "Tailwind CSS", "IPFS integration", "Community Platform"],
      status: "Live",
      link: "https://africasblockchainclub.vercel.app",
      category: "web"
    },
    {
      title: "BioHealthChain (Beta)",
      description: "A privacy-first healthcare data platform leveraging blockchain for secure, transparent medical records management. Enables patients to own their health data while providing healthcare providers with verifiable, tamper-proof medical histories through zero-knowledge proof technology.",
      technologies: ["Next.js", "TypeScript", "Ethereum", "IPFS", "ZK-Proofs"],
      status: "Beta", 
      link: "https://bio-health-chain-4.vercel.app",
      category: "blockchain"
    }
  ];

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)';
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const elements: FloatingElement[] = [];
    const elementCount = 8;
    
    for (let i = 0; i < elementCount; i++) {
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.1 + 0.05,
      });
    }
    elementsRef.current = elements;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = isDarkMode 
        ? ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        : ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      
      if (isDarkMode) {
        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.03)');
        gradient.addColorStop(1, 'rgba(159, 122, 234, 0.02)');
      } else {
        gradient.addColorStop(0, 'rgba(79, 70, 229, 0.02)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.01)');
      }
      
      elementsRef.current.forEach(element => {
        element.x += element.speedX;
        element.y += element.speedY;
        
        if (element.x <= 0 || element.x >= canvas.width) element.speedX *= -1;
        if (element.y <= 0 || element.y >= canvas.height) element.speedY *= -1;
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, 2 * Math.PI);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode, mounted]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const StatusBadge = ({ status }: { status: string }) => {
    const statusConfig = {
      Live: { color: '#10B981', background: 'rgba(16, 185, 129, 0.1)', label: '🚀 Live' },
      Beta: { color: '#F59E0B', background: 'rgba(245, 158, 11, 0.1)', label: '🔬 Beta' },
      Development: { color: '#3B82F6', background: 'rgba(59, 130, 246, 0.1)', label: '⚡ Dev' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.Development;

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

  const CategoryBadge = ({ category }: { category: string }) => {
    const categoryConfig = {
      blockchain: { color: '#8B5CF6', background: 'rgba(139, 92, 246, 0.1)', label: '🔗 Blockchain' },
      web: { color: '#3B82F6', background: 'rgba(59, 130, 246, 0.1)', label: '🌐 Web App' }
    };

    const config = categoryConfig[category as keyof typeof categoryConfig] || categoryConfig.web;

    return (
      <span style={{
        padding: '0.25rem 0.75rem',
        borderRadius: '20px',
        fontSize: '0.7rem',
        fontWeight: '500',
        backgroundColor: config.background,
        color: config.color,
        border: `1px solid ${config.color}40`,
        marginLeft: '0.5rem'
      }}>
        {config.label}
      </span>
    );
  };

  if (!mounted) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        color: 'white'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '20px', height: '20px', border: '2px solid #667eea', borderTop: '2px solid transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          Loading Projects...
        </div>
      </div>
    );
  }

  return (
    <div className={`projects-page ${isDarkMode ? 'dark' : 'light'}`}>
      <canvas
        ref={canvasRef}
        className="floating-elements"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.6
        }}
      />

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

      <nav style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        <Link href="/" style={{
          color: isDarkMode ? '#667eea' : '#4f46e5',
          textDecoration: 'none',
          fontWeight: '600',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          transition: 'all 0.3s ease',
          background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.05)',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)'}`
        }}>
          ← Back to Home
        </Link>
      </nav>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem 4rem',
        position: 'relative',
        zIndex: 10
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            background: isDarkMode 
              ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
              : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
            margin: '0'
          }}>
            Projects
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: isDarkMode ? '#cbd5e1' : '#4a5568',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Building the future of Web3, blockchain, and digital experiences through cutting-edge technology
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'white',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: isDarkMode 
                ? '0 8px 32px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.3)'
                : '0 8px 32px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)',
              border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '430px', 
              minHeight: '430px'
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = isDarkMode
                ? '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(102, 126, 234, 0.3)'
                : '0 25px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(102, 126, 234, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = isDarkMode
                ? '0 8px 32px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.3)'
                : '0 8px 32px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)';
            }}
            onClick={() => window.open(project.link, '_blank')}
            >
              {/* Header Section */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem',
                flexShrink: 0
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: isDarkMode ? '#f1f5f9' : '#2d3748',
                  margin: '0',
                  flex: '1',
                  marginRight: '1rem',
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                  <StatusBadge status={project.status} />
                  <CategoryBadge category={project.category} />
                </div>
              </div>
              
              {/* Description Section */}
              <div style={{
                flex: '1',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <p style={{
                  color: isDarkMode ? '#cbd5e1' : '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.description}
                </p>
              </div>
              
              {/* Technologies Section */}
              <div style={{
                marginBottom: '2rem',
                flexShrink: 0
              }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{
                      background: isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      border: `1px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'}`,
                      backdropFilter: 'blur(10px)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Button Section - Fixed at bottom */}
              <div style={{
                marginTop: 'auto',
                flexShrink: 0
              }}>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#667eea',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '12px',
                    border: `1px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)'}`,
                    fontSize: '0.9rem',
                    width: '100%',
                    textAlign: 'center'
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '0.75rem';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '0.5rem';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Explore Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '3rem',
        marginTop: '4rem',
        color: isDarkMode ? '#a0aec0' : '#a0aec0',
        borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
        position: 'relative',
        zIndex: 10
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Sandile Siwundla. Building the future, one block at a time.
        </p>
      </footer>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

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
          transform: translateY(-2px);
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
            height: auto !important;
            min-height: 400px !important;
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

          .project-card {
            padding: 1.25rem !important;
            min-height: 380px !important;
          }
        }
      `}</style>
    </div>
  );
}