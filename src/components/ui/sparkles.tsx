"use client";

import { useEffect, useId, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

type SparklesCoreProps = {
  id?: string;
  className?: string;
  /** Canvas background — keep "transparent" to layer over the hero. */
  background?: string;
  particleColor?: string;
  /** Lower = fewer stars (Aceternity density semantics). ~80 reads elegant. */
  particleDensity?: number;
  minSize?: number;
  maxSize?: number;
  /** Twinkle/drift speed. */
  speed?: number;
};

/**
 * SparklesCore — Aceternity-style ambient starfield powered by the tsparticles
 * slim engine. Renders an absolutely-positioned canvas, so the parent must be
 * `relative` and you should pass `absolute inset-0` via className.
 */
export function SparklesCore({
  id,
  className,
  background = "transparent",
  particleColor = "#FFFFFF",
  particleDensity = 100,
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
}: SparklesCoreProps) {
  const [ready, setReady] = useState(false);
  const generatedId = useId();

  useEffect(() => {
    let active = true;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: background } },
      fullScreen: { enable: false },
      fpsLimit: 120,
      detectRetina: true,
      particles: {
        number: {
          value: particleDensity,
          density: { enable: true, width: 1100, height: 1100 },
        },
        color: { value: particleColor },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: { enable: true, speed: speed * 1.2, sync: false },
        },
        size: { value: { min: minSize, max: maxSize } },
        move: {
          enable: true,
          direction: "none",
          speed: { min: 0.05, max: 0.4 },
          straight: false,
          outModes: { default: "out" },
        },
      },
      // Calm, ambient — no hover/click interactions.
      interactivity: { events: {} },
    }),
    [background, particleColor, particleDensity, minSize, maxSize, speed],
  );

  if (!ready) return null;

  return <Particles id={id || generatedId} className={className} options={options} />;
}
