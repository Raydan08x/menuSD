# Identidad visual del menú

Esta guía reúne los valores del manual de marca de Sierra Dorada y las decisiones específicas tomadas para el menú digital. Los colores del manual siguen siendo la fuente de identidad; la interfaz oscura usa variaciones tonales para mantener legibilidad y una atmósfera de gastrobar.

## Paleta oficial del manual de marca

| Rol | Pantone | HEX | RGB | CMYK | Uso recomendado |
| --- | --- | --- | --- | --- | --- |
| Dorado primario | 4515 C | `#B3A269` | 179, 162, 105 | 0, 9, 41, 30 | Acentos, elementos clave y mensajes importantes |
| Negro neutral primario | Neutral Black C | `#222223` | 34, 34, 35 | 3, 3, 0, 86 | Fondos, texto y elementos secundarios |
| Gris claro secundario | 663 C | `#E5E1E6` | 229, 225, 230 | 0, 2, 0, 10 | Fondo limpio, contraste y legibilidad |
| Blanco secundario | Referenciado como 4515 C en la lámina | Blanco visual | 255, 255, 255 | 0, 0, 0, 0 | Espacios limpios y aplicaciones de alto contraste |
| Verde adicional | 3308 C | `#034638` | 3, 70, 56 | 96, 0, 20, 73 | Aplicaciones complementarias |
| Vino adicional | 222 C | `#6C1D45` | 108, 29, 69 | 0, 73, 36, 58 | Aplicaciones complementarias |
| Gris adicional | Cool Gray 9 C | `#75787B` | 117, 120, 123 | 5, 2, 0, 52 | Información secundaria |

El manual también propone dorados metálicos Pantone 8362 C y Premium Metallics 10113 C para impresos con tintas especiales.

### Proporción orientativa del color

La lámina de uso de color muestra una distribución aproximada de 5%, 20%, 30% y 45%. En digital se interpreta así:

- Dorado como acento reducido.
- Negro neutral como base principal.
- Blanco y gris claro para legibilidad.
- Verde, vino y gris para aplicaciones complementarias puntuales.

## Paleta nocturna creada para la carta

| Token CSS | HEX | Uso en el menú |
| --- | --- | --- |
| `--paper` | `#111211` | Fondo principal |
| `--surface` | `#1B1D1B` | Tarjetas, paneles y cuadros de diálogo |
| `--ink` | `#F0E9DD` | Texto principal cálido |
| `--muted` | `#AAA69F` | Texto secundario |
| `--gold` | `#CFAA6C` | Acentos, precios, selección y botones |
| `--line` | `#35382F` | Bordes y divisores |
| Foco | `#B88738` | Contorno de teclado accesible |
| Estado agotado | `#E0AC82` | Aviso visible sobre fondo oscuro |

Estos tonos son una adaptación funcional de la marca. No reemplazan los colores oficiales en piezas institucionales.

## Paleta de la tarjeta QR

| Rol | HEX |
| --- | --- |
| Fondo marfil | `#FFFDF6` |
| Tinta | `#28271E` |
| Texto secundario | `#69675B` |
| Dorado impreso | `#8A662C` |
| Borde dorado | `#B39A69` |
| QR | `#000000` sobre `#FFFFFF` |

El QR usa negro puro y fondo blanco para maximizar contraste y lectura por cámaras. No se debe invertir, deformar ni cubrir su zona blanca de seguridad.

## Tipografía oficial

| Función | Familia | Uso |
| --- | --- | --- |
| Primaria | Dorsa | Títulos impresos y digitales |
| Secundaria | Barlow | Párrafos impresos y digitales |
| Secundaria | Barlow Condensed | Textos destacados |

Jerarquía señalada en el manual:

- Titular de pantalla: Dorsa, 175 pt, tracking 65.
- H1: Dorsa, 50 pt, tracking 65.
- H3: Dorsa, 35 pt, tracking 70.
- Subtítulo: Barlow Condensed, 20 pt.
- Párrafo: Barlow, 18 pt.

El repositorio incluye localmente Dorsa, Barlow y Barlow Condensed. La interfaz de la carta usa Georgia como serif editorial para sus titulares y Barlow en controles y párrafos. Esta elección diferencia la experiencia gastronómica sin alterar el logotipo.

## Criterios de aplicación

- Mantener el dorado como acento, no como fondo dominante.
- Usar texto claro sobre fondos oscuros y comprobar contraste.
- Conservar aire alrededor del isotipo.
- No recolorear, estirar, inclinar ni agregar efectos al logotipo.
- Mostrar fotografías con encuadre limpio y alimento protagonista.
- Conservar nombres y precios legibles antes de añadir adornos.
- Mantener visible el foco de teclado y textos alternativos en imágenes.

## Archivos de referencia

- `public/assets/isotipo.png`: símbolo usado en el encabezado.
- `public/fonts/`: fuentes locales de la marca.
- `src/styles/gastrobar-menu.css`: tokens y estilos de la carta.
- `src/styles/gastrobar-admin.css`: estilos del CRUD y la tarjeta QR.
- `docs/previews/`: capturas del resultado y piezas imprimibles.
