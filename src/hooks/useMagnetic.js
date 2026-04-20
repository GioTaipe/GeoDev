import { useRef, useEffect } from "react";

export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Only apply on devices with fine pointer (no touch)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const onEnter = () => {
      el.style.transition = "";
    };

    const onLeave = () => {
      el.style.transition = "transform 500ms cubic-bezier(0.23,1,0.32,1)";
      el.style.transform = "translate(0px, 0px)";
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 520);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return ref;
}
