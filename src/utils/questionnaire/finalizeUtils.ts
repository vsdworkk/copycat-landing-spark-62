import confetti from 'canvas-confetti';
import { NavigateFunction } from 'react-router-dom';

export const handleFinalization = (navigate: NavigateFunction) => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#4361ee', '#000000', '#ffffff']
  });
  
  setTimeout(() => {
    navigate('/dashboard');
  }, 1000);
};