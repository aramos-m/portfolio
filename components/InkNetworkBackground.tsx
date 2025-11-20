import React, { useEffect, useRef } from 'react';

const InkNetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get parent dimensions
    const parent = canvas.parentElement;
    let width = parent ? parent.clientWidth : window.innerWidth;
    let height = parent ? parent.clientHeight : window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Abstract characters and binary for "Matrix" rain
    const chars = "01" + "安娜语言数据逻辑算法智网"; 
    const charArray = chars.split('');
    
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100; // Start above screen
    }

    const draw = () => {
      // Fading background for trail effect - match the porcelain background
      ctx.fillStyle = 'rgba(252, 251, 249, 0.15)'; 
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "Fira Code", monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Random color assignment
        const randomVal = Math.random();
        if (randomVal > 0.98) {
            ctx.fillStyle = '#aa381e'; // Cinnabar accent
        } else if (randomVal > 0.95) {
            ctx.fillStyle = '#007a4d'; // Jade accent
        } else {
            ctx.fillStyle = 'rgba(26, 26, 26, 0.2)'; // Ink black (very subtle)
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop
        if (drops[i] * fontSize > height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
        if (parent) {
            width = parent.clientWidth;
            height = parent.clientHeight;
            canvas.width = width;
            canvas.height = height;
            
            const newColumns = Math.floor(width / fontSize);
            if (newColumns > drops.length) {
                for (let i = drops.length; i < newColumns; i++) {
                    drops[i] = Math.random() * -100;
                }
            }
        }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-50"
    />
  );
};

export default InkNetworkBackground;
