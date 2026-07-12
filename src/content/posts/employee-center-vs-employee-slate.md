---
title: 'Employee Center vs Employee Slate: qué se gana y qué se pierde'
description: 'Employee Slate es la nueva experiencia del empleado de ServiceNow, conversacional y potenciada por IA. La comparamos con Employee Center: filosofía, migración, coexistencia y qué tener en cuenta antes de dar el salto.'
pubDate: 2026-07-12
lang: 'es'
tags: ['employee-slate', 'employee-center', 'employee-experience']
cover: '/covers/employee-slate.svg'
translationKey: 'employee-center-vs-employee-slate'
---

Durante años, la experiencia del empleado en ServiceNow ha girado en torno a un
portal: **Employee Center** (antes ESS/Service Portal). Un sitio con su
taxonomía, su catálogo, su buscador y sus widgets, donde el empleado **navega**
hasta encontrar lo que necesita.

Con **Employee Slate**, ServiceNow cambia esa premisa de raíz. En lugar de
navegar, el empleado **pregunta**. Es un producto nuevo, con otra arquitectura,
pensado para una plantilla que espera que sus herramientas de trabajo funcionen
como las apps que usa cada día.

Este artículo compara los dos enfoques: en qué se diferencian, qué ganas con
Slate, qué pierdes o tienes que rehacer, y cómo conviven durante la transición.

## Qué es cada uno

**Employee Center** es el portal de experiencia del empleado consolidado de
ServiceNow. Multi-audiencia (HR, IT, instalaciones, legal…), con taxonomía
unificada, catálogo, base de conocimiento y una capa de personalización. Es
maduro, muy configurable y sobre él hay miles de implementaciones en producción.

<figure>
  <img src="/images/employee-center-home.svg" alt="Home tipo Employee Center con navegación, buscador y tarjetas recomendadas" />
  <figcaption>Employee Center: el empleado <strong>navega</strong> por un portal — menús, buscador, contenido recomendado y sus solicitudes activas. (Recreación ilustrativa.)</figcaption>
</figure>

**Employee Slate** es la nueva experiencia, disponible desde mayo de 2026 dentro
de **EmployeeWorks** (la "puerta de entrada con IA" de ServiceNow). Está
**potenciada de forma nativa por Moveworks** y su premisa es *conversation-first*:
la página de inicio se organiza alrededor de una barra de chat con IA. El
empleado escribe en lenguaje natural lo que necesita y la experiencia se encarga
del resto —responder, tramitar una solicitud, sacar contenido relevante— dentro
de un mismo flujo conversacional.

<figure>
  <img src="/images/employee-slate-home.svg" alt="Home tipo Employee Slate con barra de chat de IA y lienzo personalizado" />
  <figcaption>Employee Slate: el empleado <strong>pregunta</strong> — una barra de chat con IA arriba y un lienzo con To-dos, contenido popular y accesos rápidos. (Recreación ilustrativa.)</figcaption>
</figure>

## El cambio de filosofía: navegar vs preguntar

Esta es la diferencia de fondo, y todo lo demás se deriva de ella.

| | Employee Center | Employee Slate |
|---|---|---|
| **Interacción principal** | Navegar: menús, categorías, buscador | Preguntar: barra de chat con IA |
| **Página de inicio** | Portal con secciones y widgets | Barra conversacional + lienzo personalizado |
| **Motor** | Plataforma ServiceNow + Service Portal | Potenciado nativamente por Moveworks |
| **Personalización** | Segmentación por audiencia, targeting | Lienzo hiperpersonalizado (To-dos, contenido, accesos) |
| **Madurez** | Producto consolidado, años en producción | Nuevo (mayo 2026), evolucionando cada mes |

El **lienzo personalizado** de Slate muestra sin que el empleado busque:

- **To-dos**: tareas prioritarias, aprobaciones y solicitudes pendientes.
- **Contenido popular**: los artículos y temas más consultados.
- **Accesos rápidos**: atajos configurables al catálogo y a herramientas externas.

Y la capa de IA (el *World Knowledge* de Moveworks) va más allá del típico
chatbot: generación de contenido, búsquedas web, preguntas de conocimiento
general, redacción de correos, creación de informes… dentro del propio flujo.

## Qué ganas con Employee Slate

