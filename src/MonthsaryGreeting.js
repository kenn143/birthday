import { useEffect } from "react";

export default function MonthsarySurprise() {
  // 💫 Add animation styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeIn {
        0% { opacity: 0; transform: scale(0.9); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes floatHeartUp {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-800px) scale(1.5); opacity: 0; }
      }
      @keyframes floatHeartInside {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-420px) scale(1.4); opacity: 0; }
      }
      @keyframes glow {
        0%, 100% { text-shadow: 0 0 10px #ff4081, 0 0 20px #ff80ab; }
        50% { text-shadow: 0 0 25px #ff4081, 0 0 40px #ff80ab; }
      }
      @keyframes zoomInOut {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.08); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  // ❤️ Hearts floating upward around the screen
  const createOuterHearts = () => {
    const hearts = [];
    const emojis = ["❤️", "💖", "💘", "💞", "💕", "💗"];
    for (let i = 0; i < 120; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 6;
      const size = Math.random() * 20 + 10;
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];

      hearts.push(
        <span
          key={`outer-${i}`}
          style={{
            position: "absolute",
            bottom: "-60px",
            left: `${left}%`,
            fontSize: `${size}px`,
            opacity: 0.85,
            animation: `floatHeartUp ${4 + Math.random() * 5}s linear infinite`,
            animationDelay: `${delay}s`,
            filter: "drop-shadow(0 0 6px rgba(255, 0, 120, 0.5))",
            zIndex: 1,
          }}
        >
          {emoji}
        </span>
      );
    }
    return hearts;
  };

  // 💕 Hearts floating inside the image
  const createInnerHearts = () => {
    const hearts = [];
    const emojis = ["❤️", "💖", "💘", "💕", "💗"];
    for (let i = 0; i < 60; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 4;
      const size = Math.random() * 18 + 10;
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];

      hearts.push(
        <span
          key={`inner-${i}`}
          style={{
            position: "absolute",
            bottom: "-30px",
            left: `${left}%`,
            fontSize: `${size}px`,
            opacity: 0.9,
            animation: `floatHeartInside ${3 + Math.random() * 4}s linear infinite`,
            animationDelay: `${delay}s`,
            filter: "drop-shadow(0 0 5px rgba(255, 0, 100, 0.6))",
          }}
        >
          {emoji}
        </span>
      );
    }
    return hearts;
  };

  // 🌸 Container & card styles
  const containerStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #ffb6c1, #ffe6f2)",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
    padding: "20px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    textAlign: "center",
    maxWidth: "380px",
    width: "100%",
    animation: "fadeIn 1s ease-out",
    zIndex: 5,
  };

  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "420px",
    overflow: "hidden",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    animation: "zoomInOut 10s ease-in-out infinite",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#e91e63",
    marginBottom: "10px",
    animation: "glow 2s infinite",
  };

  const messageStyle = {
    color: "#444",
    fontSize: "1rem",
    lineHeight: 1.6,
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      {/* ❤️ Hearts floating all around */}
      {createOuterHearts()}

      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          {/* 💑 Your romantic picture here */}
          <img src="/monthsary.jpg" alt="Our Memory" style={imageStyle} />

          {/* 💕 Hearts floating inside the image */}
          {createInnerHearts()}
        </div>

        <h1 style={titleStyle}>💖 Happy Monthsary, My Pal! 💖</h1>
        <p style={messageStyle}>
          Every moment with you is a treasure — 
          every smile, every touch, every heartbeat.  
          My heart floats to you, inside and out. ❤️  
          I’m so thankful for you, today and always. 💞
        </p>
      </div>
    </div>
  );
}
