import React, { useState, useEffect } from "react";

export default function App() {
  const [multiplier, setMultiplier] = useState(1);
  const [crashed, setCrashed] = useState(false);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running && !crashed) {
      interval = setInterval(() => {
        setMultiplier(prev => {
          const next = +(prev * (1 + Math.random() * 0.02)).toFixed(2);
          if (next > Math.random() * 50) {
            setCrashed(true);
            clearInterval(interval);
            return prev;
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [running, crashed]);

  const startSurge = () => {
    setMultiplier(1);
    setCrashed(false);
    setRunning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-neon-green font-mono">
      <h1 className="text-4xl mb-6">⚡ Neon Surge</h1>
      <div className={`text-5xl ${crashed ? "text-red-500" : "text-green-400"}`}>
        {crashed ? "💥 CRASHED 💥" : `${multiplier.toFixed(2)}x`}
      </div>
      <div className="mt-8">
        <button
          onClick={startSurge}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black rounded-xl shadow-xl transition-all"
        >
          Start Surge
        </button>
      </div>
    </div>
  );
}
