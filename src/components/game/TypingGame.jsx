import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const wordsList = [
  'developer', 'portfolio', 'javascript', 'typescript', 'react', 'flutter',
  'laravel', 'python', 'algorithm', 'database', 'creative', 'innovative',
  'responsive', 'dynamic', 'performance', 'optimization', 'debugging', 
  'architecture', 'component', 'function', 'variable', 'constant', 'interface',
  'design', 'code', 'build', 'deploy', 'test', 'debug', 'refactor', 'commit',
  'merge', 'branch', 'clone', 'push', 'pull', 'fetch', 'reset', 'rebase',
  'frontend', 'backend', 'fullstack', 'graphql', 'redux', 'jest', 'webpack', 'vite',
  'docker', 'kubernetes', 'microservices', 'authentication', 'authorization', 'oauth',
  'jwt', 'rest', 'api', 'json', 'html', 'css', 'sass', 'tailwind', 'bootstrap',
  'materialui', 'accessibility', 'ux', 'ui', 'seo', 'analytics', 'logging', 'monitoring',
  'sentry', 'prometheus', 'testing', 'unittest', 'integration', 'e2e', 'storybook',
  'cli', 'terminal', 'shell', 'bash', 'zsh', 'sql', 'nosql', 'mongodb', 'postgresql', 'mysql',
  'concurrency', 'asynchronous', 'promise', 'callback', 'eventloop', 'performance', 'latency',
  'throughput', 'scalability', 'cache', 'redis', 'memcached', 'encryption', 'hashing', 'token',
  'pipeline', 'orchestration', 'automation', 'observability'
];

const generateWords = (count) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(wordsList[Math.floor(Math.random() * wordsList.length)]);
  }
  return result;
};

const TypingGame = ({ onClose }) => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState('');
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameActive, setIsGameActive] = useState(true);
  const [completedWords, setCompletedWords] = useState(0);
  const inputRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    setWords(generateWords(50));
    inputRef.current?.focus();
    
    if (gameRef.current) {
      gsap.fromTo(
        gameRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && isGameActive) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
    }
  }, [timeLeft, isGameActive]);

  const handleInputChange = (e) => {
    if (!isGameActive) return;
    
    const value = e.target.value;
    const currentWord = words[currentWordIndex];
    
    // Check if space is pressed (word completed)
    if (value.endsWith(' ')) {
      const typedWord = value.trim();
      
      if (typedWord === currentWord) {
        setCorrectChars(prev => prev + currentWord.length);
        setCompletedWords(prev => prev + 1);
      } else {
        // Count correct and incorrect characters
        for (let i = 0; i < Math.max(typedWord.length, currentWord.length); i++) {
          if (typedWord[i] === currentWord[i]) {
            setCorrectChars(prev => prev + 1);
          } else {
            setIncorrectChars(prev => prev + 1);
          }
        }
      }
      
      setCurrentInput('');
      setCurrentWordIndex(prev => prev + 1);
      
      // Generate more words if needed
      if (currentWordIndex >= words.length - 10) {
        setWords(prev => [...prev, ...generateWords(20)]);
      }
    } else {
      setCurrentInput(value);
    }
  };

  const getCharClass = (wordIndex, charIndex) => {
    if (wordIndex < currentWordIndex) {
      return 'text-gray-400 dark:text-gray-600'; // completed words
    }
    if (wordIndex === currentWordIndex) {
      if (charIndex < currentInput.length) {
        return currentInput[charIndex] === words[wordIndex][charIndex]
          ? 'text-gray-900 dark:text-white' // correct
          : 'text-white bg-gray-900 dark:text-black dark:bg-white'; // incorrect
      }
      if (charIndex === currentInput.length) {
        return 'border-l-2 border-gray-900 dark:border-white'; // cursor
      }
    }
    return 'text-gray-400 dark:text-gray-600'; // upcoming
  };

  const calculateWPM = () => {
    const minutes = (60 - timeLeft) / 60;
    if (minutes === 0) return 0;
    return Math.round(completedWords / minutes);
  };

  const calculateAccuracy = () => {
    const total = correctChars + incorrectChars;
    if (total === 0) return 100;
    return Math.round((correctChars / total) * 100);
  };

  const resetGame = () => {
    setWords(generateWords(50));
    setCurrentWordIndex(0);
    setCurrentInput('');
    setCorrectChars(0);
    setIncorrectChars(0);
    setTimeLeft(60);
    setIsGameActive(true);
    setCompletedWords(0);
    inputRef.current?.focus();
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div 
          ref={gameRef}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full p-8 border border-gray-200 dark:border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                ⌨️ Typing Challenge
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">MonkeyType-style word typing test</p>
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

          {isGameActive ? (
            <>
              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{timeLeft}s</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Time</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-black dark:text-white">{completedWords}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Words</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-black dark:text-white">{calculateWPM()}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">WPM</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-black dark:text-white">{calculateAccuracy()}%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Accuracy</div>
                </div>
              </div>

              {/* Word Display - MonkeyType Style */}
              <div className="mb-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 min-h-[200px] relative overflow-hidden">
                <div className="text-2xl leading-relaxed font-mono">
                  {words.slice(0, 30).map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block mr-3 mb-2">
                      {word.split('').map((char, charIndex) => (
                        <span
                          key={charIndex}
                          className={`${getCharClass(wordIndex, charIndex)} transition-colors duration-100`}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  ))}
                </div>
                {/* Invisible input for capturing typing */}
                <input
                  ref={inputRef}
                  type="text"
                  value={currentInput}
                  onChange={handleInputChange}
                  className="absolute inset-0 opacity-0 cursor-default"
                  autoComplete="off"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </div>

              {/* Focus hint */}
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                {currentInput === '' && 'Click anywhere and start typing...'}
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black dark:bg-white transition-all duration-1000 ease-linear"
                    style={{ width: `${(timeLeft / 60) * 100}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Game Over */}
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Test Complete!</h3>
                
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="text-4xl font-bold text-black dark:text-white">{calculateWPM()}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">WPM</div>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="text-4xl font-bold text-black dark:text-white">{calculateAccuracy()}%</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Accuracy</div>
                  </div>
                  <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="text-4xl font-bold text-black dark:text-white">{completedWords}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Words</div>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl inline-block">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-gray-900 dark:text-white font-semibold">{correctChars}</span> correct · 
                    <span className="text-gray-900 dark:text-white font-semibold">{incorrectChars}</span> incorrect characters
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={resetGame}
                    className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-xl hover:scale-105 transition-transform font-medium"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={onClose}
                    className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-gray-900 dark:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Instructions */}
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
              💡 <strong>Tip:</strong> Type each word and press <kbd className="px-2 py-1 bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-700 font-mono text-xs">SPACE</kbd> to move to the next word
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypingGame;
