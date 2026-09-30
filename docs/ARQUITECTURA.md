# Arquitectura

## Componentes

```text
Navegador
  └─ Nginx :8080
      ├─ React SPA
      └─ /api/* → Express :3001
                    └─ PostgreSQL :5432
```

El frontend y la API se publican bajo el mismo dominio. Esto evita CORS en producción y permite que el QR apunte a una dirección estable.

## Estructura

```text
src/pages/                 carta y administración
src/styles/                sistema visual oscuro
src/lib/menu.ts            tipos, API y URL permanente
public/assets/gastrobar/   imágenes de productos
server/menu/routes.js      API pública, sesión y CRUD
server/menu/validation.js  límites y validación de entradas
server/menu/security.js    hash scrypt y secreto JWT
server/menu/setup.js       esquema, catálogo y administrador
database/gastrobar.sql     modelo PostgreSQL
docs/                      identidad, despliegue y capturas
```

## Modelo de datos

### `gastrobar_categories`

- `id`: clave estable.
- `name`: nombre visible.
- `sort_order`: orden de presentación.
- `active`: visibilidad pública.

### `gastrobar_items`

- `name`, `description`, `price`: información pública.
- `category_id`: categoría asociada.
- `active`: publicado en la carta.
- `available`: disponible o agotado.
- `featured`: favorito de la casa.
- `image_url`: archivo local, URL HTTPS o imagen embebida.
- `sort_order`: orden dentro de la carta.
- `cost`, `extras_codes`, `source_category`, `recipe_notes`: administración interna; nunca salen en la API pública.

### `gastrobar_admins`

- Correo normalizado como clave.
- Contraseña almacenada como `scrypt(salt, password)`.
- Estado activo para revocar acceso sin borrar el registro.

## API

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/menu` | Carta pública filtrada |
| `POST` | `/api/menu/session` | Crea una sesión JWT |
| `GET` | `/api/menu/admin` | Catálogo completo para el CRUD |
| `POST` | `/api/menu/admin/items` | Crea un producto |
| `PUT` | `/api/menu/admin/items/:id` | Modifica un producto |
| `DELETE` | `/api/menu/admin/items/:id` | Elimina un producto |
| `POST/PUT/DELETE` | `/api/menu/admin/categories...` | CRUD de categorías |

## Seguridad aplicada

- No hay credenciales predeterminadas en el código.
- El secreto JWT debe tener al menos 32 caracteres.
- Sesiones con audiencia, emisor y vencimiento de ocho horas.
- Límite de ocho intentos de acceso por IP en quince minutos.
- Comparación de contraseñas en tiempo constante.
- Límites de longitud y rango en todos los campos.
- Imágenes limitadas a HTTPS o PNG/JPEG/WebP válidos.
- Respuestas administrativas exigen un administrador activo.
- La API pública omite costos, recetas y códigos internos.
- Las respuestas del menú usan `Cache-Control: no-store` para reflejar cambios.

El limitador de acceso vive en memoria de una instancia. Si se despliegan varias réplicas, debe sustituirse por Redis u otro almacenamiento compartido.
