"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Respeta "reducir movimiento" del sistema en todas las animaciones. */
export function Movimiento({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
