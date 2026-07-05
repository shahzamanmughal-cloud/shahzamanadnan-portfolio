import { useEffect, useState } from 'react';

export interface MousePosition {
  x: number;
  y: number;
}

/** Tracks the pointer position in viewport coordinates. */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return position;
}
