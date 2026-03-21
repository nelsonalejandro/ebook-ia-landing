# Prompt Engineering — Landing Page

Landing page del libro **"Prompt Engineering"** de Nelson Ramos.

---

## Stack Tecnológico

**Frontend:** Vite + React 19 + Framer Motion + Lucide React

**Backend:** NestJS + Nodemailer

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
├── api-backend/           # NestJS API
│   ├── src/
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── email/
│   │   └── common/
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── nest-cli.json
├── email_template.html
├── .env.example
├── vite.config.js
└── package.json
```

---

## Instalación

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd api-backend
npm install
npm run start:dev
```

---

## Configuración

### Frontend (.env)
```env
VITE_BOOK_URL=ebook.nelsonramos.cl
VITE_PRICE=9.99
VITE_AMAZON_LINK=https://amazon.com/
VITE_API_URL=
VITE_API_TOKEN=tu-token-seguro
```

### Backend (api-backend/.env)
```env
NODE_ENV=development
PORT=3001

EMAIL_HOST=mail.tudominio.cl
EMAIL_PORT=587
EMAIL_USER=tu@email.com
EMAIL_PASS=tu_password

AMAZON_LINK=https://amazon.com/
API_TOKEN=tu-token-seguro

RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=3

CORS_ORIGINS=http://localhost:5173,https://book.tudominio.cl
```

---

## Despliegue

### Build Frontend
```bash
npm run build
# Sube la carpeta dist/
```

### Build Backend
```bash
cd api-backend
npm run build
# Sube api-backend/dist/ + api-backend/src/
```

---

## API Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/send-email` | Envía email con PDF adjunto |

**Headers requeridos:**
```
x-api-token: <API_TOKEN>
Content-Type: application/json
```

**Body:**
```json
{ "email": "usuario@example.com" }
```

---

## Seguridad

- Token de API obligatorio (`x-api-token`)
- Rate limiting: 3 solicitudes por IP cada 15 minutos
- CORS configurado para dominios específicos

---

© 2026 Nelson Ramos · [nelsonramos.cl](https://nelsonramos.cl)
