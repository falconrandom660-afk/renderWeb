# RenderWeb — Next.js ejemplo

Pequeña app Next.js que muestra "Bienvenido" y está lista para desplegar en Render.

Instrucciones locales:

```bash
# desde la carpeta renderWeb
npm install
npm run dev
```

Build y producción (Render usa estas mismas órdenes):

```bash
npm install
npm run build
npm run start
```

Despliegue en Render:
- Crea un repositorio Git con esta carpeta y súbelo a GitHub/GitLab.
- En el dashboard de Render, crea un nuevo "Web Service" y conéctalo al repo.
- Setea `Build Command` a `npm install && npm run build` y `Start Command` a `npm run start`.
- Si usas el `render.yaml`, Render detectará la configuración del servicio automáticamente.

Archivo clave:
- `package.json` — scripts y dependencias
- `pages/index.js` — página principal con "Bienvenido"
- `render.yaml` — plantilla de servicio para Render
