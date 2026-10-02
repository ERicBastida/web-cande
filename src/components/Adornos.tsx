import type { SVGProps } from "react";

/** Estrella de stickers oliva, como las de sus placas de Instagram. */
export function Estrella(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <polygon
        points="12,2.5 14.8,8.7 21.5,9.4 16.4,13.9 17.9,20.5 12,17 6.1,20.5 7.6,13.9 2.5,9.4 9.2,8.7"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Broche metálico que sostiene la foto, tomado de su placa de presentación. */
export function Broche(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 84" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="broche-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D9D8D6" />
          <stop offset="0.45" stopColor="#A9A8A6" />
          <stop offset="1" stopColor="#7E7D7B" />
        </linearGradient>
      </defs>
      <path
        d="M36 52 V16 a10 10 0 0 1 10 -10 h28 a10 10 0 0 1 10 10 V52"
        fill="none"
        stroke="#9C9B99"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M8 48 h104 l-7 28 a4 4 0 0 1 -4 3 H19 a4 4 0 0 1 -4 -3 z" fill="url(#broche-metal)" />
      <path d="M12 52 h96" stroke="#EDECEA" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

/* Borde festoneado del plato: se calcula una vez, no en cada render. */
const BORDE = (() => {
  const puntos: string[] = [];
  const ondas = 44;
  const pasos = ondas * 8;
  for (let i = 0; i <= pasos; i++) {
    const a = (i / pasos) * Math.PI * 2;
    const r = 97 - 1.6 * (1 - Math.cos(a * ondas)) * 0.5;
    puntos.push(`${(100 + r * Math.cos(a)).toFixed(2)},${(100 + r * Math.sin(a)).toFixed(2)}`);
  }
  return `M${puntos.join("L")}Z`;
})();

const MOTIVOS = Array.from({ length: 16 }, (_, i) => (i * 360) / 16);

/** Plato de porcelana con el relieve labrado de los platos que usa en sus fotos. */
export function Plato(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="plato-loza" cx="0.45" cy="0.4" r="0.65">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.7" stopColor="#FAF8F7" />
          <stop offset="1" stopColor="#ECE8E6" />
        </radialGradient>
        <radialGradient id="plato-fondo" cx="0.5" cy="0.45" r="0.55">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F3F0EE" />
        </radialGradient>
      </defs>
      <path d={BORDE} fill="url(#plato-loza)" stroke="#E2DDDA" strokeWidth="0.8" />
      <g fill="none" stroke="#DCD6D2" strokeWidth="1.1" strokeLinecap="round">
        {MOTIVOS.map((grados) => (
          <g key={grados} transform={`rotate(${grados} 100 100)`}>
            <path d="M100 13 c-3 3 -9 3 -10 8 c-1 4 3 6 5 4" />
            <path d="M100 13 c3 3 9 3 10 8 c1 4 -3 6 -5 4" />
            <circle cx="100" cy="23" r="1.3" fill="#DCD6D2" stroke="none" />
            <circle cx="111" cy="12" r="0.9" fill="#DCD6D2" stroke="none" />
          </g>
        ))}
      </g>
      <circle cx="100" cy="100" r="70" fill="url(#plato-fondo)" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#E4DFDC" strokeWidth="1.4" />
      <circle cx="100" cy="100" r="66.5" fill="none" stroke="#FFFFFF" strokeWidth="1.2" />
    </svg>
  );
}

export function IconoChat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.6 18.6z" />
      <path d="M9.2 9.6c.3 1.9 1.9 3.8 4.6 4.9l1-1.1 1.6.7c-.2 1-1 1.7-2 1.7-3 0-6.2-3.2-6.2-6.2 0-1 .7-1.8 1.7-2l.7 1.6z" />
    </svg>
  );
}

export function IconoInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
