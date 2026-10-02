"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { IconoChat } from "./Adornos";
import { whatsappUrl } from "@/lib/contacto";

/** Acceso a WhatsApp siempre a mano en el celu, una vez que pasaste el hero. */
export function BarraTurno() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const finDePagina = y + window.innerHeight > document.body.scrollHeight - 320;
    setVisible(y > window.innerHeight * 0.85 && !finDePagina);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          className="barra-turno"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
        >
          <IconoChat width={20} height={20} />
          Pedir turno por WhatsApp
        </motion.a>
      )}
    </AnimatePresence>
  );
}
