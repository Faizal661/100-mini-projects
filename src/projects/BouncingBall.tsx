"use client";

import { useEffect, useRef } from "react";

const BouncingBall = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ball = {
      x: canvas.width / 2,
      y: -canvas.height+10,
      radius: 20,
      dx: 9,
      dy: 8,
      color: "#ef820d",
    };

    const gravity = 0.98;
    const friction = 0.95;
    const minBounceThreshold = 0.3;
    let animationFrameId:number;

    function drawBall() {
      if (!ctx) return;

      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.color;
      ctx.fill();
      ctx.closePath();
    }

    function animate() {
      if (!canvas) return;
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      ball.dy += gravity;

      ball.x += ball.dx;
      ball.y += ball.dy;

      if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius; 
        ball.dx = -ball.dx * friction; 
      } else if (ball.x - ball.radius < 0) {
        ball.x = ball.radius; 
        ball.dx = -ball.dx * friction; 
      }

      if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius; 
        ball.dy = -ball.dy * friction;
      }

      // Hit the ceiling
      if (ball.y - ball.radius < 0) {
        ball.y = ball.radius; // Reposition
        ball.dy = -ball.dy * friction; // Reverse direction and apply friction
      }

      const onGround = Math.abs(ball.y + ball.radius - canvas.height) < 1; 
      const verticalVelocityLow = Math.abs(ball.dy) < minBounceThreshold; 

      if (onGround && verticalVelocityLow) {
        ball.dy = 0; 
        ball.dx = 0; 
        ball.y = canvas.height - ball.radius; 
      } else {
        animationFrameId = requestAnimationFrame(animate);
      }

      // requestAnimationFrame(animate);

      drawBall();
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      ball.x = canvas.width / 2;
      ball.y = canvas.height / 2;

      drawBall();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-slate-800 p-4 rounded-t-lg">
        <h2 className="text-xl text-white font-semibold">
          Bouncing Ball Animation
        </h2>
        <p className="text-gray-300 text-sm">
          A simple physics simulation of a bouncing ball with gravity and
          friction.
        </p>
      </div>
      <div className="flex-grow bg-slate-700 rounded-b-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-[40dvh]"
          style={{ touchAction: "none" }}
        />
      </div>
    </div>
  );
};

export default BouncingBall;
