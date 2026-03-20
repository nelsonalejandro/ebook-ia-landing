# Prompt Engineering para Ingenieros — Landing Page

Landing page oficial del libro **"Prompt Engineering para Ingenieros"** de Nelson Ramos.  
Construida con Vite + React. Incluye formulario de captura de email con envío automático del primer capítulo en PDF usando **EmailJS** (sin backend).

---

## Descripción

- Página de presentación del libro con portada, tabla de contenido y biografía del autor.
- Formulario que captura el email del visitante, envía el PDF del capítulo 1 directamente a su bandeja de entrada, y abre la descarga automáticamente.
- Botón de compra en Amazon Kindle.

## Requisitos

- Node.js 18+
- Cuenta gratuita en [EmailJS](https://www.emailjs.com/) (200 emails/mes gratis)

## Instalación

```bash
# Clonar el repo
git clone <url-del-repositorio>
cd ebook-ia-landing

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Luego edita .env con tus valores reales (ver sección de configuración)
```

## Configuración del archivo `.env`

Copia `.env.example` → `.env` y rellena los valores:

| Variable | Descripción |
|---|---|
| `VITE_PRICE` | Precio del libro (ej: `9.99`) |
| `VITE_AMAZON_LINK` | URL de compra en Amazon KDP |
| `VITE_PDF_URL` | URL pública del PDF del capítulo 1 |
| `VITE_EMAILJS_SERVICE_ID` | ID del servicio en EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID del template en EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Public Key de tu cuenta EmailJS |

### Configurar EmailJS paso a paso

1. Crea una cuenta en [emailjs.com](https://www.emailjs.com/) (gratuita, no requiere tarjeta)
2. Ve a **Email Services** → conecta Gmail u otro proveedor SMTP
3. Ve a **Email Templates** → crea un template con estos parámetros dinámicos:
   - `{{to_email}}` — email del destinatario (capturado del formulario)
   - `{{pdf_url}}` — enlace al PDF para descargar
   - `{{amazon_link}}` — enlace de compra en Amazon
4. Copia el **Service ID**, **Template ID** y **Public Key** al `.env`

> ⚠️ **Importante:** Nunca subas el archivo `.env` al repositorio. Está incluido en `.gitignore`.

## Cómo ejecutar el proyecto

```bash
# Modo desarrollo (con hot-reload)
npm run dev
# → http://localhost:5173

# Build para producción
npm run build

# Preview del build
npm run preview
```

## PDF del capítulo 1

El PDF está ubicado en `public/assets/primer_capitulo_gratis.pdf`.  
Es servido estáticamente por Vite en `/assets/primer_capitulo_gratis.pdf`.

Para generar/actualizar el PDF desde el manuscrito Markdown del libro, usa las herramientas del proyecto `book-prompt-engineering` (Pandoc + scripts).

## Estructura del proyecto

```
ebook-ia-landing/
├── public/
│   ├── assets/
│   │   ├── book_cover.png
│   │   ├── lectora_nueva.png
│   │   ├── nelson_author.png
│   │   └── primer_capitulo_gratis.pdf  ← PDF del capítulo 1
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx          ← lógica principal + EmailJS
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── email_template.html  ← referencia visual del template de email
├── .env.example         ← variables requeridas (copia a .env)
├── vite.config.js
└── package.json
```

## Stack tecnológico

- [Vite](https://vitejs.dev/) — bundler ultrarrápido
- [React 19](https://react.dev/) — UI
- [Framer Motion](https://www.framer.com/motion/) — animaciones
- [Lucide React](https://lucide.dev/) — íconos
- [EmailJS](https://www.emailjs.com/) — envío de emails sin backend

---

© 2026 Nelson Ramos · [nelsonramos.cl](https://www.nelsonramos.cl) · [AutoCreativa](https://www.autocreativa.com)
