# Despliegue y QR permanente

## Variables necesarias

- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`.
- `MENU_JWT_SECRET`: secreto aleatorio de 32 caracteres o más.
- `VITE_GASTROBAR_MENU_URL`: dominio permanente que se imprimirá en el QR.
- `VITE_API_URL`: normalmente `/api` cuando Nginx sirve todo bajo el mismo host.

`MENU_ADMIN_EMAIL` y `MENU_ADMIN_PASSWORD` solo se usan al crear o cambiar un administrador. No deben permanecer en el archivo de producción.

## Despliegue con Docker Compose

```bash
cp .env.example .env
# Edita .env
docker compose up -d --build
docker compose ps
```

El servicio `setup` crea el esquema e importa el catálogo inicial sin sobrescribir registros existentes. Después arranca la API y, cuando responde saludable, Nginx publica el frontend.

## Crear el administrador

```bash
docker compose run --rm \
  -e MENU_ADMIN_EMAIL=correo@ejemplo.com \
  -e MENU_ADMIN_PASSWORD='contraseña-segura-de-12-o-mas-caracteres' \
  setup node server/menu/setup.js --admin
```

El mismo comando cambia la contraseña si el correo ya existe.

## Dominio y proxy

El dominio actual es `gastro.sierradorada.co`. El proxy público debe enviar tráfico al puerto publicado por el servicio `web` y preservar el encabezado `Host`.

La raíz del dominio puede redirigir a `/gastrobar/menu`. El QR codifica la raíz estable `https://gastro.sierradorada.co`, de modo que una ruta interna puede cambiar sin reimprimir las mesas.

## Imprimir el QR

1. Entra a `/admin/gastrobar`.
2. Abre **QR de las mesas**.
3. Descarga una de estas opciones:
   - QR PNG para uso rápido.
   - QR SVG para imprenta y escalado sin pérdida.
   - Tarjeta completa PNG para colocar en mesas.
   - Impresión directa desde el navegador.
4. Haz una prueba con varios celulares antes del tiraje final.

No agregues parámetros, fechas ni enlaces temporales a la URL. La tarjeta de referencia está en `docs/previews/tarjeta-qr-mesas.png`.

## Copias de seguridad

La información dinámica vive en el volumen PostgreSQL. El repositorio contiene solo un catálogo inicial sanitizado. Programa respaldos de la base de datos:

```bash
docker compose exec -T db pg_dump -U menu_sd menu_sd > menu-sd-backup.sql
```

Guarda el respaldo fuera del servidor y prueba periódicamente su restauración.
