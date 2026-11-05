# Análisis y verificación

Revisión: 5 de noviembre de 2026.

## Referencia: Sandra Marcos

Se consultaron el HTML y la hoja `styles/imp_style.css` de https://tapmola.github.io/Sandra-Marcos-Interiorismo/ . La estructura es un panel centrado con identidad de marca, cuadrícula de acciones y botones de ancho completo para Maps, contacto e Instagram. Se ha trasladado ese concepto compacto; no se han añadido secciones de colección, horarios, ubicación ampliada ni contenido comercial.

## Identidad: Olivia Brutus

Fuente: https://oliviabrutus.com/ . El sitio oficial declara Red Hat Text, fondo blanco, texto negro, secundarios grises y botones negros discretos. El logotipo es fino y horizontal. Sus fotografías muestran looks completos y escenas de la marca con tonos naturales. La tarjeta utiliza blanco roto, negro y grises cálidos, iconos lineales y una única imagen de cabecera. Se conservan las proporciones del logotipo; la fotografía se recorta con `object-fit: cover`, sin deformación.

Recursos obtenidos de la web oficial y guardados localmente:

- Logotipo: https://oliviabrutus.com/cdn/shop/files/Diseno_sin_titulo_2_3a4e3c58-d90f-42e4-9ab8-a8996cdc1280.png?v=1752420552&width=1000
- Foto de la colección Maison Hotel, publicada en la home oficial de Olivia Brutus: https://oliviabrutus.com/cdn/shop/files/MAISONHOTEL-ECOMMFW26-DAY5_008_GABRIELLESTRIPES_GIULIETTANAVY_LEOPOLDCOGNAC_0029.jpg?v=1789633331&width=1000
- Fuente: https://oliviabrutus.com/cdn/fonts/red_hat_text/redhattext_n4.f45549d853e5e3e2907f21be9aecf95e1eaa7516.woff2

La fotografía se inspeccionó visualmente: modelo con camisa de rayas sobre fondo neutro, de Maison Hotel, sin textos ni collage. Se convirtió a WebP en 480 y 840 px de ancho. No se han usado stock ni imágenes generadas. Se descartaron recursos de la web cuyos nombres mencionan ChatGPT. La procedencia comprobada es su publicación en el sitio oficial; no se atribuye una autoría fotográfica no identificada.

## Ubicación y WhatsApp

La home oficial y la ficha municipal https://todoestaenmadrid.com/es/shops/olivia-brutus corroboran Paseo de la Castellana 176 y el teléfono 914357451. Los enlaces contienen exactamente `ChIJo3rfLQApQg0Rxdo9IRENZW4`, facilitado por el cliente. La sintaxis sigue https://developers.google.com/maps/documentation/urls/get-started . Google devolvió HTTP 200, pero el HTML sin ejecución de JavaScript no expone una ficha que permita confirmar independientemente la identidad del Place ID. No se debe presentar esa correspondencia como verificada.

El enlace https://search.google.com/local/writereview?placeid=ChIJo3rfLQApQg0Rxdo9IRENZW4 redirige al inicio de sesión de Google. Se utiliza la ficha de Maps como alternativa para reseñas y no se inventan puntuaciones. El sitio oficial contiene una referencia genérica a whatsapp.com, sin número verificado; no se incluye el botón.

## Comprobaciones y límites

- `npm run build`: comprueba y empaqueta HTML, CSS, recursos y vCard sin dependencias.
- `npm run check`: verifica siete acciones con destino real, enlaces HTTPS seguros, parámetros Maps, recursos locales y contacto vCard 3.0 UTF-8, CRLF y plegado a 75 bytes.
- Diseño preparado para móvil: viewport correcto, ancho máximo de 440 px, cuadrícula flexible, acciones de al menos 47 px, foco visible, texto alternativo y `prefers-reduced-motion`.
- Pendiente de verificación visual en Safari/Chrome y dispositivos físicos, así como de inspección de consola: la herramienta de control de navegador devuelve «Computer Use permissions are not granted». No se afirma haber realizado esas pruebas.
- La importación en la agenda depende del sistema móvil y no se ha probado en iPhone/Android físico.

Verificación HTTP local completada: página, CSS, dos imágenes WebP, logotipo y fuente devuelven HTTP 200. La vCard devuelve HTTP 200, `text/vcard; charset=utf-8` y `Content-Disposition: attachment`; los bytes descargados coinciden exactamente con el archivo original.

## Refinamiento visual de la tarjeta

Se sustituyó la fotografía por el retrato de la colección Maison Hotel citado arriba; se descartaron las cabeceras que llevaban logotipos superpuestos. Foto de 140 px de alto en móvil y 150 px en escritorio (antes 160/175). Se mantienen el logotipo real y Red Hat Text del sitio oficial.

Se retiraron el rótulo sobre la imagen, el footer TapMola y la pequeña línea decorativa. Los cuatro accesos muestran solo icono y acción, con altura mínima de 66 px. Fondo blanco roto continuo, sin sombra, marco exterior ni esquinas redondeadas; en móvil no hay margen exterior. Se conservaron los tres botones inferiores y su jerarquía.

Validación tras el cambio: build correcto; comparación exacta de los siete `href` con la versión anterior y SHA-256 de la vCard idéntico. La revisión visual en navegador sigue bloqueada por falta de permisos de Computer Use.

## Ajuste final: encabezado sin fotografía

La versión actual elimina la fotografía de la página y coloca el logotipo existente y «Boutique Multimarca · Madrid» dentro de un encabezado de fondo #EAE6E1. Fondo general #F7F5F2, texto #111111, secundarios #77736D y bordes #DDD9D3. No se incorpora ninguna imagen nueva. Los WebP anteriores quedan como recursos históricos sin referencia en la página. Encabezado compacto y a todo el ancho, seguido de 18 px hasta la cuadrícula. Comparación exacta de todo el bloque de navegación (incluidos iconos y enlaces) y vCard sin cambios; build correcto.

## Refinamiento cálido final

Se elimina el fondo diferenciado del encabezado. Paleta actual: fondo #F4F0EB, botones marfil #FAF8F5, bordes #D8C9B9, texto #211C19, secundarios #77716A, acento #8B6247 y guardar contacto #38271F. Bajo el subtítulo se incorpora únicamente una línea decorativa de 40 × 1 px mediante CSS. Se mantienen el logotipo y la tipografía originales, sin imágenes nuevas ni footer. Los estados de interacción usan tonos cálidos y respetan movimiento reducido. El texto de los botones horizontales puede ajustarse en pantallas estrechas. Navegación HTML, iconos y vCard comparados con la versión anterior sin cambios. Build correcto; la revisión visual en navegador mantiene la limitación de permisos documentada arriba.

## Tres ajustes puntuales

En móvil (hasta 480 px), el contenedor principal incorpora `padding-top: calc(30px + env(safe-area-inset-top, 0px))`; escritorio conserva su posición. Una franja lisa nogal #A78468 de 7 px se coloca dentro del lateral izquierdo mediante un pseudoelemento absoluto, sin añadir anchura, desplazar botones ni capturar pulsaciones. Se prioriza la franja lisa para mantener la estética discreta. El botón de reseñas usa exactamente la URL suministrada por el cliente (incluido `g_ep`); el escape HTML de `&` se decodifica al navegar. Los otros seis enlaces y todos los iconos permanecen idénticos. Build y validación correctos. La comprobación del CSS confirma que el margen superior se limita a móvil y que la franja no participa en el flujo ni añade desbordamiento horizontal. La comprobación visual en navegador sigue pendiente por los permisos indicados anteriormente.
