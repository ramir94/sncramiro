---
title: 'Now Assist y AI Agents: de asistir a actuar en ServiceNow'
description: 'Now Assist es la IA generativa integrada en ServiceNow; los AI Agents dan el paso a la IA que actúa sola. Qué es cada uno, cómo se construyen y qué cambia para quien administra la plataforma.'
pubDate: 2026-07-12T10:00:00
lang: 'es'
tags: ['now-assist', 'ai-agents', 'generative-ai']
cover: '/covers/now-assist.svg'
translationKey: 'now-assist-ai-agents'
---

ServiceNow ha pasado en poco tiempo de "asistente de IA generativa" a "empresa
agéntica". Dos nombres resumen ese salto: **Now Assist**, la capa de IA
generativa integrada en la plataforma, y los **AI Agents**, que dan el paso de
*sugerir* a *actuar*. Si trabajas con la plataforma, conviene tener claro qué es
cada cosa y dónde acaba una y empieza la otra.

## Qué es Now Assist

Now Assist es la **IA generativa integrada de forma nativa** en la ServiceNow AI
Platform. No es un producto aparte: son capacidades que aparecen dentro de los
flujos que ya usas. Las más habituales:

- **Resúmenes**: de incidencias, casos, hilos de chat o cambios, para no leer
  media pantalla de historial.
- **Generación de contenido**: borradores de artículos de conocimiento,
  respuestas y correos a partir de una indicación.
- **Generación de código y de flujos**: ayuda a escribir scripts o a diseñar
  automatizaciones.
- **AI Search**: búsqueda sobre LLM que devuelve respuestas con resúmenes
  accionables, no solo una lista de enlaces.
- **Virtual Agent** más natural: entiende el lenguaje del usuario y resuelve o
  encamina la petición.

La idea de fondo: la IA **propone**, la persona **decide**. Es asistencia.

## De asistir a actuar: los AI Agents

Aquí está el cambio de 2026. Un **AI Agent** no se limita a sugerir: **diagnostica,
planifica y ejecuta** flujos de varios pasos para lograr un resultado concreto,
razonando sobre tus datos e invocando herramientas por el camino.

<figure>
  <img src="/images/assist-vs-agent.svg" alt="Diagrama: Now Assist sugiere a la persona; un AI Agent percibe, decide y actúa en bucle" loading="lazy" />
  <figcaption>La diferencia en una imagen: Now Assist <strong>asiste</strong> (la persona aprueba); un AI Agent <strong>actúa</strong> (cierra el flujo completo).</figcaption>
</figure>

Como resumió la dirección de ServiceNow, "2026 es el año de la colaboración
agéntica en la empresa": dejamos de pedir a la IA respuestas simples y
empezamos a dejar que **diagnostique, planifique y ejecute** flujos de varios
pasos de forma autónoma.

## Cómo se construyen: AI Agent Studio y Now Assist Skill Kit

Dos herramientas concentran la construcción:

- **AI Agent Studio**: donde defines agentes, flujos agénticos y sus
  herramientas mediante **lenguaje natural**. Describes lo que el agente debe
  hacer, le pones **guardarraíles** y lo despliegas. El agente usa *tools* —flow
  actions, subflows, scripts y skills— para ejecutar sus tareas.
- **Now Assist Skill Kit (NASK)**: para construir **skills** y agentes asistivos
  que generan contenido y salidas de forma automática, reduciendo tiempo y
  errores.

La clave para quien administra: un agente es tan bueno como sus **herramientas,
sus datos y sus guardarraíles**. No es magia; es orquestación gobernada sobre lo
que ya tienes en la plataforma.

## La "plantilla autónoma" de especialistas

ServiceNow agrupa estos agentes en una **Autonomous Workforce**: un conjunto de
"especialistas" de IA que no solo asisten, sino que **completan procesos de
principio a fin**. Cubren IT, CRM/servicio al cliente, RR. HH., finanzas, legal,
compras y seguridad/riesgo.

¿El dato que abre los ojos? ServiceNow afirma que su especialista de IA interno
resuelve casos del service desk **un 99% más rápido** que un agente humano. Con
las cautelas de todo dato de fabricante, marca la dirección del viaje.

## Gobernanza: lo que no puedes ignorar

Cuanta más autonomía, más importa el control. Dos frentes:

- **Gobierno por defecto**: las capacidades agénticas se plantean con guardarraíles
  y control desde el diseño (por ejemplo, el Build Agent para desarrollo funciona
  dentro de las herramientas de IA de código, gobernado por defecto).
- **Licenciamiento por consumo**: el modelo AI-native se mide en *assists* /
  consumo. Antes de escalar agentes conviene entender **qué cuenta como consumo**
  y ponerle límites y medición, o la factura sorprende.

## Qué significa para ti

Si administras o desarrollas en ServiceNow, el mapa mental es sencillo:

| | Now Assist | AI Agents |
|---|---|---|
| **Qué hace** | Sugiere (resúmenes, contenido, código) | Ejecuta flujos completos |
| **Quién decide** | La persona | El agente, con guardarraíles |
| **Dónde se crea** | Activar y afinar skills | AI Agent Studio + NASK |
| **Riesgo a vigilar** | Calidad de las salidas | Autonomía, datos, consumo |

El consejo práctico: empieza por **Now Assist** en casos acotados (resúmenes,
knowledge), mide calidad y adopción, y solo entonces pasa a **agentes** para
procesos repetitivos y bien definidos —con herramientas claras, datos limpios y
guardarraíles desde el primer día.

---

### Fuentes

- [Generative AI — ServiceNow](https://www.servicenow.com/platform/generative-ai.html)
- [AI Agents — ServiceNow](https://www.servicenow.com/products/ai-agents.html)
- [Create your first Assistive AI Agent with the Now Assist Skill Kit — ServiceNow Community](https://www.servicenow.com/community/now-assist-articles/create-your-first-assistive-ai-agent-with-the-now-assist-skill/ta-p/3185486)
- [ServiceNow unveils an autonomous AI workforce (Knowledge 2026) — Fortune](https://fortune.com/2026/05/05/servicenow-knowledge-2026-autonomous-workforce-microsoft-nvidia-ai-announcements/)

*ServiceNow, Now Assist y AI Agent Studio son marcas de ServiceNow, Inc. Este
artículo es un análisis independiente.*
