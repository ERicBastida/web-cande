import Image from "next/image";
import { whatsappUrl } from "@/lib/contacto";
import { ruta } from "@/lib/ruta";

type Recurso = {
  id: string;
  titulo: string;
  bajada: string;
  /** Cómo se nombra en el mensaje de WhatsApp: "Hola Cande, estoy interesado en …" */
  pedido: string;
};

const PLAN: Recurso = {
  id: "plan-virtual",
  titulo: "Plan de alimentación virtual",
  bajada:
    "Ahora también sin consulta previa. Completás un formulario sobre tus hábitos, horarios, gustos y objetivos, y en 48 h hábiles recibís tu plan 100% personalizado, con cantidades caseras y en gramos, ideas de comidas y acompañamiento por WhatsApp.",
  pedido: "el Plan de alimentación virtual",
};

const GUIAS: Recurso[] = [
  {
    id: "proteinas",
    titulo: "Guía práctica: alimentación alta en proteínas",
    bajada: "Cómo sumar proteínas en tus comidas de todos los días.",
    pedido: "la Guía práctica: alimentación alta en proteínas",
  },
  {
    id: "running",
    titulo: "Nutrición para correr mejor",
    bajada: "Alimentación, hidratación y recuperación para runners.",
    pedido: "la guía Nutrición para correr mejor",
  },
  {
    id: "desayunos",
    titulo: "Recetario de desayunos y meriendas para llevar",
    bajada: "Ricos, saludables y fáciles de hacer.",
    pedido: "el Recetario de desayunos y meriendas para llevar",
  },
  {
    id: "postres",
    titulo: "Recetario de postres saludables",
    bajada: "Dulces caseros, simples y ricos.",
    pedido: "el Recetario de postres saludables",
  },
];

// Sin emojis: WhatsApp los muestra rotos (�) cuando llegan precargados por el link.
function pedirPorWhatsapp(r: Recurso) {
  return whatsappUrl(`Hola Cande, estoy interesado en ${r.pedido}`);
}

function Portada({ r, prioridad = false }: { r: Recurso; prioridad?: boolean }) {
  return (
    <div className="portada">
      <Image
        src={ruta(`/img/recursos/${r.id}.webp`)}
        alt={`Portada: ${r.titulo}`}
        width={636}
        height={900}
        sizes="(min-width: 900px) 240px, 44vw"
        priority={prioridad}
      />
    </div>
  );
}

export function Recursos() {
  return (
    <section className="seccion recursos" id="recursos" aria-labelledby="recursos-titulo">
      <div className="contenedor">
        <h2 id="recursos-titulo">Guías y recetarios</h2>
        <p className="seccion-bajada">
          Material que armé para que sigas sumando hábitos desde casa. Pedilo por WhatsApp y te lo envío.
        </p>

        <article className="recurso-destacado">
          <Portada r={PLAN} />
          <div className="recurso-destacado-texto">
            <h3>{PLAN.titulo}</h3>
            <p>{PLAN.bajada}</p>
            <a className="boton boton-principal" href={pedirPorWhatsapp(PLAN)} target="_blank" rel="noopener">
              Lo quiero
            </a>
          </div>
        </article>

        <ul className="recursos-grilla">
          {GUIAS.map((r) => (
            <li key={r.id} className="recurso">
              <Portada r={r} />
              <h3>{r.titulo}</h3>
              <p>{r.bajada}</p>
              <a
                className="boton boton-chico"
                href={pedirPorWhatsapp(r)}
                target="_blank"
                rel="noopener"
                aria-label={`Lo quiero: ${r.titulo}`}
              >
                Lo quiero
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
