import { useEffect, useRef, useState } from "react";

export default function BubbleBackground() {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const orbs = [
    { size: "w-[400px] h-[400px]", pos: "top-[-10%] left-[-10%]", color: "#1a4fff66", delay: "0s", anim: "animate-float-slow" },
    { size: "w-[300px] h-[300px]", pos: "bottom-[10%] right-[10%]", color: "#0033ff55", delay: "2s", anim: "animate-float-medium" },
    { size: "w-[500px] h-[500px]", pos: "top-[40%] left-[60%]", color: "#00339944", delay: "4s", anim: "animate-float-fast" },
    { size: "w-[250px] h-[250px]", pos: "top-[20%] right-[-5%]", color: "#0a2a8a77", delay: "1s", anim: "animate-float-medium" },
    { size: "w-[350px] h-[350px]", pos: "bottom-[-15%] left-[30%]", color: "#1a5cff44", delay: "3s", anim: "animate-float-slow" },
    { size: "w-[200px] h-[200px]", pos: "top-[60%] left-[15%]", color: "#1a4fff88", delay: "5s", anim: "animate-float-fast" },
    { size: "w-[450px] h-[450px]", pos: "bottom-[20%] right-[40%]", color: "#0033ff33", delay: "6s", anim: "animate-float-slow" },
    { size: "w-[300px] h-[300px]", pos: "top-[5%] left-[40%]", color: "#0a2a8a55", delay: "7s", anim: "animate-float-medium" },
  ];

  // Bolhas que seguem o cursor
  const cursorBubbles = [
    { size: 180, color: "#3b82f655", blur: 80, offsetX: 0, offsetY: 0, speed: 0.12 },
    { size: 120, color: "#6366f155", blur: 60, offsetX: 40, offsetY: -30, speed: 0.08 },
    { size: 90, color: "#818cf855", blur: 50, offsetX: -50, offsetY: 40, speed: 0.05 },
  ];

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden bg-[#020810] bg-gradient-to-tr from-black via-[#020d1f] to-black">
      {/* Orbs estáticos animados */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${orb.size} ${orb.pos} ${orb.anim}`}
          style={{
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(90px)",
            animationDelay: orb.delay,
          }}
        />
      ))}

      {/* Bolhas que seguem o cursor */}
      {cursorBubbles.map((bubble, i) => (
        <CursorBubble key={`cursor-${i}`} mousePos={mousePos} {...bubble} />
      ))}

      {/* Brilho suave no cursor */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          transition: "left 0.3s ease-out, top 0.3s ease-out",
        }}
      />
    </div>
  );
}

// Componente separado para cada bolha que segue o mouse com delay
function CursorBubble({ mousePos, size, color, blur, offsetX, offsetY, speed }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    function animate() {
      const targetX = mousePos.x + offsetX;
      const targetY = mousePos.y + offsetY;

      posRef.current.x += (targetX - posRef.current.x) * speed;
      posRef.current.y += (targetY - posRef.current.y) * speed;

      setPos({ x: posRef.current.x, y: posRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [mousePos, offsetX, offsetY, speed]);

  return (
    <div
      className="pointer-events-none absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: pos.x - size / 2,
        top: pos.y - size / 2,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
