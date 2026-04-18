# Farmlink Landing

Landing page estatica, responsive y lista para publicar para presentar **Farmlink**, un proyecto tecnologico aplicado a la agricultura.

## Estructura

- `index.html`: contenido, secciones y placeholders editables.
- `styles.css`: estilos visuales, layout responsive y sistema visual.
- `script.js`: navegacion movil, cierre del menu y mensaje del formulario estatico.
- `assets/`: logo, favicon e imagen principal.

## Como correrla localmente

Puedes abrir `index.html` directamente en el navegador.

Si prefieres levantar un servidor local:

### Opcion con Python

```bash
python -m http.server 5500
```

Luego abre `http://localhost:5500`.

### Opcion con VS Code

Usa una extension como Live Server y abre la carpeta del proyecto.

## Como editar el contenido

Edita el texto principal en `index.html`.

Busca estos marcadores para personalizar rapido:

- `https://wa.me/18090000000`
- `contacto@farmlink.com`
- `https://instagram.com/tuusuario`
- `https://linkedin.com/company/tuempresa`
- `assets/logo-placeholder.svg`
- `assets/hero-farmlink.svg`
- `action="#"`

## Que archivos tocar para personalizarla

- `index.html`: textos, enlaces, estructura, CTA y placeholders.
- `styles.css`: colores, tipografias, espaciado, cards y responsive.
- `script.js`: comportamiento del menu movil y aviso del formulario estatico.
- `assets/`: logo, favicon e imagen principal.

## Como publicarla gratis en GitHub Pages

1. Sube estos archivos a un repositorio en GitHub.
2. Ve a `Settings > Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Elige la rama principal y la carpeta `/root`.
5. Guarda los cambios.
6. GitHub te dara una URL publica.

## Como publicarla gratis en Cloudflare Pages

1. Sube el proyecto a GitHub.
2. Entra a Cloudflare Pages y crea un proyecto nuevo.
3. Conecta tu repositorio.
4. En la configuracion de build deja vacio el comando de build.
5. Usa `.` como output directory, o la raiz del proyecto.
6. Publica el proyecto.

## Recomendaciones de personalizacion

- Reemplaza `assets/logo-placeholder.svg` por tu logo final.
- Reemplaza `assets/hero-farmlink.svg` por una foto del campo o una captura del producto.
- Si vas a usar el formulario, conecta `action="#"` a un servicio como Formspree o Netlify Forms.
- Si quieres mejorar SEO, actualiza el `<title>`, la meta descripcion y la imagen Open Graph en `index.html`.
