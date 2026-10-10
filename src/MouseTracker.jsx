import { useState, useEffect } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>X: {position.x}px</p>
      <p>Y: {position.y}px</p>
    </div>
  );
};

export default MouseTracker;