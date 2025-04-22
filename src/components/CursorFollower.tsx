import React, { useEffect, useRef } from "react";

export const CursorFollower: React.FC = () => {
  const cursorRef = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
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
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const animate = () => {
      // ease toward the cursor…
      posRef.current.x += (cursorRef.current.x - posRef.current.x) * 0.1;
      posRef.current.y += (cursorRef.current.y - posRef.current.y) * 0.1;

      // figure out which way we’re facing
      const deltaX = cursorRef.current.x - posRef.current.x;
      const direction = deltaX >= 0 ? 1 : -1;

      // 👉 dynamically compute “half‐width” so head lines up
      const width = el.clientWidth;
      const offset =
        direction === 1
          ? width // when facing right, head is already at cursor
          : 0; // when facing left, head is offset by its width
      const sideX = direction === 1 ? -offset : offset;

      // apply both translate and flip
      el.style.transform = `
          translate(${posRef.current.x + sideX}px, ${posRef.current.y}px)
          scaleX(${direction})
        `;

      frameRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, []);

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
        pointerEvents: "none",
        zIndex: 9999,
        // no initial transform needed—animation sets it
      }}
    />
  );
};
