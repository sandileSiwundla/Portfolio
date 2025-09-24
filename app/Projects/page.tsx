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
      title: "ABC Website",
      description: "A sleek, interactive platform showcasing research papers, software prototypes, and blockchain initiatives. Built with a focus on user experience and responsive design, ABC Website allows users to explore projects seamlessly while maintaining high performance and accessibility.",
      technologies: ["React", "Next.js", "Tailwind CSS", "IPFS integration"],
      status: "Live",
      link: "https://africasblockchainclub.vercel.app",
      category: "web"
    },
    {
      title: "BioHealthChain (Beta)",
      description: "A blockchain-based healthcare data platform that allows secure, on-chain storage and management of medical information. BioHealthChain emphasizes privacy, accessibility, and data integrity, giving users and healthcare providers a transparent and reliable solution for patient data management.",
      technologies: ["Next.js", "TypeScript", "Ethereum", "IPFS"],
      status: "Beta", 
      link: "https://bio-health-chain-4.vercel.app",
      category: "blockchain"
    }
  ];

  useEffect(() => {
    setMounted(true);
    // Check system preference or saved theme
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

  // Floating elements animation
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

    // Initialize subtle floating elements
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
      Live: { color: '#10B981', background: 'rgba(16, 185, 129, 0.1)', label: 'Live' },
      Beta: { color: '#F59E0B', background: 'rgba(245, 158, 11, 0.1)', label: 'Beta' },
      Development: { color: '#3B82F6', background: 'rgba(59, 130, 246, 0.1)', label: 'Dev' }
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
        Loading...
      </div>
    );
  }

  return (
    <div className={`projects-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Floating Elements Canvas */}
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

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem 4rem',
        position: 'relative',
        zIndex: 10
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
              ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' 
              : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)',
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
            A collection of my recent work in software development and blockchain research
          </p>
        </header>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'white',
              borderRadius: '12px',
              padding: '2rem',
              boxShadow: isDarkMode 
                ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)'
                : '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
              border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)'
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = isDarkMode
                ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(102, 126, 234, 0.2)'
                : '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(102, 126, 234, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDarkMode
                ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)'
                : '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)';
            }}
            onClick={() => window.open(project.link, '_blank')}
            >
              {/* Project Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: isDarkMode ? '#f1f5f9' : '#2d3748',
                  margin: '0',
                  flex: '1',
                  marginRight: '1rem'
                }}>
                  {project.title}
                </h3>
                <StatusBadge status={project.status} />
              </div>
              
              {/* Description */}
              <p style={{
                color: isDarkMode ? '#cbd5e1' : '#4a5568',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {project.description}
              </p>
              
              {/* Technologies */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={{
                    background: isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    border: `1px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'}`
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
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
                    gap: '0.5rem',
                    background: isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: `1px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)'}`
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '0.75rem';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '0.5rem';
                    e.currentTarget.style.background = isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)';
                  }}
                >
                  Visit Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        marginTop: '4rem',
        color: isDarkMode ? '#a0aec0' : '#a0aec0',
        borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
        position: 'relative',
        zIndex: 10
      }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Sandile Siwundla. All rights reserved.
        </p>
      </footer>

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