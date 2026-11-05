# Olivia Brutus · tarjeta NFC TapMola

Tarjeta de contacto independiente y compacta. HTML/CSS sin dependencias ni JavaScript de ejecución. No modifica Sandra Marcos ni otros proyectos.

## Ver la tarjeta

Desde esta carpeta:

```sh
npm run dev
```

Abrir http://localhost:4174/ . Solo requiere Node (para los comandos npm) y Python 3 (servidor local). También se puede servir directamente esta carpeta con cualquier servidor estático.

```sh
npm run check
npm run build
npm run preview
```

`dist/` contiene los archivos para publicar. Las rutas son relativas, compatibles con GitHub Pages en la raíz de este repositorio o en un subdirectorio como `/olivia-brutus/`. No requiere React Router ni reglas SPA. La URL pública definitiva debe grabarse en el NFC después de publicar; no se ha desplegado automáticamente.

## Archivos

- `index.html`: marca y siete acciones (llamada, correo, web, Instagram, Maps, vCard y reseñas).
- `styles.css`: diseño móvil, panel de máximo 440 px, estados de foco y movimiento reducido.
- `assets/`: logo original, fotografía oficial en dos tamaños WebP y fuente Red Hat Text local.
- `olivia-brutus.vcf`: contacto vCard 3.0 UTF-8, líneas CRLF y plegado a 75 bytes.
- `scripts/`: validación, empaquetado y servidor de vista previa.
- `docs/identidad-y-verificacion.md`: análisis, procedencia y límites de verificación.

## Contacto y reseñas

El enlace Guardar contacto descarga el archivo real, incluso con JavaScript desactivado. El servidor local entrega `text/vcard; charset=utf-8` y `Content-Disposition: attachment`. En hosting, conviene mantener esos encabezados para `.vcf`; el atributo HTML `download` también está configurado. El móvil decidirá cómo mostrar/importar el contacto.

Maps usa la URL oficial con `api=1`, dirección completa y el Place ID facilitado. Reseñas utiliza exactamente el enlace de Google Maps a la sección de reseñas proporcionado por el cliente; el botón de ubicación conserva su URL original. No se ha confirmado de forma independiente la entidad asociada al Place ID; véase el documento de verificación. WhatsApp se omite al no haberse encontrado un número Business confirmado.
