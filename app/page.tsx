'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './LandingPage.css';

interface FloatingOrb {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const LandingPage = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbsRef = useRef<FloatingOrb[]>([]);
  
  const words = ['Developer', 'Researcher'];
  const name = "Sandile Siwundla";
  const bio = "I create elegant solutions to complex problems through code and research. Passionate about pushing boundaries in software engineering and scientific discovery.";

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    if (typedText.length < currentWord.length) {
      const timer = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTypedText('');
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [typedText, currentWordIndex]);

  useEffect(() => {
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

    const initOrbs = () => {
      orbsRef.current = [];
      const orbCount = Math.min(15, Math.floor(canvas.width * canvas.height / 50000));
      
      for (let i = 0; i < orbCount; i++) {
        orbsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.1 + 0.05
        });
      }
    };

    initOrbs();

    const animate = () => {
      ctx.fillStyle = 'rgba(250, 250, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      orbsRef.current.forEach(orb => {
        orb.x += orb.speedX;
        orb.y += orb.speedY;

        if (orb.x > canvas.width || orb.x < 0) orb.speedX *= -1;
        if (orb.y > canvas.height || orb.y < 0) orb.speedY *= -1;

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 100, 255, ${orb.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Sandile_Siwundla_CV.pdf';
    link.download = 'Sandile_Siwundla_CV.pdf';
    link.click();
  };

  const handleViewPapers = () => {
    window.open('https://scholar.google.com/citations?user=YOUR_PROFILE_ID', '_blank');
  };

  const handleViewProjects = () => {
    // Scroll to projects section or navigate to projects page
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWebsite = () => {
    window.open('https://github.com/SandileSiwundla', '_blank');
  };

  return (
    <div className="landing-page">
      <canvas ref={canvasRef} className="floating-orbs" />
      
      <main className="main-content">
        <div className="content-wrapper">
          <div className="profile-section">
            <div className="profile-image-container">
              <Image 
                src="/sandile.jpeg" 
                alt={`Profile picture of ${name}`}
                width={280}
                height={280}
                className="profile-image"
                priority 
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk6objMpSlKKEgghI//Z"
              />
              <div className="image-glow"></div>
            </div>
            
            <div className="text-content">
              <h1 className="name">{name}</h1>
              <div className="title-container">
                <span className="title-prefix">/ </span>
                <span className="typed-title">{typedText}</span>
                <span className="cursor">|</span>
              </div>
              
              <p className="bio">{bio}</p>
              
              <div className="action-buttons">
                <button 
                  className="minimal-button primary"
                  onClick={handleDownloadCV}
                >
                  <span className="button-icon">📄</span>
                  Download CV
                </button>
                <button 
                  className="minimal-button secondary"
                  onClick={handleViewProjects}
                >
                  <span className="button-icon">🚀</span>
                  View Projects
                </button>
                <button 
                  className="minimal-button tertiary"
                  onClick={handleViewWebsite}
                >
                  <span className="button-icon">💻</span>
                  GitHub
                </button>
              </div>

              {/* Quick project links */}
              <div className="quick-links">
                <h3>Featured Projects:</h3>
                <div className="project-links">
                  <a 
                    href="https://africasblockchainclub.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    ABC Website ›
                  </a>
                  <a 
                    href="https://bio-health-chain-4.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    BioHealthChain ›
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;