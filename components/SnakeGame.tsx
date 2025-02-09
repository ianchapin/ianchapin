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
const UPDATE_INTERVAL = 80; // in milliseconds

// Portal constants.
const PORTAL_SPAWN_INTERVAL = 15000; // Portals appear every 15 seconds.
const PORTAL_DURATION = 10000; // They last for 10 seconds.

// New constant for the number of food dots.
const FOOD_COUNT = 5;

const SnakeGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set up canvas dimensions.
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.width = `${WIDTH}px`;
    canvas.style.height = `${HEIGHT}px`;

    // --- Game State Variables ---
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

    // Function to generate a food cell ensuring it does not appear on the snake.
    function generateFood(): Cell {
      let newFood: Cell;
      while (true) {
        newFood = {
          x: Math.floor(Math.random() * COLS),
          y: Math.floor(Math.random() * ROWS),
        };
        if (!snake.some((cell) => cell.x === newFood.x && cell.y === newFood.y)) {
          break;
        }
      }
      return newFood;
    }

    // Create an array of food dots.
    let foods: Cell[] = [];
    for (let i = 0; i < FOOD_COUNT; i++) {
      foods.push(generateFood());
    }

    // New portal variables.
    let portalA: Cell | null = null;
    let portalB: Cell | null = null;
    let nextPortalSpawn = Date.now() + PORTAL_SPAWN_INTERVAL;
    let portalExpiryTime = 0;

    // Generate a portal ensuring it does not conflict with snake or food.
    function generatePortal(): Cell {
      let newPortal: Cell;
      while (true) {
        newPortal = {
          x: Math.floor(Math.random() * COLS),
          y: Math.floor(Math.random() * ROWS),
        };
        if (
          !snake.some((cell) => cell.x === newPortal.x && cell.y === newPortal.y) &&
          !foods.some((food) => food.x === newPortal.x && food.y === newPortal.y) &&
          (!portalA || (portalA.x !== newPortal.x || portalA.y !== newPortal.y))
        ) {
          break;
        }
      }
      return newPortal;
    }

    // Object to hold currently pressed keys.
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

      // --- Portal Spawning and Expiry ---
      if (!portalA && !portalB && now >= nextPortalSpawn) {
        portalA = generatePortal();
        portalB = generatePortal();
        portalExpiryTime = now + PORTAL_DURATION;
        nextPortalSpawn = now + PORTAL_DURATION + PORTAL_SPAWN_INTERVAL;
      }
      if (portalA && portalB && now >= portalExpiryTime) {
        portalA = null;
        portalB = null;
      }

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
      let newHead: Cell = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y,
      };

      // --- Portal Teleportation ---
      if (portalA && portalB) {
        if (newHead.x === portalA.x && newHead.y === portalA.y) {
          newHead = { ...portalB };
          portalA = null;
          portalB = null;
        } else if (newHead.x === portalB.x && newHead.y === portalB.y) {
          newHead = { ...portalA };
          portalA = null;
          portalB = null;
        }
      }

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

      // Check if snake has eaten any food.
      let ateFood = false;
      for (let i = 0; i < foods.length; i++) {
        if (newHead.x === foods[i].x && newHead.y === foods[i].y) {
          score++;
          foods[i] = generateFood(); // Replace eaten food.
          ateFood = true;
          break; // Only one food is eaten per update.
        }
      }

      if (!ateFood) {
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
        ctx.font = "bold 48px sans-serif";
        ctx.fillText("Welcome to Snake!", WIDTH / 2, HEIGHT / 2 - 140);
        ctx.font = "bold 28px sans-serif";
        ctx.fillText("Press Enter to Start", WIDTH / 2, HEIGHT / 2 - 90);
        ctx.font = "16px sans-serif";
        ctx.fillText("Use the arrow keys to move.", WIDTH / 2, HEIGHT / 2 - 40);
        ctx.fillText("Eat the red dots to grow and score points.", WIDTH / 2, HEIGHT / 2 - 10);
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

      // Draw food dots.
      ctx.fillStyle = "red";
      foods.forEach((food) => {
        ctx.beginPath();
        ctx.arc(
          food.x * CELL_SIZE + CELL_SIZE / 2,
          food.y * CELL_SIZE + CELL_SIZE / 2,
          CELL_SIZE / 2 - 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });

      // Draw portals if they exist.
      if (portalA && portalB) {
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.arc(
          portalA.x * CELL_SIZE + CELL_SIZE / 2,
          portalA.y * CELL_SIZE + CELL_SIZE / 2,
          CELL_SIZE / 2 - 2,
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.arc(
          portalB.x * CELL_SIZE + CELL_SIZE / 2,
          portalB.y * CELL_SIZE + CELL_SIZE / 2,
          CELL_SIZE / 2 - 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      // Draw snake.
      snake.forEach((cell, index) => {
        ctx.fillStyle = index === 0 ? "lightgreen" : "limegreen";
        ctx.fillRect(cell.x * CELL_SIZE, cell.y * CELL_SIZE, CELL_SIZE - 1, CELL_SIZE - 1);
      });

      // Draw score.
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

      // Reset game if game over and the player presses "R".
      if (gameOver && keys["KeyR"]) {
        gameOver = false;
        score = 0;
        snake = [
          { x: Math.floor(COLS / 2), y: Math.floor(ROWS / 2) },
          { x: Math.floor(COLS / 2) - 1, y: Math.floor(ROWS / 2) },
          { x: Math.floor(COLS / 2) - 2, y: Math.floor(ROWS / 2) },
        ];
        direction = { x: 1, y: 0 };
        // Reset foods.
        foods = [];
        for (let i = 0; i < FOOD_COUNT; i++) {
          foods.push(generateFood());
        }
        lastUpdateTime = Date.now();
        // Reset portals.
        portalA = null;
        portalB = null;
        nextPortalSpawn = Date.now() + PORTAL_SPAWN_INTERVAL;
        portalExpiryTime = 0;
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
