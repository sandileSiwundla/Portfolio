'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
  const router = useRouter(); // Add this line
  
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

  // ... (rest of your useEffect for canvas animation remains the same)

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/SandileSiwundlaCV.pdf';
    link.download = 'SandileSiwundlaCV.pdf';
    link.click();
  };

  const handleViewProjects = () => {
    router.push('/Projects');
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