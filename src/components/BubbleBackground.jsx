export default function BubbleBackground() {
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

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020810] bg-gradient-to-tr from-black via-[#020d1f] to-black">
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
    </div>
  );
}
