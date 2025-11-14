import { useState, useEffect } from "react";
import "./SpeedMeter.css";

export default function App() {
  const [speed, setSpeed] = useState(0);
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ping, setPing] = useState(null);
  const [jitter, setJitter] = useState(null);
  const [theme, setTheme] = useState("dark");

  // -----------------------
  // ⚡ PING + JITTER TEST
  // -----------------------
  async function testPing() {
    let pingResults = [];

    for (let i = 0; i < 5; i++) {
      const start = performance.now();
      await fetch("https://speed.cloudflare.com/__down?bytes=1", { cache: "no-store" });
      const end = performance.now();
      pingResults.push(end - start);
    }

    const avgPing = pingResults.reduce((a, b) => a + b) / pingResults.length;
    const jitterValue =
      avgPing - Math.min(...pingResults);

    setPing(avgPing.toFixed(1));
    setJitter(jitterValue.toFixed(1));
  }

  // -----------------------
  // ⚡ DOWNLOAD SPEED TEST
  // -----------------------
  async function startTest() {
    setTesting(true);
    setSpeed(0);
    setProgress(0);

    await testPing();

    const totalBytes = 100000000; // 100 MB
    const url = `https://speed.cloudflare.com/__down?bytes=${totalBytes}`;

    const startTime = performance.now();

    const response = await fetch(url);
    const reader = response.body.getReader();

    let bytesReceived = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      bytesReceived += value.length;
      setProgress(((bytesReceived / totalBytes) * 100).toFixed(1));

      const elapsed = (performance.now() - startTime) / 1000;
      const megabits = (bytesReceived * 8) / (1024 * 1024);
      const currentSpeed = megabits / elapsed;

      setSpeed(currentSpeed.toFixed(2));
    }

    setTesting(false);
  }

  // -----------------------
  // 🌗 THEME SWITCHING
  // -----------------------
  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="wrapper">

      {/* Theme Toggle */}
      <button className="themeBtn" onClick={toggleTheme}>
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1 className="title">Internet Speed Test</h1>

      {/* -------- Gauge -------- */}
      <div className="gauge">
        <div
          className="needle"
          style={{ transform: `rotate(${(speed / 300) * 180}deg)` }}
        ></div>
        <div className="gauge-center">{speed} Mbps</div>
      </div>

      {/* Progress bar */}
      {testing && (
        <div className="progress-container">
          <div className="progress" style={{ width: progress + "%" }}></div>
        </div>
      )}

      {/* Results */}
      <div className="results">
        <p>Ping: {ping ?? "--"} ms</p>
        <p>Jitter: {jitter ?? "--"} ms</p>
      </div>

      <button className="btn" onClick={startTest} disabled={testing}>
        {testing ? "Testing..." : "Start Test"}
      </button>

    </div>
  );
}
