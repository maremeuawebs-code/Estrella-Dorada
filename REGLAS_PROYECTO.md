# Reglas del Proyecto - Estrella Dorada

## Decisiones Arquitectónicas y de Diseño Clave

* **Animaciones y Experiencia Visual:** Se ha realizado una transición de tecnologías 3D (como Three.js) a un enfoque de **Cinematic Motion Scroll**.
    * Se utilizan secuencias de imágenes WebP.
    * Estas secuencias están sincronizadas con los porcentajes de scroll del usuario.
    * Esto permite una experiencia premium de alto rendimiento sin los costos computacionales del renderizado 3D en tiempo real.
