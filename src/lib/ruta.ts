/** Antepone el basePath a archivos de /public (next/image no lo hace solo en export estático). */
export const ruta = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
