"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Plato } from "./Adornos";

const SERVICIOS = [
  {
    titulo: "Educación alimentaria",
    texto: "Te enseño, con herramientas prácticas, a elegir mejor, organizar tu alimentación y crear hábitos que puedas sostener en el tiempo.",
  },
  {
    titulo: "Cambio de hábitos",
    texto: "Cambios simples y realistas en tu alimentación y rutina, para que puedas convertirlos en hábitos y sostenerlos en el tiempo.",
  },
  {
    titulo: "Nutrición infantil",
    texto: "Acompaño a las familias a construir una alimentación variada y saludable desde la infancia, respetando los tiempos, gustos y necesidades de cada niño.",
  },
  {
    titulo: "Antropometría ISAK 1",
    texto: "Medición de tu composición corporal con protocolo internacional ISAK, para seguir tu progreso más allá de la balanza.",
  },
];

type Servicio = (typeof SERVICIOS)[number];

/** En escritorio el título ocupa la izquierda, así que todos los platos llegan desde la derecha. */
function useEscritorio() {
  const [escritorio, setEscritorio] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const actualizar = () => setEscritorio(mq.matches);
    actualizar();
    mq.addEventListener("change", actualizar);
    return () => mq.removeEventListener("change", actualizar);
  }, []);
  return escritorio;
}

/**
 * Cada plato llega rodando desde un costado mientras bajás y frena en su lugar.
 * El giro va solo en la loza: el texto y la sombra no rotan, como un plato real apoyado en la mesa.
 */
function PlatoServido({ servicio, desdeLaDerecha }: { servicio: Servicio; desdeLaDerecha: boolean }) {
  const ref = useRef<HTMLLIElement>(null);
  const quieto = useReducedMotion();
  const escritorio = useEscritorio();
  const lado = desdeLaDerecha || escritorio ? 1 : -1;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center 0.62"] });
  // Rodar sin patinar: distancia recorrida / radio. 120% del ancho ≈ 140° de giro.
  const x = useTransform(scrollYProgress, [0, 1], [`${lado * 120}%`, "0%"]);
  const giro = useTransform(scrollYProgress, [0, 1], [lado * 140, 0]);
  const texto = useTransform(scrollYProgress, [0.72, 1], [0, 1]);
  const textoY = useTransform(scrollYProgress, [0.72, 1], [8, 0]);

  return (
    <li ref={ref} className="plato">
      <motion.div className="plato-mesa" style={quieto ? undefined : { x }}>
        <motion.div className="plato-loza" style={quieto ? undefined : { rotate: giro }}>
          <Plato />
        </motion.div>
        <motion.div className="plato-contenido" style={quieto ? undefined : { opacity: texto, y: textoY }}>
          <h3>{servicio.titulo}</h3>
          <p>{servicio.texto}</p>
        </motion.div>
      </motion.div>
    </li>
  );
}

export function Platos() {
  return (
    <section className="seccion platos" id="que-hago" aria-labelledby="platos-titulo">
      <div className="contenedor">
        <h2 id="platos-titulo">Cómo te puedo acompañar</h2>
        <p className="seccion-bajada">
          Cada consulta parte de tu vida tal como es: tus horarios, tus gustos y lo que tenés en la heladera.
        </p>
      </div>

      <ul className="platos-mesa" aria-label="Servicios">
        {SERVICIOS.map((s, i) => (
          <PlatoServido key={s.titulo} servicio={s} desdeLaDerecha={i % 2 === 1} />
        ))}
      </ul>
    </section>
  );
}
