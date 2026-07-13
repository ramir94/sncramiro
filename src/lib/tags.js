// Asigna un tono de color estable a cada etiqueta (para chips multicolor).
// Determinista: el mismo tag siempre tiene el mismo color.
export function tagHue(tag) {
  let h = 0;
  for (let i = 0; i < tag.length; i++) {
    h = (h * 31 + tag.charCodeAt(i)) % 360;
  }
  // Evita tonos apagados amarillo-verdosos poco legibles.
  return h;
}
