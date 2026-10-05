import { ruta } from "@/lib/ruta";

/**
 * La firma real del logo de Cande, usada como máscara: toma el color del texto (currentColor),
 * así se puede teñir de tinta, oliva o rosa sin exportar una imagen por color.
 */
export function Firma({ className = "" }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Candela"
      className={`firma ${className}`}
      style={{ ["--firma-url" as string]: `url(${ruta("/img/firma-candela.png")})` }}
    />
  );
}
