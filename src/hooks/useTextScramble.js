import { useState, useEffect, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>{}[]";

export function useTextScramble(finalText, enabled = false, speed = 30) {
  const [text, setText] = useState(finalText);
  const triggered = useRef(false);

  useEffect(() => {
    if (!enabled || triggered.current) return;
    triggered.current = true;

    let frame = 0;
    const length = finalText.length;
    const totalFrames = length + 8;

    const interval = setInterval(() => {
      const resolved = Math.floor((frame / totalFrames) * length);
      let result = "";

      for (let i = 0; i < length; i++) {
        if (finalText[i] === " ") {
          result += " ";
        } else if (i < resolved) {
          result += finalText[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setText(result);
      frame++;

      if (frame > totalFrames) {
        setText(finalText);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [finalText, enabled]);

  return text;
}
