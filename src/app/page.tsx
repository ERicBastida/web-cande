import Image from "next/image";
import { Broche, Estrella, IconoChat, IconoInstagram } from "@/components/Adornos";
import { BarraTurno } from "@/components/BarraTurno";
import { Hero } from "@/components/Hero";
import { Movimiento } from "@/components/Movimiento";
import { Platos } from "@/components/Platos";
import { Collage } from "@/components/Collage";
import { Firma } from "@/components/Firma";
import { Recursos } from "@/components/Recursos";
import { ruta } from "@/lib/ruta";
import { INSTAGRAM_URL, INSTAGRAM_USUARIO, whatsappUrl } from "@/lib/contacto";

const PASOS = [
  {
    titulo: "Coordinamos tu turno",
    texto: "Me escribís por WhatsApp y coordinamos día y horario.",
  },
  {
    titulo: "Primera consulta",
    texto: "Conocemos tu rutina, hábitos, objetivos, gustos y necesidades.",
  },
  {
    titulo: "Plan personalizado",
    texto: "Armo un plan adaptado a vos y a tu día a día.",
  },
  {
    titulo: "Seguimiento",
    texto: "Realizamos controles según tu necesidad, para acompañar el proceso y hacer los ajustes que sean necesarios.",
  },
];

export default function Inicio() {
  return (
    <Movimiento>
      <header className="cabecera">
        <a href="#" className="cabecera-firma" aria-label="Candela Mirabete, inicio">
          <Firma />
        </a>
        <nav aria-label="Secciones" className="cabecera-nav">
          <a href="#quien-soy">Quién soy</a>
          <a href="#que-hago">Qué hago</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="cabecera-turno" href={whatsappUrl()} target="_blank" rel="noopener">
          <IconoChat width={16} height={16} />
          Turnos
        </a>
      </header>

      <main>
        <Hero />

        <section className="seccion quien" id="quien-soy" aria-labelledby="quien-titulo">
          <div className="contenedor quien-grilla">
            <figure className="quien-foto">
              <Broche className="quien-broche" />
              <div className="quien-foto-papel">
                <Image
                  src={ruta("/img/candela-selfie.webp")}
                  alt="Candela sonriendo en una selfie"
                  width={800}
                  height={1067}
                  sizes="(min-width: 900px) 30vw, 78vw"
                />
              </div>
              <Estrella className="quien-estrella" />
            </figure>

            <div className="quien-texto">
              <h2 id="quien-titulo">Hola, soy Cande 🩷</h2>
              <p>
                Soy Licenciada en Nutrición y mi objetivo es ayudarte a construir una alimentación que se adapte a tu
                vida.
              </p>
              <p>
                Creo en una nutrición simple, flexible y posible, sin reglas imposibles ni planes que duren solo unas
                semanas.
              </p>
              <p>
                Mi trabajo es acompañarte a transformar hábitos, incorporar herramientas y aprender a alimentarte de una
                manera que puedas sostener en el tiempo.
              </p>
              <p>
                Porque comer mejor no se trata de hacerlo perfecto, sino de encontrar una forma de alimentarte que
                funcione para vos, tu rutina y tus objetivos.
              </p>
              <p className="quien-lema">Nutrición simple. Hábitos reales. Cambios que se sostienen.</p>
              <dl className="quien-datos">
                <div>
                  <dt>Matrícula</dt>
                  <dd>MP 978</dd>
                </div>
                <div>
                  <dt>Antropometrista</dt>
                  <dd>ISAK nivel 1</dd>
                </div>
                <div>
                  <dt>Consultorio</dt>
                  <dd>Federación, Entre Ríos</dd>
                </div>
                <div>
                  <dt>Modalidad</dt>
                  <dd>Presencial y online</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <Platos />

        <section className="seccion pasos" aria-labelledby="pasos-titulo">
          <div className="contenedor pasos-grilla">
            <div>
              <h2 id="pasos-titulo">Así trabajamos</h2>
              <Collage />
            </div>
            <ol className="pasos-lista">
              {PASOS.map((p) => (
                <li key={p.titulo}>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Recursos />

        <section className="frase" aria-label="Una frase de Cande">
          <blockquote className="contenedor">
            <p>La vida es muy corta para vivir a dieta y demasiado larga para vivir peleada con la comida.</p>
            <footer>
              <Firma />
            </footer>
          </blockquote>
        </section>

        <section className="seccion contacto" id="contacto" aria-labelledby="contacto-titulo">
          <div className="contenedor contacto-caja">
            <Estrella className="contacto-estrella" />
            <h2 id="contacto-titulo">¿Arrancamos?</h2>
            <p>
              Escribime y coordinamos tu primera consulta. Te atiendo en Federación o por videollamada, estés donde
              estés.
            </p>
            <a className="boton boton-principal" href={whatsappUrl()} target="_blank" rel="noopener">
              <IconoChat width={20} height={20} />
              Escribime por WhatsApp
            </a>
            <a className="enlace" href={INSTAGRAM_URL} target="_blank" rel="noopener">
              O seguime en Instagram, @{INSTAGRAM_USUARIO}
            </a>
          </div>
        </section>
      </main>

      <footer className="pie">
        <Firma className="pie-firma" />
        <p>Candela Mirabete, Licenciada en Nutrición, MP 978.</p>
        <p>Federación, Entre Ríos, Argentina.</p>
        <p className="pie-credito">
          Página creada por el Ing. Eric Bastida
          <a href="https://www.instagram.com/bastidaeric/" target="_blank" rel="noopener" aria-label="Instagram de Eric Bastida">
            <IconoInstagram width={16} height={16} />
          </a>
        </p>
      </footer>

      <BarraTurno />
    </Movimiento>
  );
}
