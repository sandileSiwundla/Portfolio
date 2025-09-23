import { useState } from 'react';
import './ProjectsPage.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  status: 'Live' | 'Beta' | 'Development';
  link: string;
  category: 'web' | 'blockchain' | 'research';
}

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'blockchain' | 'research'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "ABC Website",
      description: "A sleek, interactive platform showcasing research papers, software prototypes, and blockchain initiatives. Built with a focus on user experience and responsive design, ABC Website allows users to explore projects seamlessly while maintaining high performance and accessibility.",
      technologies: ["React", "Next.js", "Tailwind CSS", "IPFS integration"],
      status: "Live",
      link: "https://africasblockchainclub.vercel.app",
      category: "web"
    },
    {
      id: 2,
      title: "BioHealthChain (Beta)",
      description: "A blockchain-based healthcare data platform that allows secure, on-chain storage and management of medical information. BioHealthChain emphasizes privacy, accessibility, and data integrity, giving users and healthcare providers a transparent and reliable solution for patient data management.",
      technologies: ["Next.js", "TypeScript", "Ethereum", "IPFS"],
      status: "Beta",
      link: "https://bio-health-chain-4.vercel.app",
      category: "blockchain"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const StatusBadge = ({ status }: { status: string }) => {
    const statusConfig = {
      Live: { color: '#10B981', label: 'Live' },
      Beta: { color: '#F59E0B', label: 'Beta' },
      Development: { color: '#3B82F6', label: 'Dev' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.Development;

    return (
      <span 
        className="status-badge"
        style={{ 
          backgroundColor: `${config.color}20`,
          color: config.color,
          border: `1px solid ${config.color}40`
        }}
      >
        {config.label}
      </span>
    );
  };

  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            A collection of my recent work in software development and blockchain research
          </p>
        </header>

        <div className="filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Development
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'blockchain' ? 'active' : ''}`}
            onClick={() => setActiveFilter('blockchain')}
          >
            Blockchain
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'research' ? 'active' : ''}`}
            onClick={() => setActiveFilter('research')}
          >
            Research
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <StatusBadge status={project.status} />
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Visit Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;