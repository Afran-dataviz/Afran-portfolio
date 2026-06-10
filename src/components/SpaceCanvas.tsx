'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
}

export default function SpaceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ y: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const particleCount = 120;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const colors = ['#00E5FF', '#6C63FF', '#8A2BE2', '#ffffff'];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 2 + 0.1, // depth factor
          size: Math.random() * 1.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouseRef.current.targetY = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    const handleScroll = () => {
      scrollRef.current.targetY = window.scrollY;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    resizeCanvas();

    const draw = () => {
      ctx.fillStyle = '#050816';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Smooth scroll follow
      scrollRef.current.y += (scrollRef.current.targetY - scrollRef.current.y) * 0.08;

      // Draw faint grid grid alignment in deep space
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.01)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      const scrollOffsetGrid = scrollRef.current.y * 0.05;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + mouseRef.current.x * 0.1, 0);
        ctx.lineTo(x + mouseRef.current.x * 0.1, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        const drawGridY = ((y + mouseRef.current.y * 0.1 - scrollOffsetGrid) % canvas.height + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.moveTo(0, drawGridY);
        ctx.lineTo(canvas.width, drawGridY);
        ctx.stroke();
      }

      // Render cosmic nebula dust
      const nebulaScrollOffset1 = scrollRef.current.y * 0.15;
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + mouseRef.current.x * 0.5,
        canvas.height * 0.4 + mouseRef.current.y * 0.5 - nebulaScrollOffset1,
        100,
        canvas.width * 0.3 + mouseRef.current.x * 0.5,
        canvas.height * 0.4 + mouseRef.current.y * 0.5 - nebulaScrollOffset1,
        400
      );
      gradient1.addColorStop(0, 'rgba(108, 99, 255, 0.06)');
      gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nebulaScrollOffset2 = scrollRef.current.y * 0.2;
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 - mouseRef.current.x * 0.5,
        canvas.height * 0.6 - mouseRef.current.y * 0.5 - nebulaScrollOffset2,
        50,
        canvas.width * 0.7 - mouseRef.current.x * 0.5,
        canvas.height * 0.6 - mouseRef.current.y * 0.5 - nebulaScrollOffset2,
        350
      );
      gradient2.addColorStop(0, 'rgba(0, 229, 255, 0.04)');
      gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render particles
      particles.forEach((p) => {
        // Apply physics + parallax offset based on depth (z) + scroll parallax
        const offsetX = mouseRef.current.x * p.z;
        const offsetY = mouseRef.current.y * p.z - scrollRef.current.y * p.z * 0.25;

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Wrap the render coordinates within viewport width and height
        const drawX = ((p.x + offsetX) % canvas.width + canvas.width) % canvas.width;
        const drawY = ((p.y + offsetY) % canvas.height + canvas.height) % canvas.height;

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size * p.z, 0, Math.PI * 2);
        
        // Add glowing overlay to cyan/purple particles
        if (p.color !== '#ffffff') {
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      // Reset shadow blur
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-55 pointer-events-none" />;
}
