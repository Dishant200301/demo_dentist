import { useState, useEffect, useRef } from 'react';

interface NumberCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

const NumberCounter = ({ end, duration = 2000, decimals = 0, suffix = '' }: NumberCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Easing function (easeOutExpo) for smoother deceleration
      const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      
      const percentage = Math.min(progress / duration, 1);
      const easedPercentage = easeOutExpo(percentage);
      
      const currentCount = end * easedPercentage;
      
      if (progress < duration) {
        setCount(currentCount);
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default NumberCounter;
