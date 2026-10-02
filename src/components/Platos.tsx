"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Plato } from "./Adornos";

const SERVICIOS = [
  {
    titulo: "Educación alimentaria",
    texto: "Entender qué comés y por qué, para elegir con libertad y no desde la culpa.",
  },
  {
    titulo: "Cambio de hábitos",
    texto: "Pasos chicos, posibles y tuyos. Lo que suma es lo que podés repetir.",
  },
  {
    titulo: "Nutrición infantil",
    texto: "Acompaño a las familias para que comer en casa sea más simple y más rico.",
  },
  {
    titulo: "Antropometría ISAK 1",
    texto: "Mediciones corporales con protocolo internacional para ver tu progreso real.",
  },
];

export function Platos() {
  const seccion = useRef<HTMLElement>(null);
  const carril = useRef<HTMLUListElement>(null);

  // Los platos giran apenas mientras recorrés la sección: como cuando acomodás uno en la mesa.
  const { scrollYProgress } = useScroll({ target: seccion, offset: ["start end", "end start"] });
  const { scrollXProgress } = useScroll({ container: carril });
  const giroY = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const giro = useTransform(() => giroY.get() + scrollXProgress.get() * 140);

  return (
    <section ref={seccion} className="seccion platos" id="que-hago" aria-labelledby="platos-titulo">
      <div className="contenedor">
        <h2 id="platos-titulo">Cómo te puedo acompañar</h2>
        <p className="seccion-bajada">
          Cada consulta parte de tu vida tal como es: tus horarios, tus gustos y lo que tenés en la heladera.
        </p>
      </div>

      <ul ref={carril} className="platos-carril" tabIndex={0} aria-label="Servicios">
        {SERVICIOS.map((s) => (
          <li key={s.titulo} className="plato">
            <motion.div className="plato-loza" style={{ rotate: giro }}>
              <Plato />
            </motion.div>
            <div className="plato-contenido">
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
