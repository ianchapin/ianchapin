"use client";

import React, { useRef, useEffect } from "react";

interface Point {
  x: number;
  y: number;
}

/**
 * The player's ship.
 */
class Ship {
  x: number;
  y: number;
  radius: number;
  angle: number;
  rotation: number;
  thrusting: boolean;
  velocity: Point;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.radius = 20;
    // Start by pointing upward.
    this.angle = -Math.PI / 2;
    this.rotation = 0;
    this.thrusting = false;
    this.velocity = { x: 0, y: 0 };
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    // Draw a triangle for the ship.
    ctx.moveTo(
      this.x + Math.cos(this.angle) * this.radius,
      this.y + Math.sin(this.angle) * this.radius
    );
    ctx.lineTo(
      this.x + Math.cos(this.angle + Math.PI * 0.75) * this.radius,
      this.y + Math.sin(this.angle + Math.PI * 0.75) * this.radius
    );
    ctx.lineTo(
      this.x + Math.cos(this.angle - Math.PI * 0.75) * this.radius,
      this.y + Math.sin(this.angle - Math.PI * 0.75) * this.radius
    );
    ctx.closePath();
    ctx.stroke();

    // Draw a thrust flame when thrusting.
    if (this.thrusting) {
      ctx.beginPath();
      ctx.strokeStyle = "red";
      ctx.moveTo(
        this.x - Math.cos(this.angle) * (this.radius * 0.5),
        this.y - Math.sin(this.angle) * (this.radius * 0.5)
      );
      ctx.lineTo(
        this.x - Math.cos(this.angle) * (this.radius + 10),
        this.y - Math.sin(this.angle) * (this.radius + 10)
      );
      ctx.stroke();
    }
  }

  update(canvasWidth: number, canvasHeight: number) {
    // Rotate the ship.
    this.angle += this.rotation;

    // If thrusting, accelerate in the direction of the ship’s angle.
    // Reduced acceleration: 0.05 instead of 0.1.
    if (this.thrusting) {
      const accel = 0.05;
      this.velocity.x += Math.cos(this.angle) * accel;
      this.velocity.y += Math.sin(this.angle) * accel;
    } else {
      // Apply a little friction.
      this.velocity.x *= 0.99;
      this.velocity.y *= 0.99;
    }

    // Update the position.
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // Wrap around the screen.
    if (this.x < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = 0;
    if (this.y < 0) this.y = canvasHeight;
    if (this.y > canvasHeight) this.y = 0;
  }
}

/**
 * An asteroid. When hit by a bullet, it can split into smaller ones.
 * The constructor accepts a level parameter that increases the asteroid speed.
 */
class Asteroid {
  x: number;
  y: number;
  velocity: Point;
  radius: number;
  offsets: number[];
  numPoints: number;

  constructor(x: number, y: number, radius: number, level: number = 1) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    // Reduced base speed: multiplied by 0.5 to make the asteroids slower.
    const baseSpeed = (1 + Math.random()) * 0.5;
    const speedMultiplier = 1 + (level - 1) * 0.1;
    const speed = baseSpeed * speedMultiplier;
    const angle = Math.random() * Math.PI * 2;
    this.velocity = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed,
    };

    // Pre-generate shape offsets for a consistent jagged look.
    this.numPoints = 10;
    this.offsets = Array.from({ length: this.numPoints }, () => 0.7 + Math.random() * 0.3);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < this.numPoints; i++) {
      const angle = (i / this.numPoints) * Math.PI * 2;
      const r = this.radius * this.offsets[i];
      const x = this.x + Math.cos(angle) * r;
      const y = this.y + Math.sin(angle) * r;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.stroke();
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    // Screen wrapping.
    if (this.x < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = 0;
    if (this.y < 0) this.y = canvasHeight;
    if (this.y > canvasHeight) this.y = 0;
  }
}

/**
 * A bullet fired by the ship.
 */
class Bullet {
  x: number;
  y: number;
  velocity: Point;
  radius: number;
  life: number;
  maxLife: number;

  constructor(x: number, y: number, angle: number) {
    this.x = x;
    this.y = y;
    this.radius = 2;
    const speed = 5;
    this.velocity = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed,
    };
    this.life = 0;
    this.maxLife = 60; // Bullet expires after 60 frames.
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.life++;

    // Screen wrapping.
    if (this.x < 0) this.x = canvasWidth;
    if (this.x > canvasWidth) this.x = 0;
    if (this.y < 0) this.y = canvasHeight;
    if (this.y > canvasHeight) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * Helper function for calculating the distance between two points.
 */
const getDistance = (x1: number, y1: number, x2: number, y2: number): number => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
};

