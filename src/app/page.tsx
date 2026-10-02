import Image from "next/image";
import { Broche, Estrella, IconoChat, IconoInstagram } from "@/components/Adornos";
import { BarraTurno } from "@/components/BarraTurno";
import { Hero } from "@/components/Hero";
import { Movimiento } from "@/components/Movimiento";
import { Platos } from "@/components/Platos";
import { ruta } from "@/lib/ruta";
import { INSTAGRAM_URL, INSTAGRAM_USUARIO, whatsappUrl } from "@/lib/contacto";

const PASOS = [
  {
    titulo: "Me escribís",
    texto: "Por WhatsApp o por mensaje directo en Instagram. Coordinamos día y modalidad.",
  },
  {
    titulo: "Primera consulta",
    texto: "Charlamos de tu rutina, tu historia con la comida y lo que querés lograr. Si suma, hacemos antropometría.",
  },
  {
    titulo: "Tu plan",
    texto: "Armo un plan a tu medida, con ideas de comidas que de verdad tengas ganas de cocinar.",
  },
  {
    titulo: "Seguimiento",
    texto: "Nos vemos cada tanto para ajustar, resolver dudas y celebrar lo que vas logrando.",
  },
];

export default function Inicio() {
  return (
    <Movimiento>
      <header className="cabecera">
        <a href="#" className="cabecera-firma" aria-label="Candela Mirabete, inicio">
          Candela
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
                  src={ruta("/img/candela-retrato.webp")}
                  alt="Retrato de Candela Mirabete sonriendo"
                  width={694}
                  height={654}
                  sizes="(min-width: 900px) 30vw, 78vw"
                />
              </div>
              <Estrella className="quien-estrella" />
            </figure>

            <div className="quien-texto">
              <h2 id="quien-titulo">Hola, soy Cande</h2>
              {/* Texto provisorio: reemplazar con la bio real de Candela. */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus
                posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.
              </p>
              <p>
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper,
                maecenas faucibus mollis interdum.
              </p>
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
              <figure className="pasos-foto">
                <Image
                  src={ruta("/img/candela-antropometria.webp")}
                  alt="Candela con un plicómetro, la herramienta para medir pliegues en la antropometría"
                  width={1424}
                  height={783}
                  sizes="(min-width: 900px) 40vw, 92vw"
                />
              </figure>
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

        <section className="frase" aria-label="Una frase de Cande">
          <blockquote className="contenedor">
            <p>La vida es muy corta para vivir a dieta y demasiado larga para vivir peleada con la comida.</p>
            <footer>Cande</footer>
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
        <p className="pie-firma" aria-hidden="true">
          Candela
        </p>
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
