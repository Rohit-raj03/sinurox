// Zero-dependency Web Audio synthesizer & DOM Confetti effects for high-end UI/UX

export const playSound = (type = 'click') => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'success' || type === 'celebrate') {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.35);
      });
    }
  } catch {
    // Audio might be blocked by browser policy until user interaction
  }
};

export const triggerConfetti = () => {
  const count = 60;
  const colors = ['#ef4444', '#f59e0b', '#ec4899', '#3b82f6', '#10b981', '#ffffff'];
  
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'fixed pointer-events-none z-[9999] rounded-sm';
    
    const size = Math.random() * 8 + 6;
    el.style.width = `${size}px`;
    el.style.height = `${size * 0.6}px`;
    el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    el.style.left = `${50 + (Math.random() * 20 - 10)}vw`;
    el.style.top = '40vh';
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 400 + 200;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 200;
    
    document.body.appendChild(el);
    
    const startTime = performance.now();
    const duration = 1800 + Math.random() * 800;
    
    const animate = (now) => {
      const elapsed = (now - startTime) / 1000;
      if (elapsed > duration / 1000) {
        el.remove();
        return;
      }
      
      const x = (50 * window.innerWidth / 100) + vx * elapsed;
      const y = (40 * window.innerHeight / 100) + vy * elapsed + (0.5 * 980 * elapsed * elapsed);
      const rot = elapsed * 720;
      const opacity = 1 - (elapsed / (duration / 1000));
      
      el.style.transform = `translate3d(${x - window.innerWidth / 2}px, ${y - window.innerHeight * 0.4}px, 0) rotate(${rot}deg)`;
      el.style.opacity = `${opacity}`;
      
      requestAnimationFrame(animate);
    };
    
    requestAnimationFrame(animate);
  }
};
