# Dirección Cinematográfica – Estrella Dorada
**Premios Asobares Quindío**

Este documento define las directrices obligatorias de dirección de arte, narrativa visual, composición de escenas y comportamiento responsive para el sistema de **Motion Scroll Cinematográfico** del sitio oficial de **Estrella Dorada**.

---

## 1. Concepto y Filosofía de Diseño
* **El Protagonista Absoluto:** El trofeo (premio) es el núcleo de la experiencia visual. La interfaz y los textos HTML actúan como elementos de acompañamiento y contexto, nunca como protagonistas.
* **Sin Renderizado 3D en Tiempo Real:** El navegador no procesará modelos 3D, escenas WebGL, Blender ni Three.js. Toda la sensación tridimensional y cinematográfica se construirá renderizando secuencias de imágenes estáticas WebP sincronizadas con el porcentaje de scroll.
* **Continuidad Visual:** La experiencia de scroll debe sentirse como una única toma de cámara continua ("toma de plano secuencia"). No existen cortes bruscos, fundidos a negro intermedios ni transiciones no justificadas entre escenas.

---

## 2. Dirección de Arte y Estética
* **Inspiración:** Ceremonias de premiación internacionales de alto prestigio (Oscar Awards, Golden Globe Awards, Golden Moon Awards) y el minimalismo de branding de lujo editorial (Apple).
* **Paleta de Colores:** Negro absoluto (`#000000`), dorado metálico refinado, blanco y grises muy oscuros.
* **Iluminación:** Dramática, con sombras profundas, destellos controlados sobre la superficie dorada del metal y uso estratégico de espacio negativo para legibilidad del texto HTML.
* **Estilo:** Evitar completamente estéticas corporativas tradicionales, efectos o animaciones web exageradas que degraden el prestigio y la exclusividad del evento.

---

## 3. Narrativa y Estructura Cinematográfica (Storyboard)

El recorrido visual consta de tres escenas principales que cuentan una historia de prestigio:
1. **Escena 1:** *"El premio existe."* (Expectación y misterio).
2. **Escena 2:** *"El premio es entregado."* (Humanización y reconocimiento).
3. **Escena 3:** *"El premio representa prestigio."* (Consolidación como símbolo de lujo).

---

## 4. Adaptabilidad y Composiciones por Resolución

### A. DESKTOP (Composición Horizontal)

#### Escena 1: El Premio
* **Composición:** Contenido HTML a la izquierda, espacio para el video a la derecha. El trofeo ocupa ~35% del viewport.
* **Visual:** Un teatro elegante de fondo, atril de lujo en la derecha con el trofeo reposando.
* **Movimiento:** Contenido de texto estático. El video tiene un balanceo sutil y respiración de cámara para denotar vida.
* **Transición 1:** El texto del Hero se desvanece con el scroll. El atril sale de plano, la cámara realiza un avance cinematográfico hacia el trofeo y se inicia la transición a la siguiente escena.

#### Escena 2: La Entrega
* **Composición:** Video en la parte izquierda, contenido textual HTML a la derecha.
* **Visual:** El trofeo es sostenido por las manos de una persona vestida elegantemente. No se muestran rostros para mantener el foco en la estatuilla.
* **Movimiento:** Movimiento de cámara continuo que simula la continuación natural de la toma.
* **Transición 2:** El fondo del teatro se desvanece a negro. La persona abandona el plano y el trofeo vuelve a quedar solo.

#### Escena 3: El Ícono
* **Composición:** Trofeo ubicado en el sector derecho, texto HTML alineado a la izquierda.
* **Visual:** Fondo negro absoluto. El trofeo flota aislado, iluminado de forma dramática para destacar el acabado metálico dorado.
* **Movimiento:** Rotación y respiración de cámara mínimas.

---

### B. MOBILE (Composición Vertical)

#### Escena 1: El Premio
* **Composición:** Video ocupando el 100% de la pantalla. En la parte inferior, un panel Glass translúcido oscuro que contiene el título, descripción y botón de acción.
* **Visual:** Teatro y atril con el trofeo centrado en la mitad superior.
* **Transición 1:** El panel Glass y su contenido se desplazan hacia arriba y se desvanecen. El atril desaparece de plano y la cámara avanza rápidamente hacia la escena de entrega.

#### Escena 2: La Entrega
* **Composición:** Texto explicativo en la parte superior. El trofeo y la mano que lo sostiene ocupan la mitad superior de la pantalla en una toma cerrada.
* **Visual:** Se muestra el acto de entrega de forma rápida (instante cinematográfico). El fondo comienza a oscurecerse hacia el negro absoluto.
* **Transición 2:** La mano suelta el trofeo y abandona lentamente el encuadre. La cámara realiza un seguimiento al trofeo hacia la parte inferior de la pantalla.

#### Escena 3: El Ícono
* **Composición:** Texto HTML legible sobre fondo negro absoluto en la mitad superior. El trofeo queda flotando solo en la mitad inferior de la pantalla con una inclinación de entre 30 y 45 grados.
* **Visual:** Fondo negro sólido (`#000000`) sin elementos adicionales.
* **Movimiento:** Balanceo sutil. Actúa como transición directa y fluida hacia el contenido tradicional.

---

### C. TABLET (Punto Intermedio)
* **Composición:** Distribución más abierta aprovechando el espacio horizontal intermedio, sin duplicar la rigidez de móvil ni el formato ancho de desktop.
* **Visual:** Mantiene el mismo lenguaje de plano secuencia en tres pasos respetando las proporciones verticales y horizontales de pantallas medianas.

---

## 5. Zonas Seguras (Safe Areas)
Para garantizar la legibilidad y evitar colisiones visuales entre el contenido dinámico y el trofeo, los videos maestros de cada resolución deben cumplir estrictamente con los siguientes márgenes seguros de composición:

* **Zonas Seguras Desktop:**
  * Texto HTML: Reservado en el primer y último tercio de la pantalla (izq/der).
  * Trofeo: Siempre visible e interactivo en los tercios opuestos, sin solapamientos.
* **Zonas Seguras Mobile:**
  * Primer tercio inferior reservado para paneles translúcidos.
  * Centro y mitad superior libres de texto para mantener visibilidad del trofeo.
* **Zonas Seguras Tablet:**
  * Márgenes adaptativos que previenen que el trofeo sea cortado o encimado por textos al cambiar de orientación.

---

## 6. Comportamiento en la Finalización del Motion Scroll
Al terminar la animación de la **Escena 3**:
* El Motion Scroll se congela en el último frame (negro absoluto).
* Las siguientes secciones del sitio (Galería, Servicios, Categorías, Blog, FAQ, Contacto, Footer) fluyen de manera normal sobre un fondo oscuro tradicional mediante scroll estándar del navegador.
* Toda animación subsiguiente en el sitio es de carácter puramente interactivo de interfaz (fade-ins, deslizamientos de texto ligeros) y no interfiere con la narrativa del trofeo.