- **Menos fricción para el empleado**: "lo más rápido es preguntar". Se elimina
  el coste cognitivo de saber *dónde* está cada cosa en el portal.
- **IA de verdad integrada**, no un widget aparte: la conversación es el punto de
  entrada, no un añadido.
- **Personalización proactiva**: la experiencia trae el trabajo al empleado en
  lugar de esperar a que lo busque.
- **Ritmo de producto alto**: Slate incorpora capacidades nuevas cada mes.

## Qué pierdes (o tienes que rehacer)

Aquí es donde conviene ser realista antes de vender el salto a negocio.

- **No hay herramientas de migración automática.** No es un "botón de actualizar":
  es adoptar un producto distinto sobre otro stack tecnológico.
- **Los widgets de Employee Center hay que rehacerlos** para Slate si no vienen
  ya de serie (out-of-the-box). Todo lo muy personalizado del portal actual no
  se arrastra tal cual.
- **Son dos experiencias aisladas.** Employee Slate y Employee Center Pro corren
  sobre stacks diferentes; no es una evolución "en caliente" del mismo portal.
- **Paridad funcional aún en construcción.** Slate irá cubriendo los casos de uso
  de Employee Center Pro **de forma gradual hasta 2027**.

## La buena noticia: tu configuración se aprovecha

Que sean productos distintos no significa empezar de cero. Slate **usa las mismas
tablas de configuración** de la plataforma que Employee Center, así que buena
parte de lo que ya construiste **se hereda automáticamente**:

| Se aprovecha sin rehacer | Hay que rehacer / revisar |
|---|---|
| Tareas, solicitudes y catálogo | Widgets personalizados del portal |
| Organigrama (Org Chart) | Maquetación y branding del portal |
| Perfil del empleado (Employee Profile) | Casos de uso aún sin paridad en Slate |
| Bandeja unificada (Unified Inbox) | Integraciones específicas de widgets |

Es decir: la **lógica de negocio** (qué es una solicitud, quién aprueba, cómo es
el organigrama) viaja contigo. Lo que se rehace es la **capa de presentación**.

## Coexistencia: no hay que elegir hoy

ServiceNow **soporta la coexistencia**: Employee Center y Employee Slate pueden
funcionar **en paralelo** mientras Slate madura. Y un dato importante para
tranquilizar a cualquiera con una inversión grande en Employee Center Pro:

> **No hay planes de discontinuar Employee Center Pro.** ServiceNow prevé seguir
> manteniéndolo y dándole soporte en el futuro previsible.

Esto permite una adopción por fases: empezar con Slate para audiencias o casos de
uso concretos, medir, y ampliar según crezca la paridad —sin un *big bang* ni
presión por apagar el portal actual.

## Entonces, ¿doy el salto?

Un marco rápido para decidir:

- **Explora Slate ya** si tu prioridad es la experiencia del empleado, apuestas
  por IA/Moveworks y tus casos de uso son relativamente estándar (bien cubiertos
  de serie).
- **Adopción por fases** si tienes Employee Center Pro muy personalizado: convive,
  empieza por audiencias acotadas y ve migrando a medida que Slate gana paridad.
- **Quédate en Employee Center (por ahora)** si dependes de widgets muy a medida
  o de casos de uso que Slate aún no cubre. No hay prisa: EC Pro no desaparece.

La conclusión: Slate no es "el Employee Center con un chatbot". Es un cambio de
paradigma —de *navegar* a *preguntar*— y conviene tratarlo como un proyecto de
experiencia, no como un upgrade técnico. La buena noticia es que tu configuración
de plataforma te acompaña y no te obliga a decidir de golpe.

---

### Fuentes

- [ServiceNow EmployeeWorks: Introducing Employee Slate](https://www.servicenow.com/community/employee-slate-and-employee/servicenow-employeeworks-introducing-employee-slate/ba-p/3537890)
- [Employee Slate Product FAQs — ServiceNow Community](https://www.servicenow.com/community/employee-slate-and-employee/employee-slate-product-faqs/ta-p/3543081)
- [Employee Slate — ServiceNow Docs](https://www.servicenow.com/docs/r/employee-service-management/employee-experience-foundation/employee-slate-landing-page.html)

*ServiceNow, Employee Center, Employee Slate y Moveworks son marcas de
ServiceNow, Inc. Este artículo es un análisis independiente.*
