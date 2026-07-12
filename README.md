# sncramiro.com

Blog estático sobre ServiceNow, construido con [Astro](https://astro.build) y
desplegado automáticamente en Hostinger.

## Cómo funciona

- Los artículos son archivos markdown en `src/content/posts/`.
- Cada push a `main` dispara la GitHub Action **Desplegar a Hostinger**
  (`.github/workflows/deploy.yml`), que construye el sitio y sube `dist/` por
  FTP a `public_html`.
- Para publicar desde Claude Code existe la skill `/publicar`
  (`.claude/skills/publicar/SKILL.md`).

## Configuración inicial (una sola vez)

### 1. Crear la cuenta FTP en Hostinger

1. Entra en **hPanel → Archivos → Cuentas FTP**.
2. Crea una cuenta nueva cuyo directorio sea `public_html` (o usa la cuenta
   principal si ya apunta ahí).
3. Apunta el **host FTP** (algo como `ftp.sncramiro.com` o una IP), el
   **usuario** y la **contraseña**.

### 2. Guardar los secretos en GitHub

En el repositorio: **Settings → Secrets and variables → Actions → New
repository secret**. Crea estos tres:

| Secreto        | Valor                                   |
| -------------- | --------------------------------------- |
| `FTP_SERVER`   | Host FTP de Hostinger                   |
| `FTP_USERNAME` | Usuario de la cuenta FTP                |
| `FTP_PASSWORD` | Contraseña de la cuenta FTP             |

### 3. Vaciar el WordPress antiguo

⚠️ **Haz antes una copia de seguridad** (hPanel → Archivos → Copias de
seguridad, o descarga `public_html` y exporta la base de datos).

Después, borra el contenido de `public_html` (archivos de WordPress:
`wp-admin/`, `wp-content/`, `wp-includes/`, `index.php`, etc.). El primer
despliegue rellenará la carpeta con el sitio nuevo.

### 4. Primer despliegue

Haz push a `main` o lanza el workflow a mano desde la pestaña **Actions**
(botón *Run workflow*). En 1-2 minutos la web estará en
https://sncramiro.com.

## Desarrollo local

```bash
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio en dist/
```

## Publicar un artículo

Crea `src/content/posts/mi-articulo.md` con este frontmatter:

```yaml
---
title: 'Título del artículo'
description: 'Resumen breve para la portada y el RSS.'
pubDate: 2026-07-12
lang: 'es' # o 'en'
tags: ['scripting']
---
```

...escribe el contenido en markdown, y haz commit + push a `main`. O
simplemente pídeselo a Claude: la skill `/publicar` hace todo el proceso.
