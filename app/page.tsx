'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FloatingOrb {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

const LandingPage = () => {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbsRef = useRef<FloatingOrb[]>([]);
  const router = useRouter();
  
  const words = ['Developer', 'Researcher'];
  const name = "Sandile Siwundla";
  const bio = "I create elegant solutions to complex problems through code and research. Passionate about pushing boundaries in software engineering and scientific discovery.";

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply dark mode class to body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

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

  // Floating orbs animation
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

    // Initialize orbs
    const orbs: FloatingOrb[] = [];
    const orbCount = 8;
    
    for (let i = 0; i < orbCount; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.1 + 0.05,
        color: isDarkMode 
          ? `rgba(102, 126, 234, ${Math.random() * 0.3 + 0.1})`
          : `rgba(102, 126, 234, ${Math.random() * 0.2 + 0.05})`
      });
    }
    orbsRef.current = orbs;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      orbsRef.current.forEach(orb => {
        // Update position
        orb.x += orb.speedX;
        orb.y += orb.speedY;
        
        // Bounce off edges
        if (orb.x <= 0 || orb.x >= canvas.width) orb.speedX *= -1;
        if (orb.y <= 0 || orb.y >= canvas.height) orb.speedY *= -1;
        
        // Draw orb
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.size
        );
        
        gradient.addColorStop(0, isDarkMode 
          ? `rgba(102, 126, 234, ${orb.opacity})`
          : `rgba(102, 126, 234, ${orb.opacity * 0.5})`
        );
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size, 0, 2 * Math.PI);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDarkMode]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/SandileSiwundlaCV.pdf';
    link.download = 'SandileSiwundlaCV.pdf';
    link.click();
  };

  const handleViewProjects = () => {
    router.push('/Projects');
  };

  const handleViewPapers = () => {
    router.push('/Papers');
  };

  const handleViewWebsite = () => {
    window.open('https://github.com/sandileSiwundla', '_blank');
  };

  return (
    <div className={`landing-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Dark Mode Toggle */}
      <button 
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      
      <canvas ref={canvasRef} className="floating-orbs" />
      
      <main className="main-content">
        <div className="content-wrapper">
          <div className="profile-section">
            <div className="profile-image-container">
              <Image 
                src="/sandile.jpeg" 
                alt={`Profile picture of ${name}`}
                width={320}
                height={320}
                className="profile-image"
                priority 
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
                  onClick={handleViewPapers}
                >
                  <span className="button-icon">📚</span>
                  View Papers
                </button>
                <button 
                  className="minimal-button quaternary"
                  onClick={handleViewWebsite}
                >
                  <span className="button-icon">💻</span>
                  GitHub
                </button>
              </div>

              {/* Social Links */}
              <div className="social-links">
                <a href="https://www.linkedin.com/in/sandile-siwundla-51b0b5307/" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">💼</span>
                  LinkedIn
                </a>
                <a href="https://x.com/San_Olivegarden" target="_blank" rel="noopener noreferrer">
                  <span className="social-icon">🐦</span>
                  Twitter
                </a>
                <a href="mailto:sandilemsiwundla@gmail.com">
                  <span className="social-icon">✉️</span>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .landing-page {
          min-height: 100vh;
          position: relative;
          transition: all 0.3s ease;
        }

        .landing-page.light {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          color: #2d3748;
        }

        .landing-page.dark {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #f1f5f9;
        }

        .dark-mode-toggle {
          position: fixed;
          top: 2rem;
          right: 2rem;
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(102, 126, 234, 0.1)'};
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)'};
          border-radius: 50%;
          width: 50px;
          height: 50px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        .dark-mode-toggle:hover {
          transform: scale(1.1);
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(102, 126, 234, 0.2)'};
        }

        .floating-orbs {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .main-content {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .content-wrapper {
          max-width: 1200px;
          width: 100%;
        }

        .profile-section {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 4rem;
          align-items: center;
        }

        .profile-image-container {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .profile-image {
          width: 320px;
          height: 320px;
          border-radius: 20px;
          object-fit: cover;
          border: 4px solid ${isDarkMode ? 'rgba(102, 126, 234, 0.3)' : 'rgba(102, 126, 234, 0.2)'};
          box-shadow: 0 20px 40px ${isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};
          transition: all 0.3s ease;
        }

        .profile-image:hover {
          transform: scale(1.02);
          border-color: ${isDarkMode ? 'rgba(102, 126, 234, 0.6)' : 'rgba(102, 126, 234, 0.4)'};
        }

        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 340px;
          height: 340px;
          border-radius: 25px;
          background: ${isDarkMode 
            ? 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)'};
          filter: blur(20px);
          z-index: -1;
        }

        .text-content {
          max-width: 600px;
        }

        .name {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: ${isDarkMode 
            ? 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)' 
            : 'linear-gradient(135deg, #2d3748 0%, #4a5568 100%)'};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-container {
          font-size: 2rem;
          margin-bottom: 2rem;
          color: ${isDarkMode ? '#cbd5e1' : '#4a5568'};
        }

        .typed-title {
          color: #667eea;
          font-weight: 600;
        }

        .cursor {
          animation: blink 1s infinite;
          color: #667eea;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .bio {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 3rem;
          color: ${isDarkMode ? '#cbd5e1' : '#4a5568'};
        }

        .action-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .minimal-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          border: 2px solid;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 1rem;
        }

        .minimal-button.primary {
          background: #667eea;
          border-color: #667eea;
          color: white;
        }

        .minimal-button.primary:hover {
          background: #5a6fd8;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
        }

        .minimal-button.secondary {
          background: transparent;
          border-color: #48bb78;
          color: #48bb78;
        }

        .minimal-button.secondary:hover {
          background: #48bb78;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(72, 187, 120, 0.3);
        }

        .minimal-button.tertiary {
          background: transparent;
          border-color: #ed8936;
          color: #ed8936;
        }

        .minimal-button.tertiary:hover {
          background: #ed8936;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(237, 137, 54, 0.3);
        }

        .minimal-button.quaternary {
          background: transparent;
          border-color: #9f7aea;
          color: #9f7aea;
        }

        .minimal-button.quaternary:hover {
          background: #9f7aea;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(159, 122, 234, 0.3);
        }

        .button-icon {
          font-size: 1.2rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .social-links a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: ${isDarkMode ? '#cbd5e1' : '#4a5568'};
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }

        .social-links a:hover {
          color: #667eea;
          background: ${isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'};
          transform: translateY(-1px);
        }

        .social-icon {
          font-size: 1.1rem;
        }

        @media (max-width: 968px) {
          .profile-section {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }

          .profile-image {
            width: 280px;
            height: 280px;
          }

          .image-glow {
            width: 300px;
            height: 300px;
          }

          .name {
            font-size: 2.5rem;
          }

          .title-container {
            font-size: 1.5rem;
          }

          .action-buttons {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .main-content {
            padding: 1rem;
          }

          .name {
            font-size: 2rem;
          }

          .title-container {
            font-size: 1.2rem;
          }

          .bio {
            font-size: 1rem;
          }

          .action-buttons {
            flex-direction: column;
            align-items: center;
          }

          .minimal-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;