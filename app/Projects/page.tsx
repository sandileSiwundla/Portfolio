'use client';

import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: "ABC Website",
      description: "A sleek, interactive platform showcasing research papers and blockchain initiatives.",
      link: "https://africasblockchainclub.vercel.app",
      technologies: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "BioHealthChain",
      description: "Blockchain-based healthcare data platform for secure medical information management.",
      link: "https://bio-health-chain-4.vercel.app",
      technologies: ["Next.js", "TypeScript", "Ethereum"]
    }
  ];

  return (
    <main style={{ minHeight: '100vh', padding: '2rem', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <Link href="/" style={{ color: '#667eea', textDecoration: 'none', marginBottom: '2rem', display: 'block' }}>
        ← Back to Home
      </Link>
      
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>My Projects</h1>
      
      <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h2 style={{ margin: '0 0 1rem 0' }}>{project.title}</h2>
            <p style={{ marginBottom: '1rem' }}>{project.description}</p>
            <div style={{ marginBottom: '1rem' }}>
              {project.technologies.map((tech, i) => (
                <span key={i} style={{ background: '#667eea', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', marginRight: '0.5rem', fontSize: '0.8rem' }}>
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener" style={{ color: '#667eea', textDecoration: 'none' }}>
              View Project →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}