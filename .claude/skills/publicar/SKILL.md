---
name: publicar
description: Publica un nuevo artículo en sncramiro.com. Úsala cuando el usuario pida escribir, publicar o subir un post al blog. Escribe el markdown, hace commit y push a main, y el despliegue a Hostinger es automático.
---

# Publicar un artículo en sncramiro.com

Este repositorio es un blog estático (Astro) sobre ServiceNow. Publicar un
artículo consiste en crear un archivo markdown y hacer push a `main`; una
GitHub Action construye el sitio y lo sube a Hostinger por FTP.

## Pasos

1. **Redacta el artículo** con el usuario. Si el usuario da solo un tema,
   propón un borrador y refínalo con él antes de publicar. El tono del blog es
   técnico, cercano y directo; los artículos suelen incluir ejemplos de código
   de ServiceNow (Glide API, business rules, script includes, integraciones).

2. **Crea el archivo** en `src/content/posts/<slug>.md`:
   - El `<slug>` es el título en minúsculas, sin acentos, con guiones
     (ej.: `como-depurar-business-rules.md`). El slug define la URL final:
     `https://sncramiro.com/posts/<slug>/`.
   - Frontmatter obligatorio:

   ```yaml
   ---
   title: 'Título del artículo'
   description: 'Resumen de una o dos frases (aparece en la portada y en el RSS).'
   pubDate: 2026-07-12          # fecha de publicación, YYYY-MM-DD
   lang: 'es'                   # 'es' o 'en', según el idioma del artículo
   tags: ['scripting', 'flow']  # minúsculas, sin espacios; reutiliza tags existentes
   ---
   ```

   - Opcional: `draft: true` para que no se publique todavía.
   - Revisa los tags ya usados (`grep -h "^tags:" src/content/posts/*.md`)
     y reutilízalos antes de inventar nuevos.

3. **Verifica el build** antes de publicar:

   ```bash
   npm run build
   ```

   Si falla, corrige el error antes de continuar (suele ser frontmatter mal
   formado).

4. **Commit y push a `main`**:

   ```bash
   git add src/content/posts/<slug>.md
   git commit -m "post: <título corto>"
   git push -u origin main
   ```

5. **Confirma al usuario** que el push se ha hecho y que el despliegue tarda
   1-2 minutos (workflow "Desplegar a Hostinger" en la pestaña Actions).
   La URL final es `https://sncramiro.com/posts/<slug>/`.

## Editar o despublicar

- Para **editar**: modifica el markdown y repite commit + push.
- Para **despublicar**: añade `draft: true` al frontmatter (o borra el
  archivo) y haz push. Ojo: el borrado en el servidor lo gestiona la Action
  de FTP en el siguiente despliegue.
