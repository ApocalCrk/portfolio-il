import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;

const SnakeGame = ({ onClose }) => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(INITIAL_SPEED);
  const gameRef = useRef(null);
  const gameLoopRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    if (gameRef.current) {
      gsap.fromTo(
        gameRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    
    // Set canvas size
    const size = Math.min(300, window.innerWidth - 40);
    canvas.width = size;
    canvas.height = size;
    
    drawGame();
  }, [snake, food, gameOver]);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    
    // Make sure food doesn't spawn on snake
    const isOnSnake = snake.some(segment => 
      segment.x === newFood.x && segment.y === newFood.y
    );
    
    if (isOnSnake) {
      return generateFood();
    }
    
    return newFood;
  }, [snake]);

  const drawGame = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const cellSize = canvas.width / GRID_SIZE;
    
    // Clear canvas
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    if (gameOver) {
      // Draw game over overlay
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2 - 20);
      ctx.font = '16px Arial';
      ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 10);
      return;
    }

    // Draw grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * cellSize, 0);
      ctx.lineTo(i * cellSize, canvas.height);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(0, i * cellSize);
      ctx.lineTo(canvas.width, i * cellSize);
      ctx.stroke();
    }

    // Draw snake
    snake.forEach((segment, index) => {
      if (index === 0) {
        // Head
        ctx.fillStyle = '#059669';
        ctx.fillRect(
          segment.x * cellSize + 1,
          segment.y * cellSize + 1,
          cellSize - 2,
          cellSize - 2
        );
      } else {
        // Body
        ctx.fillStyle = '#10b981';
        ctx.fillRect(
          segment.x * cellSize + 1,
          segment.y * cellSize + 1,
          cellSize - 2,
          cellSize - 2
        );
      }
    });

    // Draw food
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(
      food.x * cellSize + cellSize / 2,
      food.y * cellSize + cellSize / 2,
      cellSize / 2 - 2,
      0,
      2 * Math.PI
    );
    ctx.fill();
  };

  const moveSnake = useCallback(() => {
    if (!isGameStarted || gameOver || direction.x === 0 && direction.y === 0) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };
      
      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        return prevSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
        
        // Increase speed slightly
        setGameSpeed(prev => Math.max(80, prev - 5));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, isGameStarted, gameOver, food, generateFood]);

  useEffect(() => {
    if (isGameStarted && !gameOver) {
      gameLoopRef.current = setInterval(moveSnake, gameSpeed);
    } else {
      clearInterval(gameLoopRef.current);
    }

    return () => clearInterval(gameLoopRef.current);
  }, [isGameStarted, gameOver, moveSnake, gameSpeed]);

  const handleKeyPress = useCallback((e) => {
    if (!isGameStarted && e.key !== ' ') return;
    
    if (!isGameStarted && e.key === ' ') {
      setIsGameStarted(true);
      setDirection({ x: 1, y: 0 });
      return;
    }

    if (gameOver) return;

    switch (e.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 });
        break;
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 });
        break;
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 });
        break;
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 });
        break;
      default:
        break;
    }
  }, [direction, isGameStarted, gameOver]);

  const handleTouchStart = useCallback((e) => {
    if (!isGameStarted) {
      setIsGameStarted(true);
      setDirection({ x: 1, y: 0 });
      return;
    }
    
    if (gameOver) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    const deltaX = touchX - centerX;
    const deltaY = touchY - centerY;
    
    // Determine swipe direction
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (deltaX > 0 && direction.x === 0) {
        setDirection({ x: 1, y: 0 }); // Right
      } else if (deltaX < 0 && direction.x === 0) {
        setDirection({ x: -1, y: 0 }); // Left
      }
    } else {
      // Vertical swipe
      if (deltaY > 0 && direction.y === 0) {
        setDirection({ x: 0, y: 1 }); // Down
      } else if (deltaY < 0 && direction.y === 0) {
        setDirection({ x: 0, y: -1 }); // Up
      }
    }
  }, [direction, isGameStarted, gameOver]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setDirection({ x: 0, y: 0 });
    setGameOver(false);
    setScore(0);
    setIsGameStarted(false);
    setGameSpeed(INITIAL_SPEED);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          ref={gameRef}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Snake Game
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {isMobile() ? 'Touch to swipe' : 'Use arrow keys'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Score */}
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              {score}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Score
            </div>
          </div>

          {/* Game Canvas */}
          <div className="flex justify-center mb-6">
            <canvas
              ref={canvasRef}
              onTouchStart={handleTouchStart}
              className="border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer"
              style={{ touchAction: 'none' }}
            />
          </div>

          {/* Game Status */}
          {!isGameStarted && !gameOver && (
            <div className="text-center mb-4">
              <p className="text-gray-600 dark:text-gray-400">
                {isMobile() ? 'Touch the screen to start' : 'Press SPACE to start'}
              </p>
            </div>
          )}

          {gameOver && (
            <div className="text-center mb-6">
              <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
                Game Over!
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{score}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Final Score</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{snake.length}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Length</div>
                </div>
              </div>
            </div>
          )}

          {/* Controls */}
          {isMobile() && (
            <div className="mb-6">
              <div className="grid grid-cols-3 gap-2 max-w-[180px] mx-auto">
                <div></div>
                <button
                  onClick={() => {
                    if (!isGameStarted) {
                      setIsGameStarted(true);
                      setDirection({ x: 1, y: 0 });
                    } else if (direction.y === 0) {
                      setDirection({ x: 0, y: -1 });
                    }
                  }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-xl font-bold"
                  disabled={gameOver}
                >
                  ↑
                </button>
                <div></div>
                <button
                  onClick={() => {
                    if (!isGameStarted) {
                      setIsGameStarted(true);
                      setDirection({ x: 1, y: 0 });
                    } else if (direction.x === 0) {
                      setDirection({ x: -1, y: 0 });
                    }
                  }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-xl font-bold"
                  disabled={gameOver}
                >
                  ←
                </button>
                <button
                  onClick={() => {
                    if (!isGameStarted) {
                      setIsGameStarted(true);
                      setDirection({ x: 1, y: 0 });
                    }
                  }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-bold"
                  disabled={gameOver}
                >
                  {isGameStarted ? '⏸' : '▶'}
                </button>
                <button
                  onClick={() => {
                    if (!isGameStarted) {
                      setIsGameStarted(true);
                      setDirection({ x: 1, y: 0 });
                    } else if (direction.x === 0) {
                      setDirection({ x: 1, y: 0 });
                    }
                  }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-xl font-bold"
                  disabled={gameOver}
                >
                  →
                </button>
                <div></div>
                <button
                  onClick={() => {
                    if (!isGameStarted) {
                      setIsGameStarted(true);
                      setDirection({ x: 1, y: 0 });
                    } else if (direction.y === 0) {
                      setDirection({ x: 0, y: 1 });
                    }
                  }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 text-xl font-bold"
                  disabled={gameOver}
                >
                  ↓
                </button>
                <div></div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={resetGame}
              className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
            >
              {gameOver ? 'Play Again' : 'Reset'}
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-gray-900 dark:text-white"
            >
              Close
            </button>
          </div>

          {/* Instructions */}
          <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
              {isMobile() 
                ? '💡 Swipe on screen or use buttons to control the snake' 
                : '💡 Use arrow keys to control the snake'
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SnakeGame;
