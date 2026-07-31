# Estrella Dorada – Plataforma de Premiación

## Estado: Planeación
**Objetivo general:** Desarrollar una plataforma web premium para el evento **Estrella Dorada**, diseñada para permanecer durante múltiples ediciones anuales, donde únicamente cambie el contenido y el material audiovisual sin modificar la arquitectura de la aplicación.

---

## REGLAS DEL PROYECTO
Estas reglas no podrán romperse durante el desarrollo.

1. **No se improvisa:** Si falta información, se deja documentada como pendiente. Nunca se inventará contenido.
2. **Justificación técnica:** Toda decisión técnica deberá estar justificada. No se implementarán librerías, componentes o dependencias sin una razón específica.
3. **Reutilización:** Toda funcionalidad deberá ser reutilizable. No se desarrollarán componentes exclusivos para una edición del evento.
4. **Escalabilidad:** La aplicación deberá permitir crear futuras ediciones cambiando únicamente el contenido.
5. **Rendimiento:** El rendimiento tiene prioridad. No se aceptarán animaciones que degraden significativamente la experiencia en dispositivos móviles.
6. **Documentación:** Todo cambio importante deberá quedar documentado antes de implementarse.

---

## FILOSOFÍA DEL PROYECTO
* No estamos desarrollando una página web; estamos desarrollando una experiencia digital.
* El protagonista del sitio es el premio (trofeo).
* Todo el recorrido del usuario gira alrededor del trofeo.

---

## Arquitectura del Proyecto
La experiencia visual se construirá mediante **Motion Scroll Cinematográfico**.

El navegador nunca renderizará un modelo 3D. Toda la sensación de movimiento será generada mediante una secuencia de imágenes sincronizada con el scroll. El usuario tendrá la percepción de que la cámara se mueve, cuando realmente lo único que cambia es el frame mostrado.

---

## Pipeline de Producción
El flujo oficial de trabajo será el siguiente:

IA  
↓  
Video Maestro  
↓  
Extracción de Frames  
↓  
Optimización  
↓  
Secuencia WebP  
↓  
Motor Motion Scroll  
↓  
Landing Page  

*Nota: Los videos NO serán utilizados directamente en producción. Serán únicamente el material maestro para generar los frames.*

---

## Estrategia Responsive
El proyecto utilizará tres videos maestros completamente independientes. NO se utilizarán recortes automáticos ni se reutilizará un único render. Cada resolución tendrá una composición propia.

Videos necesarios:
* **Desktop**
* **Tablet**
* **Mobile**

Todos compartirán exactamente la misma narrativa y movimiento de cámara, cambiando únicamente la composición.

---

## Resoluciones Maestras
Estas resoluciones servirán únicamente como material maestro para ser convertidas posteriormente a secuencias WebP optimizadas:
* **Desktop:** 3840x2160 (Relación 16:9)
* **Tablet:** 2048x2732 (Relación aproximada 3:4)
* **Mobile:** 1440x2560 (Relación 9:16)

---

## Motion Scroll
El scroll del usuario controlará el frame mostrado.
* No existirá reproducción automática.
* No existirán videos reproduciéndose.
* Toda la animación dependerá exclusivamente del porcentaje de scroll.
* El contenido HTML será el que se desplazará, mientras que el fondo permanecerá fijo.

---

## Fondo Compartido
Las primeras tres secciones compartirán exactamente el mismo fondo animado.
* El fondo permanecerá fijo y las secciones HTML pasarán por encima del fondo.
* Al finalizar la tercera sección, el fondo animado desaparecerá completamente.
* La siguiente sección comenzará con su propio background.
* El último frame del Motion Scroll deberá terminar en negro absoluto (`#000000`) para coincidir exactamente con el fondo de la siguiente sección.

---

## Decisiones de Arquitectura
✓ Se descarta completamente el uso de modelos 3D.  
✓ Se descarta Blender como parte del flujo de producción.  
✓ Se descarta Three.js para renderizado del trofeo.  
✓ El material maestro serán videos generados mediante IA.  
✓ Los videos serán convertidos posteriormente a secuencias WebP.  
✓ La web únicamente consumirá secuencias WebP.  
✓ Desktop, Tablet y Mobile tendrán videos independientes.  
✓ La experiencia estará completamente sincronizada con el scroll.  
✓ La prioridad absoluta del proyecto será calidad visual, rendimiento y sensación cinematográfica.  

---

## FASES DEL PROYECTO
El desarrollo se estructurará rigurosamente en las siguientes fases consecutivas:

* **Fase 1:** Storyboard cinematográfico.
* **Fase 2:** Generación de videos maestros mediante IA.
* **Fase 3:** Extracción de frames.
* **Fase 4:** Optimización de imágenes.
* **Fase 5:** Implementación del motor Motion Scroll.
* **Fase 6:** Integración con la Landing.
* **Fase 7:** Responsive.
* **Fase 8:** Optimización.
* **Fase 9:** Testing.

---

## DOCUMENTACIÓN OBLIGATORIA DE MÓDULOS
Antes de desarrollar cualquier módulo, se requiere un documento específico con:
* Objetivo
* Alcance
* Entradas y Salidas
* Restricciones y Dependencias
* Comportamiento esperado (general y responsive)
* Criterios de aceptación
