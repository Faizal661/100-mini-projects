import { useEffect, useCallback } from "react";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

const MeteorBackground = () => {
  const createMeteor = useCallback(() => {
    if (typeof document !== "undefined") {
      const meteor = document.createElement("div");

      // Random starting position
      const startX = Math.random() * 200 - 100;
      const duration = 2 + Math.random() * 6;
      const size = 1.5 + Math.random() * 2;

      meteor.className = `
        absolute rounded-full bg-white pointer-events-none
        animate-meteor
      `;

      meteor.style.top = `${startX}vh`;
      meteor.style.width = `${size}px`;
      meteor.style.height = `${size}px`;
      meteor.style.boxShadow = "0 0 4px rgb(255, 255, 255)";
      meteor.style.animationDuration = `${duration}s`;

      const container = document.getElementById("meteorContainer");
      container?.appendChild(meteor);

      setTimeout(() => {
        meteor.remove();
      }, duration * 1000);
    }
  }, []);

  useEffect(() => {
    // Create initial meteors
    for (let i = 0; i < 50; i++) {
      createMeteor();
    }

    // Create new meteors periodically
    // const interval = setInterval(createMeteor, 200);

    return () => {
    //   clearInterval(interval);
    };
  }, [createMeteor]);

  return (
    <>
      <div className="fixed -z-50 inset-0 bg-gradient-to-br from-[#343436] via-[#221010] to-black overflow-hidden">
        <div id="meteorContainer" className="fixed w-full h-full" />
      </div>
      <style jsx global>{`
        @keyframes meteor {
          0% {
            transform: translate(140vw, -10vh);
          }
          100% {
            transform: translate(-10vw, 110vh);
          }
        }
        .animate-meteor {
          animation: meteor linear infinite;
        }
      `}</style>
    </>
  );
};

export default MeteorBackground;
