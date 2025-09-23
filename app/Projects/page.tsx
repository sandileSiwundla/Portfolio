'use client';

import Link from 'next/link';

export default function ProjectsPage() {
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
            Projects
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a5568',
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
                  color: '#2d3748',
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
                color: '#4a5568',
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
                    background: 'rgba(102, 126, 234, 0.1)',
                    color: '#667eea',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    border: '1px solid rgba(102, 126, 234, 0.2)'
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
                    gap: '0.5rem'
                  }}
                  onClick={(e) => e.stopPropagation()}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '0.75rem';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '0.5rem';
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
        color: '#a0aec0',
        borderTop: '1px solid #e2e8f0'
      }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Sandile Siwundla. All rights reserved.
        </p>
      </footer>
    </div>
  );
}