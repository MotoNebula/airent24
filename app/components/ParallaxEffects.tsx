"use client";

import { useEffect } from "react";

export default function ParallaxEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".motion-reveal"));
    let frame = 0;
    const render = () => { for (const layer of layers) layer.style.setProperty("--parallax-y", `${window.scrollY * Number(layer.dataset.parallax || 0)}px`); frame = 0; };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(render); };
    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.style.setProperty("--tilt-x", `${(event.clientX / window.innerWidth - .5) * 7}deg`);
      root.style.setProperty("--tilt-y", `${(event.clientY / window.innerHeight - .5) * -7}deg`);
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: .1, rootMargin: "0px 0px -5%" });
    reveals.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    render();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("pointermove", onPointerMove); observer.disconnect(); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return <div className="cursor-aura" aria-hidden="true" />;
}
