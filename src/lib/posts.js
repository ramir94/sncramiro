// Utilidades para agrupar traducciones de un mismo artículo.

const LANG_ORDER = { es: 0, en: 1 };

/**
 * Dada una lista de posts, devuelve una entrada por artículo (agrupando las
 * traducciones que comparten `translationKey`). Para cada entrada se elige la
 * versión en `preferredLang` como principal y se adjuntan todas las versiones
 * disponibles en `langs` (para pintar el selector de idioma en la tarjeta).
 */
export function groupTranslations(posts, preferredLang = 'es') {
  const groups = new Map();
  for (const post of posts) {
    const key = post.data.translationKey ?? post.id;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(post);
  }

  const items = [];
  for (const group of groups.values()) {
    const primary =
      group.find((p) => p.data.lang === preferredLang) ?? group[0];
    const langs = group
      .map((p) => ({ lang: p.data.lang, id: p.id }))
      .sort((a, b) => (LANG_ORDER[a.lang] ?? 9) - (LANG_ORDER[b.lang] ?? 9));
    items.push({ post: primary, langs });
  }

  items.sort(
    (a, b) => b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf()
  );
  return items;
}

/** Devuelve las traducciones hermanas de un post (incluida ella misma). */
export function translationsOf(post, allPosts) {
  const key = post.data.translationKey ?? post.id;
  return allPosts
    .filter((p) => (p.data.translationKey ?? p.id) === key)
    .sort((a, b) => (LANG_ORDER[a.data.lang] ?? 9) - (LANG_ORDER[b.data.lang] ?? 9));
}
