import { useState } from "react";

export default function BirthdayBook() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffd6e8, #fff0f8)",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Balloons and Confetti */}
      {open && (
        <div className="celebration">
          {/* Balloons with sticks */}
          {[...Array(8)].map((_, i) => (
            <div key={`balloon-${i}`} className={`balloon balloon-${i}`}>
              <div className="stick" />
            </div>
          ))}
          {/* Confetti */}
          {[...Array(50)].map((_, i) => (
            <div key={`confetti-${i}`} className={`confetti confetti-${i}`} />
          ))}
        </div>
      )}

      <div className="book-wrapper" onClick={handleClick}>
        <div className={`book ${open ? "open" : ""}`}>
          {/* LEFT PAGE */}
          <div className={`page left ${open ? "fade-in" : ""}`}>
            {open && (
              <div style={{ padding: "2px" }}>
                <h2 style={{ color: "#e91e63" }}>🎉 Happy Birthday!</h2>
                <p style={{  color: "#444" }}>
                Thank you so much for being so kind and patient with us devs! 
                You’re the absolute best Project Manager we’ve ever had, and we
                 could ask for nothing more 😍. May your kindness and good vibes 
                 spread everywhere you go. May your heart’s deepest desires come 
                 true because you truly deserve them. May God bless you always, Miss 😘. <br/>

            Amping ikaw perme! 🥰
                </p>
              </div>
            )}
          </div>

          {/* RIGHT PAGE */}
          <div className={`page right ${open ? "fade-in" : ""}`}>
            {open && (
              <img
                src="/celebrant.jpg"
                alt="Birthday"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            )}
          </div>

          {/* FRONT COVER */}
          <div className={`cover ${open ? "cover-open" : ""}`}>
            {!open && (
              <>
                <img
                  src="/candle3.png"
                  alt="Birthday Cake"
                  style={{ width: "150px", height: "150px" }}
                />
                <p style={{ color: "#fff", marginTop: "15px" }}>Blow your candle by clicking</p>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .book-wrapper {
          width: 600px;
          height: 400px;
          perspective: 1500px;
          cursor: pointer;
        }

        .book {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          display: flex;
        }

        .cover {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, #ff4081, #ff80ab);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 5;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          transform-origin: left;
          transition: transform 1.2s ease, opacity 1s ease;
        }

        .cover-open {
          transform: rotateY(-180deg);
          opacity: 0;
        }

        .page {
          width: 50%;
          height: 100%;
          background: #fffdfa;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
          border-radius: 0 0 8px 8px;
          overflow: hidden;
          opacity: 0;
          transform: rotateY(0deg);
          transition: opacity 1s ease, transform 1s ease;
        }

        .fade-in {
          opacity: 1;
          transform: rotateY(0deg);
        }

        .left {
          border-right: 1px solid #eee;
        }

        .right {
          border-left: 1px solid #eee;
        }

        /* Celebration Container */
        .celebration {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 3;
          overflow: hidden;
        }

        /* Balloons */
        .balloon {
          position: absolute;
          bottom: -80px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          opacity: 0.9;
          animation: floatBalloon 8s linear infinite;
        }

        .stick {
          position: absolute;
          bottom: -60px;
          width: 2px;
          height: 60px;
          background: #555;
          left: 50%;
          transform: translateX(-50%);
        }

        ${[...Array(8)].map((_, i) => {
          const left = Math.random() * 90 + 5;
          const delay = Math.random() * 4;
          const duration = 6 + Math.random() * 4;
          const color = ["#ff4081","#ff80ab","#ffeb3b","#4caf50","#2196f3","#9c27b0","#ff5722","#00bcd4"][i];
          return `
            .balloon-${i} {
              left: ${left}%;
              background-color: ${color};
              animation-delay: ${delay}s;
              animation-duration: ${duration}s;
            }
          `;
        }).join("\n")}

        @keyframes floatBalloon {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-50vh) rotate(15deg); }
          100% { transform: translateY(-100vh) rotate(-15deg); }
        }

        /* Confetti */
        .confetti {
          position: absolute;
          width: 6px;
          height: 6px;
          background: red;
          opacity: 0.9;
          top: 0;
          animation-name: confettiFall;
          animation-timing-function: ease-out;
          animation-iteration-count: infinite;
        }

        ${[...Array(50)].map((_, i) => {
          const left = Math.random() * 100;
          const duration = 2 + Math.random() * 3;
          const delay = Math.random() * 5;
          const colors = ["#ff4081","#ff80ab","#ffeb3b","#4caf50","#2196f3","#9c27b0","#ff5722","#00bcd4"];
          const color = colors[Math.floor(Math.random() * colors.length)];
          return `
            .confetti-${i} {
              left: ${left}%;
              background-color: ${color};
              animation-duration: ${duration}s;
              animation-delay: ${delay}s;
            }
          `;
        }).join("\n")}

        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
