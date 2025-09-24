'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface FloatingElement {
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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);
  const router = useRouter();
  
  const words = ['Developer', 'Researcher', 'Innovator'];
  const name = "Sandile Siwundla";
  const bio = "I create elegant solutions to complex problems through code and research. Passionate about pushing boundaries in software engineering and scientific discovery.";

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedMode ? JSON.parse(storedMode) : prefersDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  useEffect(() => {
    if (!mounted) return;

    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
    } else {
      document.body.classList.remove('dark-mode');
      document.body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)';
    }
  }, [isDarkMode, mounted]);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    if (typedText.length < currentWord.length) {
      const timer = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length + 1));
      }, 120);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setTypedText('');
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [typedText, currentWordIndex]);

  // Simplified floating elements animation
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

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/SandileSiwundlaCV.pdf';
    link.download = 'SandileSiwundlaCV.pdf';
    link.click();
  };

  const handleViewProjects = () => router.push('/Projects');
  const handleViewPapers = () => router.push('/Papers');
  const handleViewWebsite = () => window.open('https://github.com/sandileSiwundla', '_blank');

  if (!mounted) {
    return (
      <div className="loading-container">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className={`landing-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Simplified Dark Mode Toggle */}
      <button 
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
      
      {/* Subtle Background */}
      <canvas ref={canvasRef} className="floating-elements" />
      
      <main className="main-content">
        <div className="content-wrapper">
          <div className="profile-section">
            {/* Clean Profile Image */}
            <div className="profile-image-container">
              <div className="image-frame">
                <Image 
                  src="/sandile.jpeg" 
                  alt={`Profile picture of ${name}`}
                  width={300}
                  height={300}
                  className="profile-image"
                  priority 
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-content">
              <div className="name-container">
                <h1 className="name">{name}</h1>
                <div className="title-container">
                  <span className="typed-title">{typedText}</span>
                  <span className="cursor">|</span>
                </div>
              </div>
              
              <p className="bio">{bio}</p>
              
              {/* Clean Action Buttons */}
              <div className="action-buttons">
                <button className="btn btn-primary" onClick={handleDownloadCV}>
                  📄 Download CV
                </button>
                
                <button className="btn btn-secondary" onClick={handleViewProjects}>
                  🚀 Projects
                </button>
                
                <button className="btn btn-accent" onClick={handleViewPapers}>
                  📚 Research
                </button>
                
                <button className="btn btn-tertiary" onClick={handleViewWebsite}>
                  💻 GitHub
                </button>
              </div>

              {/* Simple Social Links */}
              <div className="social-links">
                <a href="https://www.linkedin.com/in/sandile-siwundla-51b0b5307/" target="_blank" rel="noopener noreferrer">
                  💼 LinkedIn
                </a>
                <a href="https://x.com/San_Olivegarden" target="_blank" rel="noopener noreferrer">
                  🐦 Twitter
                </a>
                <a href="mailto:sandilemsiwundla@gmail.com">
                  ✉️ Email
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
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .landing-page.light {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
          color: #1e293b;
        }

        .landing-page.dark {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: #f1f5f9;
        }

        .loading-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          color: white;
        }

        .dark-mode-toggle {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(99, 102, 241, 0.1)'};
          border: 1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(99, 102, 241, 0.2)'};
          border-radius: 20px;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          z-index: 1000;
          color: ${isDarkMode ? '#e2e8f0' : '#4f46e5'};
        }

        .dark-mode-toggle:hover {
          transform: translateY(-1px);
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(99, 102, 241, 0.15)'};
        }

        .floating-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.6;
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
          margin: 0 auto;
        }

        .profile-section {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 4rem;
          align-items: center;
        }

        .profile-image-container {
          display: flex;
          justify-content: center;
        }

        .image-frame {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .image-frame:hover {
          transform: scale(1.02);
        }

        .profile-image {
          width: 300px;
          height: 300px;
          object-fit: cover;
          filter: ${isDarkMode ? 'brightness(1.05)' : 'brightness(1.02)'};
        }

        .text-content {
          max-width: 600px;
        }

        .name-container {
          margin-bottom: 2rem;
        }

        .name {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: ${isDarkMode 
            ? 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)' 
            : 'linear-gradient(135deg, #1e293b 0%, #475569 100%)'};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .title-container {
          font-size: 1.8rem;
          color: ${isDarkMode ? '#cbd5e1' : '#64748b'};
          font-weight: 300;
        }

        .typed-title {
          color: ${isDarkMode ? '#667eea' : '#4f46e5'};
          font-weight: 600;
        }

        .cursor {
          animation: blink 1.2s infinite;
          color: ${isDarkMode ? '#667eea' : '#4f46e5'};
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .bio {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          color: ${isDarkMode ? '#cbd5e1' : '#64748b'};
        }

        .action-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          text-decoration: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
          background: ${isDarkMode ? 'rgba(72, 187, 120, 0.1)' : 'rgba(72, 187, 120, 0.05)'};
          color: #48bb78;
          border: 1px solid #48bb78;
        }

        .btn-accent {
          background: ${isDarkMode ? 'rgba(237, 137, 54, 0.1)' : 'rgba(237, 137, 54, 0.05)'};
          color: #ed8936;
          border: 1px solid #ed8936;
        }

        .btn-tertiary {
          background: ${isDarkMode ? 'rgba(159, 122, 234, 0.1)' : 'rgba(159, 122, 234, 0.05)'};
          color: #9f7aea;
          border: 1px solid #9f7aea;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #5a6fd8 0%, #6a42a8 100%);
        }

        .btn-secondary:hover {
          background: #48bb78;
          color: white;
        }

        .btn-accent:hover {
          background: #ed8936;
          color: white;
        }

        .btn-tertiary:hover {
          background: #9f7aea;
          color: white;
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
          color: ${isDarkMode ? '#cbd5e1' : '#64748b'};
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(99, 102, 241, 0.03)'};
        }

        .social-links a:hover {
          color: ${isDarkMode ? '#667eea' : '#4f46e5'};
          background: ${isDarkMode ? 'rgba(102, 126, 234, 0.1)' : 'rgba(102, 126, 234, 0.05)'};
          transform: translateY(-1px);
        }

        @media (max-width: 968px) {
          .profile-section {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }

          .action-buttons {
            grid-template-columns: 1fr;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
          }

          .name {
            font-size: 2.5rem;
          }

          .title-container {
            font-size: 1.5rem;
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
            font-size: 1.3rem;
          }

          .bio {
            font-size: 1.1rem;
          }

          .profile-image {
            width: 250px;
            height: 250px;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .name {
            font-size: 1.8rem;
          }

          .action-buttons {
            grid-template-columns: 1fr;
          }

          .btn {
            padding: 0.875rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;