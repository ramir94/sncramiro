---
title: 'La IA no me está haciendo más tonto (me está haciendo descubrir más)'
description: 'La tesis pesimista dice que la IA nos hará el trabajo y, con el tiempo, más tontos. Tiene más razón de la que parece. Pero usada con método —no con fuerza de voluntad— pasa lo contrario: me hace aprender y descubrir lo que no sabía que existía.'
pubDate: 2026-07-13
lang: 'es'
tags: ['ia', 'desarrollo', 'aprendizaje']
cover: '/covers/ia-aprender.svg'
translationKey: 'ia-no-me-hace-mas-tonto'
---

Hay una tesis pesimista que se repite mucho: la IA va a hacernos el trabajo y,
poco a poco, nos volverá **más tontos**. Si el modelo escribe el código, razona
el diseño y recuerda la API por nosotros, ¿para qué vamos a aprender nada?

Después de unos meses usando IA a diario en desarrollo, mi experiencia es la
contraria: **me hace aprender más, no menos.** Pero no quiero venderte humo, así
que empiezo dándole al pesimista su mejor versión —que es más fuerte de lo que
suele reconocerse— y luego explico por qué, aun así, creo que se equivoca.

## La tesis pesimista, en su versión fuerte

Seamos justos. El pesimista no habla de ti en tu mejor día; habla del **caso
medio** y del **largo plazo**, y ahí tiene munición:

- **Los juniors.** Quien nunca ha peleado un problema a mano puede aprender a
  *pedir la solución* sin aprender nunca a *resolverlo*. La habilidad no llega a
  formarse.
- **El largo plazo.** Igual que el GPS te puede dejar sin sentido de la
  orientación, delegar a diario puede dejarte sin los reflejos que creías tener.
  El daño no se ve en un mes; se ve en años.
- **La fuerza de voluntad no escala.** "Ya verificaré, ya entenderé" suena bien
  hasta que llega el deadline. Bajo presión, todos cogemos el camino fácil:
  copiar, pegar, seguir. Y ese es exactamente el mecanismo que describe la tesis.

Si tu respuesta al pesimista es "basta con usarla bien", le estás dando la razón:
para la mayoría, "usarla bien" no es lo que pasa por defecto.

## Lo que me está pasando a mí

Dicho todo eso: en mi caso la IA no ha sustituido mi criterio, lo ha
**acelerado**. La uso menos como un oráculo que escupe soluciones y más como
**otro desarrollador sentado a mi lado**: uno que se ha leído la documentación
entera, recuerda la API concreta y me responde en un segundo lo que a mí me
llevaría media hora de búsqueda.

Con alguien así al lado no dejas de pensar. **Piensas mejor y más rápido.** La
pregunta es por qué a mí me suma y al pesimista le resta. La respuesta no es que
yo tenga más fuerza de voluntad. Es el **método**.

## Su mejor carta: descubrir lo que no sabías que existía

El mayor cambio no es que la IA resuelva lo que ya sé hacer. Es que me **descubre
lo que ni sabía que existía**.

En plataformas grandes y maduras hay un montón de capacidades poco anunciadas,
módulos que no salen en el primer tutorial, formas "de caja" de hacer algo que
llevabas resolviendo a mano. Antes, dar con eso dependía de la suerte: un
compañero que lo mencionaba, un hilo perdido en un foro, horas de Google. Muchas
veces ni llegabas, porque **no puedes buscar lo que no sabes que existe**.

La IA colapsa esa distancia. Describo el problema en lenguaje natural y me dice
"para esto la plataforma ya tiene X". A partir de ahí voy a la documentación
oficial, lo verifico y lo entiendo. No me da la respuesta a ciegas: me da **el
nombre de la puerta** que yo no sabía ni que estaba. Y esto —a diferencia de casi
todo lo demás— no es "Google más rápido": es acceso a algo que quizá **nunca**
habría encontrado.

## Qué se delega y qué no

Aquí está la clave para el argumento del largo plazo. No todo el conocimiento es
igual:

- **Conocimiento de consulta** —la sintaxis exacta, el nombre de un método, en
  qué tabla vive un campo—: se puede delegar sin culpa. Cada capa de abstracción
  de la historia "deskilló" la de abajo, y nadie llora por no escribir ensamblador.
- **Criterio** —por qué un diseño aguanta, qué caso límite lo rompe, qué encaja
  en tu arquitectura—: **nunca** se delega.

La pregunta correcta no es "¿se atrofia algo?" (siempre se atrofia algo), sino
"¿se atrofia lo que importa?". Bien usada, la IA se lleva el *lookup* y te deja
más tiempo para el criterio. Mal usada, le entregas también el criterio — y ahí
el pesimista acierta de pleno.

## No es fuerza de voluntad, es método

El punto más fuerte del pesimista es que la disciplina falla bajo presión. Tiene
razón, así que la solución no puede depender de la virtud: tiene que estar en
**cómo usas la herramienta**, de modo que entender sea el *subproducto*, no un
esfuerzo extra. Tres hábitos que a mí me lo hacen automático:

- **Predecir y luego verificar.** Antes de preguntar, adivino la respuesta. Si
  acierto, refuerzo; si fallo, aprendo justo lo que no sabía. Preguntar en frío
  no enseña; contrastar tu predicción, sí.
- **Pedir que explique y cite, no solo que produzca.** "Dame la solución y por
  qué, con el enlace a la doc." El porqué viene de serie y la verificación cuesta
  un clic.
- **Usar la IA para atacar mi diseño.** "Voy a hacerlo así, ¿qué se rompe?".
  Trato cada salida como una **hipótesis a refutar**, no como una respuesta a
  aceptar. Incluso le pido que argumente en mi contra. Eso desactiva el mayor
  riesgo —creerte una IA segura y equivocada— y de paso me obliga a defender el
  porqué antes de escribir la primera línea.

Ninguno de los tres es fuerza de voluntad. Son la forma de preguntar. Y esa forma
**se puede enseñar** — también a un junior. Ahí es donde el "depende de cómo la
uses" deja de ser una excusa y pasa a ser un plan.

## Entonces

No creo que la tesis pesimista sea falsa; creo que está **incompleta**. Tiene
razón en el caso medio y en el largo plazo *si* la interacción se diseña para
producir en vez de para enseñar. Pero eso no es una ley de la naturaleza: es una
elección de método.

Así que no defiendo un "la IA no nos hace más tontos" universal. Defiendo algo más
estrecho y, creo, más honesto:

> **La IA no te hace más tonto si la interacción está diseñada para enseñar — y
> ese diseño es el todo.**

En mi caso, estos meses me han hecho descubrir partes de la plataforma que llevaba
años sin ver, diseñar con más criterio y aprender a un ritmo que solo no habría
alcanzado. No por tener más voluntad. Por preguntar mejor.
