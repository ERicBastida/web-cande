export const WHATSAPP_NUMERO = "5493456510858";
export const WHATSAPP_VISIBLE = "3456 51-0858";
export const INSTAGRAM_USUARIO = "cm.nutricion_";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USUARIO}/`;

export function whatsappUrl(mensaje = "¡Hola Cande! Quería pedir un turno.") {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}
