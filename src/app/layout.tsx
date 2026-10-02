import type { Metadata, Viewport } from "next";
import { Figtree, Mrs_Saint_Delafield, Young_Serif } from "next/font/google";
import "./globals.css";

const serif = Young_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const sans = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firma = Mrs_Saint_Delafield({
  variable: "--font-firma",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Candela Mirabete, nutricionista en Federación",
  description:
    "Lic. en Nutrición Candela Mirabete (MP 978). Hábitos reales y sostenibles. Atención presencial en Federación, Entre Ríos, y online.",
};

export const viewport: Viewport = {
  themeColor: "#FDFBFA",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-AR" className={`${serif.variable} ${sans.variable} ${firma.variable}`}>
      <body>{children}</body>
    </html>
  );
}
