# Web de Candela Mirabete

Sitio de Candela Mirabete, Lic. en Nutrición (MP 978), Federación, Entre Ríos.
Next.js + Motion, exportado como sitio estático.

Online: https://ericbastida.github.io/web-cande/

## Correr en local

Requiere Node 22 o superior.

```bash
npm install
npm run dev
```

Abrí http://localhost:3000.

## Publicar

Cada push a `main` publica automáticamente en GitHub Pages (`.github/workflows/pages.yml`).

## Pendientes de contenido

- Bio real en la sección "Hola, soy Cande" (`src/app/page.tsx`, hoy en lorem ipsum).
- Validar textos de servicios (`src/components/Platos.tsx`) y pasos.
- Fotos originales en buena resolución (`public/img/`).
