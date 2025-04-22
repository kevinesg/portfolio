import React, { useEffect, useRef } from "react";

export const CursorFollower: React.FC = () => {
  // 1. Ref for the latest cursor position
  const cursorRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  // 2. Ref for Pikachu's current position
  const posRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const imgRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const animate = () => {
      // 3. Easing toward the updated cursorRef.current
      posRef.current.x += (cursorRef.current.x - posRef.current.x) * 0.1;
      posRef.current.y += (cursorRef.current.y - posRef.current.y) * 0.1;

      el.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;

      frameRef.current = requestAnimationFrame(animate);
    };

    // kick off the loop ONCE
    animate();
  }, []); // ← no [cursor] here

  return (
    <img
      ref={imgRef}
      src="/assets/files/pikachu-running.gif"
      alt="Running Pikachu"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "80px",
        height: "auto",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-100px, -100px)",
      }}
    />
  );
};
