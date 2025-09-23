'use client';

import { useState, useEffect, useRef } from 'react';
import './LandingPage.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

const LandingPage = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  
  const fullText = [
    '> INITIALIZING PORTFOLIO_SYSTEM...',
    '> LOADING DEVELOPER_PROFILE...',
    '> WELCOME TO MY DIGITAL_REALM',
    '> SOFTWARE_ENGINEER || RESEARCHER',
    '> READY FOR...'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (displayText.length < fullText[currentLine].length) {
        setDisplayText(fullText[currentLine].slice(0, displayText.length + 1));
      } else if (currentLine < fullText.length - 1) {
        setCurrentLine(currentLine + 1);
        setDisplayText('');
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [displayText, currentLine]);

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

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 10000));
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5
        });
      }
    };

    initParticles();

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${particle.size / 3})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const dx = particle.x - particlesRef.current[j].x;
          const dy = particle.y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page">
      <canvas ref={canvasRef} className="particle-canvas" />
      
      <nav className="cyber-nav">
        <div className="nav-logo">
          <span className="glitch-text" data-text="DEV_PORTFOLIO">DEV_PORTFOLIO</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('about')} className="cyber-button">[ ABOUT ]</button>
          <button onClick={() => scrollToSection('projects')} className="cyber-button">[ PROJECTS ]</button>
          <button onClick={() => scrollToSection('research')} className="cyber-button">[ RESEARCH ]</button>
          <button onClick={() => scrollToSection('contact')} className="cyber-button">[ CONTACT ]</button>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero-section">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
              </div>
              <span className="terminal-title">terminal@portfolio:~</span>
            </div>
            <div className="terminal-body">
              <div className="typewriter-text">
                {displayText}
                <span className="cursor">▊</span>
              </div>
            </div>
          </div>

          <div className="hero-content">
            <h1 className="cyber-title">
              <span className="title-glitch" data-text="INNOVATE">INNOVATE</span>
              <span className="title-glitch" data-text="DEVELOP">DEVELOP</span>
              <span className="title-glitch" data-text="RESEARCH">RESEARCH</span>
            </h1>
            
            <p className="cyber-subtitle">
              Pushing the boundaries of software engineering and research
            </p>
            
            <div className="cta-buttons">
              <button 
                className="cyber-button primary"
                onClick={() => scrollToSection('projects')}
              >
                [ VIEW MY WORK ]
              </button>
              <button 
                className="cyber-button secondary"
                onClick={() => scrollToSection('contact')}
              >
                [ WORK ]
              </button>
            </div>
          </div>
        </section>

        <div className="scanline"></div>
      </main>
    </div>
  );
};

export default LandingPage;