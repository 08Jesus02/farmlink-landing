# Farmlink Landing

Landing page estática, responsive y lista para publicar para presentar **Farmlink**, un proyecto tecnológico aplicado a la agricultura.

## Estructura

- `index.html`: contenido, secciones y placeholders editables.
- `styles.css`: estilos visuales, layout responsive y sistema visual.
- `script.js`: navegación móvil y año automático del footer.

## Cómo correrla localmente

Como es un sitio estático, puedes abrir `index.html` directamente en el navegador.

Si prefieres levantar un servidor local:

### Opción con Python

```bash
python -m http.server 5500
```

Luego abre `http://localhost:5500`.

### Opción con VS Code

Usa una extensión como Live Server y abre la carpeta del proyecto.

## Cómo editar el contenido

Edita el texto principal en `index.html`.

Busca estos marcadores para personalizar rápido:

- `LOGO`
- `https://wa.me/18090000000`
- `contacto@farmlink.com`
- `https://instagram.com/tuusuario`
- `https://linkedin.com/company/tuempresa`
- `assets/hero-farmlink.jpg`
- `action="#"`

## Qué archivos tocar para personalizarla

- `index.html`: textos, enlaces, estructura, CTA y placeholders.
- `styles.css`: colores, tipografías, espaciado, cards y responsive.
- `script.js`: comportamiento del menú móvil.

## Cómo publicarla gratis en GitHub Pages

1. Sube estos archivos a un repositorio en GitHub.
2. Ve a `Settings > Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Elige la rama principal y la carpeta `/root`.
5. Guarda los cambios.
6. GitHub te dará una URL pública.

## Cómo publicarla gratis en Cloudflare Pages

1. Sube el proyecto a GitHub.
2. Entra a Cloudflare Pages y crea un proyecto nuevo.
3. Conecta tu repositorio.
4. En la configuración de build deja vacío el comando de build.
5. Usa `.` como output directory, o la raíz del proyecto.
6. Publica el proyecto.

## Recomendaciones de personalización

- Sustituye `LOGO` por una imagen o SVG real.
- Reemplaza `assets/hero-farmlink.jpg` por una foto del campo o una captura del producto.
- Si vas a usar el formulario, conecta `action="#"` a un servicio como Formspree o Netlify Forms.
- Si quieres mejorar SEO, actualiza el `<title>`, la meta descripción y la imagen Open Graph en `index.html`.
