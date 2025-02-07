"use client";

import React, { useRef, useEffect } from "react";

interface Cell {
  x: number;
  y: number;
}

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;
const COLS = WIDTH / CELL_SIZE; // 40
const ROWS = HEIGHT / CELL_SIZE; // 30
// A shorter update interval for more responsive gameplay.
const UPDATE_INTERVAL = 80; // in milliseconds

const SnakeGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set the canvas size (both attribute and CSS) to the fixed dimensions.
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.width = `${WIDTH}px`;
    canvas.style.height = `${HEIGHT}px`;

    // --- Game state variables ---
    let inIntro = true;
    let gameOver = false;
    let score = 0;
    let lastUpdateTime = Date.now();

    // The snake is represented as an array of cells.
    let snake: Cell[] = [
      { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
      { x: Math.floor(COLS / 2) - 1, y: Math.floor(ROWS / 2) },
      { x: Math.floor(COLS / 2) - 2, y: Math.floor(ROWS / 2) },
    ];
    // Initial direction (to the right)
    let direction: Cell = { x: 1, y: 0 };

    // Place initial food.
    let food: Cell = generateFood();

    function generateFood(): Cell {
      let newFood: Cell;
      while (true) {
        newFood = {
          x: Math.floor(Math.random() * COLS),
          y: Math.floor(Math.random() * ROWS),
        };
        // Ensure food is not on the snake.
        if (!snake.some((cell) => cell.x === newFood.x && cell.y === newFood.y)) {
          break;
        }
      }
      return newFood;
    }

    // Object to hold keys currently pressed.
    const keys: { [key: string]: boolean } = {};

    // Prevent page scrolling when pressing arrow keys, space, enter, or R.
    const keyDownHandler = (e: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space", "Enter", "KeyR"].includes(
          e.code
        )
      ) {
        e.preventDefault();
      }
      // If on the intro screen, only respond to Enter.
      if (inIntro) {
        if (e.code === "Enter") {
          inIntro = false;
          lastUpdateTime = Date.now();
        }
        return;
      }
      keys[e.code] = true;
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space", "Enter", "KeyR"].includes(
          e.code
        )
      ) {
        e.preventDefault();
      }
      keys[e.code] = false;
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    function update() {
      if (inIntro || gameOver) return;
      const now = Date.now();
      if (now - lastUpdateTime < UPDATE_INTERVAL) return;
      lastUpdateTime = now;

      // Update direction based on key presses (disallow reversing).
      if (keys["ArrowUp"] && direction.y !== 1) {
        direction = { x: 0, y: -1 };
      } else if (keys["ArrowDown"] && direction.y !== -1) {
        direction = { x: 0, y: 1 };
      } else if (keys["ArrowLeft"] && direction.x !== 1) {
        direction = { x: -1, y: 0 };
      } else if (keys["ArrowRight"] && direction.x !== -1) {
        direction = { x: 1, y: 0 };
      }

      // Calculate new head position.
      const newHead: Cell = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y,
      };

      // Check for collisions with walls.
      if (newHead.x < 0 || newHead.x >= COLS || newHead.y < 0 || newHead.y >= ROWS) {
        gameOver = true;
        return;
      }

      // Check for self-collision.
      if (snake.some((cell) => cell.x === newHead.x && cell.y === newHead.y)) {
        gameOver = true;
        return;
      }

      // Add new head to snake.
      snake.unshift(newHead);

      // Check if snake has eaten food.
      if (newHead.x === food.x && newHead.y === food.y) {
        score++;
        food = generateFood();
      } else {
        // Remove tail cell.
        snake.pop();
      }
    }

    function draw(ctx: CanvasRenderingContext2D) {
      // Clear canvas.
      ctx.fillStyle = "#222";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      // Intro Screen.
      if (inIntro) {
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // Title: Bold and large.
        ctx.font = "bold 48px sans-serif";
        ctx.fillText("Welcome to Snake!", WIDTH / 2, HEIGHT / 2 - 140);
        // Start Prompt: Bold and slightly larger.
        ctx.font = "bold 28px sans-serif";
        ctx.fillText("Press Enter to Start", WIDTH / 2, HEIGHT / 2 - 90);
        // Instructions: Smaller text.
        ctx.font = "16px sans-serif";
        ctx.fillText("Use the arrow keys to move.", WIDTH / 2, HEIGHT / 2 - 40);
        ctx.fillText("Eat the red food to grow and score points.", WIDTH / 2, HEIGHT / 2 - 10);
        ctx.fillText("Avoid the walls and yourself!", WIDTH / 2, HEIGHT / 2 + 20);
        return;
      }

      // Game Over Screen.
      if (gameOver) {
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 48px sans-serif";
        ctx.fillText("Game Over", WIDTH / 2, HEIGHT / 2 - 20);
        ctx.font = "bold 28px sans-serif";
        ctx.fillText(`Score: ${score}`, WIDTH / 2, HEIGHT / 2 + 20);
        ctx.fillText("Press R to Restart", WIDTH / 2, HEIGHT / 2 + 60);
        return;
      }

      // Draw food (red circle).
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(
        food.x * CELL_SIZE + CELL_SIZE / 2,
        food.y * CELL_SIZE + CELL_SIZE / 2,
        CELL_SIZE / 2 - 2,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Draw snake (green squares).
      snake.forEach((cell, index) => {
        ctx.fillStyle = index === 0 ? "lightgreen" : "limegreen";
        ctx.fillRect(cell.x * CELL_SIZE, cell.y * CELL_SIZE, CELL_SIZE - 1, CELL_SIZE - 1);
      });

      // Draw score in top-left.
      ctx.fillStyle = "white";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.font = "20px sans-serif";
      ctx.fillText(`Score: ${score}`, 10, 10);
    }

    function loop() {
      if (!canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      update();
      draw(ctx);

      // Reset game if game over and player presses "R".
      if (gameOver && keys["KeyR"]) {
        gameOver = false;
        score = 0;
        snake = [
          { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
          { x: Math.floor(COLS / 2) - 1, y: Math.floor(ROWS / 2) },
          { x: Math.floor(COLS / 2) - 2, y: Math.floor(ROWS / 2) },
        ];
        direction = { x: 1, y: 0 };
        food = generateFood();
        lastUpdateTime = Date.now();
      }
      requestAnimationFrame(loop);
    }
    loop();

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return (  
    <div ref={containerRef} className="relative w-[800px] h-[600px] bg-black">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default SnakeGame;
