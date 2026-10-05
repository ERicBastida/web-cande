"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ruta } from "@/lib/ruta";

const FOTOS = [
  {
    id: "consultorio",
    src: "/img/trabajo-consultorio.webp",
    alt: "El consultorio de Candela: su título de Licenciada en Nutrición en la pared y planes alimentarios sobre el escritorio",
    epigrafe: "El consultorio",
    foco: "50% 8%",
    giro: -5,
  },
  {
    id: "herramientas",
    src: "/img/trabajo-herramientas.webp",
    alt: "Plicómetro, calibre y cinta métrica para antropometría sobre una mesa de madera",
    epigrafe: "Mis herramientas",
    foco: "35% 30%",
    giro: 4,
  },
];

/** Polaroids que caen sobre la mesa una vez, cuando la sección entra en pantalla. */
export function Collage() {
  return (
    <div className="collage">
      {FOTOS.map((f, i) => (
        <motion.figure
          key={f.id}
          className={`polaroid polaroid-${f.id}`}
          initial={{ opacity: 0, y: 36, scale: 1.08, rotate: f.giro + (i % 2 ? -10 : 10) }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: f.giro }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: i * 0.18, type: "spring", stiffness: 140, damping: 17 }}
        >
          <span className="polaroid-cinta" aria-hidden="true" />
          <div className="polaroid-foto">
            <Image
              src={ruta(f.src)}
              alt={f.alt}
              fill
              sizes="(min-width: 900px) 260px, 56vw"
              style={{ objectPosition: f.foco }}
            />
          </div>
          <figcaption>{f.epigrafe}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
