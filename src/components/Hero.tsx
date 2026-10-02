"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Estrella, IconoChat } from "./Adornos";
import { whatsappUrl } from "@/lib/contacto";
import { ruta } from "@/lib/ruta";

const suave = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-titulo">
      <div className="hero-foto">
        <motion.div
          className="hero-foto-marco"
          initial={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: suave }}
        >
          <Image
            src={ruta("/img/candela-mate.webp")}
            alt="Candela sonriendo en la mesa, con su mate y platos de comidas caseras alrededor"
            fill
            priority
            sizes="(min-width: 900px) 44vw, 92vw"
          />
        </motion.div>

        {[
          { clase: "estrella-a", demora: 1.5 },
          { clase: "estrella-b", demora: 1.65 },
        ].map(({ clase, demora }) => (
          <motion.span
            key={clase}
            className={`hero-estrella ${clase}`}
            initial={{ opacity: 0, scale: 0, rotate: -40 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: demora, type: "spring", stiffness: 260, damping: 14 }}
          >
            <Estrella />
          </motion.span>
        ))}

        <motion.p
          className="hero-firma"
          aria-hidden="true"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
        >
          Candela
        </motion.p>
      </div>

      <motion.div
        className="hero-texto"
        initial="oculto"
        animate="visible"
        transition={{ delayChildren: 1.1, staggerChildren: 0.12 }}
      >
        {[
          <p key="mat" className="hero-matricula">
            Licenciada en Nutrición, MP 978
          </p>,
          <h1 key="h1" id="hero-titulo">
            Hábitos reales, que puedas sostener en el tiempo.
          </h1>,
          <p key="bajada" className="hero-bajada">
            Planes 100% personalizados, sin dietas imposibles ni culpa. Te atiendo en Federación, Entre Ríos, o
            por videollamada.
          </p>,
          <div key="cta" className="hero-acciones">
            <a className="boton boton-principal" href={whatsappUrl()} target="_blank" rel="noopener">
              <IconoChat width={20} height={20} />
              Pedir turno por WhatsApp
            </a>
            <a className="enlace" href="#quien-soy">
              Conocerme primero
            </a>
          </div>,
        ].map((nodo) => (
          <motion.div
            key={nodo.key}
            variants={{
              oculto: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: suave } },
            }}
          >
            {nodo}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