const WIDTH = 800;
const HEIGHT = 600;

const AsteroidsGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // We'll use a fixed container (800×600) for the canvas.
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const mainContainer = containerRef.current;
    if (!canvas || !mainContainer) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set the canvas size (both attribute and CSS) to the fixed dimensions.
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.width = `${WIDTH}px`;
    canvas.style.height = `${HEIGHT}px`;

    const canvasWidth = WIDTH;
    const canvasHeight = HEIGHT;

    // Create the ship, asteroids, and an array for bullets.
    let ship = new Ship(canvasWidth / 2, canvasHeight / 2);
    let asteroids: Asteroid[] = [];
    let bullets: Bullet[] = [];

    // Game state variables.
    let lives = 3;
    let score = 0;
    let level = 1;
    let gameOver = false;
    let respawnTimer = 0; // Invulnerability frames after respawn
    let pauseTimer = 0; // Pause asteroid movement after respawn
    // Variable to control the intro screen.
    let inIntro = true;

    // Define a safe radius around the ship for asteroid spawning.
    const ASTEROID_SAFE_RADIUS = 150;

    /**
     * Spawns a given number of asteroids ensuring they don't spawn too near the ship.
     * The number spawned increases with the level.
     */
    const spawnAsteroids = (num: number) => {
      for (let i = 0; i < num; i++) {
        let x: number, y: number;
        do {
          x = Math.random() * canvasWidth;
          y = Math.random() * canvasHeight;
        } while (getDistance(ship.x, ship.y, x, y) < ASTEROID_SAFE_RADIUS);
        asteroids.push(new Asteroid(x, y, 40, level));
      }
    };

    // Spawn initial asteroids.
    spawnAsteroids(level + 3);

    /**
     * Finds a safe spawn location away from all asteroids.
     */
    const findSafeLocation = (): { x: number; y: number } => {
      const safeDistance = 50; // Additional buffer distance
      for (let i = 0; i < 20; i++) {
        const testX = Math.random() * canvasWidth;
        const testY = Math.random() * canvasHeight;
        let safe = true;
        for (const asteroid of asteroids) {
          if (
            getDistance(testX, testY, asteroid.x, asteroid.y) <
            asteroid.radius + ship.radius + safeDistance
          ) {
            safe = false;
            break;
          }
        }
        if (safe) {
          return { x: testX, y: testY };
        }
      }
      // If a safe spot can't be found, return the center.
      return { x: canvasWidth / 2, y: canvasHeight / 2 };
    };

    /**
     * Resets the game state after a game over.
     */
    const resetGame = () => {
      lives = 3;
      score = 0;
      level = 1;
      gameOver = false;
      respawnTimer = 90; // Extended invulnerability period.
      pauseTimer = 60; // Extended asteroid pause.
      ship = new Ship(canvasWidth / 2, canvasHeight / 2);
      asteroids = [];
      bullets = [];
      spawnAsteroids(level + 3);
    };

    // Input handling.
    const keys: { [key: string]: boolean } = {};

    const keyDownHandler = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      // If we're on the intro screen, only allow "Enter" to start the game.
      if (inIntro) {
        if (e.code === "Enter") {
          inIntro = false;
        }
        return;
      }
      keys[e.code] = true;
      if (e.code === "Space" && !gameOver) {
        const bulletX = ship.x + Math.cos(ship.angle) * ship.radius;
        const bulletY = ship.y + Math.sin(ship.angle) * ship.radius;
        bullets.push(new Bullet(bulletX, bulletY, ship.angle));
      }
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      keys[e.code] = false;
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    let animationFrameId: number;

    /**
     * Update game objects and draw the frame.
     */
    const update = () => {
      // --- Intro Screen ---
      if (inIntro) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        // Title: Bold and large.
        ctx.font = "bold 48px sans-serif";
        ctx.fillText("Welcome to Asteroids!", canvasWidth / 2, canvasHeight / 2 - 120);
        // Instructions: Smaller text.
        ctx.font = "16px sans-serif";
        ctx.fillText("Use the arrow keys to steer and thrust.", canvasWidth / 2, canvasHeight / 2 - 60);
        ctx.fillText("Press Space to fire bullets.", canvasWidth / 2, canvasHeight / 2 - 30);
        ctx.fillText("Avoid or destroy asteroids to earn points.", canvasWidth / 2, canvasHeight / 2);
        ctx.fillText("When all asteroids are destroyed, the level increases.", canvasWidth / 2, canvasHeight / 2 + 30);
        // Start Prompt: Bold and slightly larger.
        ctx.font = "bold 28px sans-serif";
        ctx.fillText("Press Enter to Start", canvasWidth / 2, canvasHeight / 2 + 90);
        return;
      }

      // --- Game ---
      // Clear the canvas.
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      // Game Over screen.
      if (gameOver) {
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold 48px sans-serif";
        ctx.fillText("Game Over", canvasWidth / 2, canvasHeight / 2 - 20);
        ctx.font = "bold 28px sans-serif";
        ctx.fillText(`Final Score: ${score}`, canvasWidth / 2, canvasHeight / 2 + 20);
        ctx.font = "bold 28px sans-serif";
        ctx.fillText("Press R to Restart", canvasWidth / 2, canvasHeight / 2 + 50);
        if (keys["KeyR"]) {
          resetGame();
        }
        return;
      }

      // Decrease timers if active.
      if (respawnTimer > 0) respawnTimer--;
      if (pauseTimer > 0) pauseTimer--;

      // Update ship controls.
      ship.rotation = 0;
      ship.thrusting = false;
      if (keys["ArrowLeft"]) {
        ship.rotation = -0.03;
      }
      if (keys["ArrowRight"]) {
        ship.rotation = 0.03;
      }
      if (keys["ArrowUp"]) {
        ship.thrusting = true;
      }

      // Update and draw the ship.
      ship.update(canvasWidth, canvasHeight);
      ship.draw(ctx);

      // If the ship is in its respawn (invulnerability) period, draw a blinking indicator.
      if (respawnTimer > 0) {
        ctx.beginPath();
        if (Math.floor(respawnTimer / 5) % 2 === 0) {
          ctx.setLineDash([5, 3]);
          ctx.strokeStyle = "cyan";
          ctx.lineWidth = 2;
          ctx.arc(ship.x, ship.y, ship.radius + 10, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      // Update and draw bullets.
      for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        bullet.update(canvasWidth, canvasHeight);
        bullet.draw(ctx);
        if (bullet.life > bullet.maxLife) {
          bullets.splice(i, 1);
        }
      }

      // Update and draw asteroids.
      for (let i = asteroids.length - 1; i >= 0; i--) {
        const asteroid = asteroids[i];
        // If not in pause period, update asteroid position.
        if (pauseTimer <= 0) {
          asteroid.update(canvasWidth, canvasHeight);
        }
        asteroid.draw(ctx);

        // If not in pause period, check for collision with the ship.
        if (pauseTimer <= 0 && respawnTimer <= 0) {
          if (getDistance(ship.x, ship.y, asteroid.x, asteroid.y) < ship.radius + asteroid.radius) {
            lives--;
            if (lives <= 0) {
              gameOver = true;
            } else {
              // Respawn safely.
              const safeLoc = findSafeLocation();
              ship.x = safeLoc.x;
              ship.y = safeLoc.y;
              ship.velocity = { x: 0, y: 0 };
              respawnTimer = 90; // Extended invulnerability period.
              pauseTimer = 60; // Extended asteroid pause.
            }
            break; // Only handle one collision per frame.
          }
        }

        // Check for collisions between bullets and the asteroid.
        for (let j = bullets.length - 1; j >= 0; j--) {
          const bullet = bullets[j];
          if (getDistance(bullet.x, bullet.y, asteroid.x, asteroid.y) < asteroid.radius) {
            let points = 0;
            if (asteroid.radius > 30) {
              points = 20;
            } else if (asteroid.radius > 15) {
              points = 50;
            } else {
              points = 100;
            }
            score += points;
            bullets.splice(j, 1);
            if (asteroid.radius > 15) {
              asteroids.push(new Asteroid(asteroid.x, asteroid.y, asteroid.radius / 2, level));
              asteroids.push(new Asteroid(asteroid.x, asteroid.y, asteroid.radius / 2, level));
            }
            asteroids.splice(i, 1);
            break;
          }
        }
      }

      // If all asteroids are destroyed, increase the level and spawn new ones.
      if (asteroids.length === 0) {
        level++;
        spawnAsteroids(level + 3);
      }

      // Draw the current lives, score, and level (aligned to the top left).
      ctx.fillStyle = "white";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.font = "20px sans-serif";
      ctx.fillText(`Lives: ${lives}    Score: ${score}    Level: ${level}`, 10, 10);
    };

    /**
     * The main game loop.
     */
    const gameLoop = () => {
      update();
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Cleanup event listeners and cancel the animation frame on unmount.
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[800px] h-[600px] bg-black">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};

export default AsteroidsGame;
