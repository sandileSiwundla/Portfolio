import { useState, useEffect, useRef } from 'react';
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
  
  const words = ['Developer', 'Researcher', 'Innovator', 'Problem Solver'];
  const name = "Alex Johnson"; // Replace with your name
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

    // Initialize floating orbs
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

        // Bounce off edges
        if (orb.x > canvas.width || orb.x < 0) orb.speedX *= -1;
        if (orb.y > canvas.height || orb.y < 0) orb.speedY *= -1;

        // Draw orb
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
    // Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = '/path/to/your/cv.pdf';
    link.download = `${name.replace(' ', '_')}_CV.pdf`;
    link.click();
  };

  const handleViewPapers = () => {
    // Replace with your papers link
    window.open('https://scholar.google.com/your-profile', '_blank');
  };

  const handleViewWebsite = () => {
    // Replace with your website/github link
    window.open('https://github.com/yourusername', '_blank');
  };

  return (
    <div className="landing-page">
      <canvas ref={canvasRef} className="floating-orbs" />
      
      <main className="main-content">
        <div className="content-wrapper">
          <div className="profile-section">
            <div className="profile-image-container">
              <img 
                src="/path/to/your/profile-picture.jpg" // Replace with your image path
                alt={name}
                className="profile-image"
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
                  <span className="button-icon">↓</span>
                  Download CV
                </button>
                <button 
                  className="minimal-button secondary"
                  onClick={handleViewPapers}
                >
                  <span className="button-icon">📄</span>
                  View Papers
                </button>
                <button 
                  className="minimal-button tertiary"
                  onClick={handleViewWebsite}
                >
                  <span className="button-icon">🌐</span>
                  My Websites
                </button>
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