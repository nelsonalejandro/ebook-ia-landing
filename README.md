# Prompt Engineering — Landing Page

Landing page del libro **"Prompt Engineering"** de Nelson Ramos.

---

## Stack Tecnológico

**Frontend:** Vite + React 19 + Framer Motion + Lucide React

**Backend:** NestJS + Nodemailer ([ebook-ia-landing-backend](https://github.com/nelsonalejandro/ebook-ia-landing-backend))

---

## Estructura del Proyecto

```
├── public/
│   └── assets/
│       ├── book_cover.png
│       ├── lectora_nueva.png
│       ├── nelson_author.png
│       └── primer_capitulo_gratis.pdf
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── email_template.html
├── .env.example
├── vite.config.js
└── package.json
```

---

## Instalación

```bash
npm install
npm run dev
```

---

## Configuración

Copia `.env.example` → `.env`:

```env
VITE_BOOK_URL=ebook.nelsonramos.cl
VITE_PRICE=9.99
VITE_AMAZON_LINK=https://amazon.com/
VITE_API_URL=
VITE_API_TOKEN=tu-token-seguro
```

---

## Despliegue

```bash
npm run build
# Sube la carpeta dist/
```

---

© 2026 Nelson Ramos · [nelsonramos.cl](https://nelsonramos.cl)
