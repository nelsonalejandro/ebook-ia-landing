require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express    = require('express');
const cors       = require('cors');
const nodemailer = require('nodemailer');
const path       = require('path');
const fs         = require('fs');

const app  = express();
const PORT = process.env.PORT || process.env.SERVER_PORT || 3001;

// Rutas relativas al archivo server/index.js
const ROOT_DIR     = path.resolve(__dirname, '..');
const TEMPLATE_PATH = path.join(ROOT_DIR, 'email_template.html');
const PDF_PATH      = path.join(ROOT_DIR, 'public', 'assets', 'primer_capitulo_gratis.pdf');
const DIST_PATH     = path.join(ROOT_DIR, 'dist');

app.use(cors());
app.use(express.json());

/* ─── Servir frontend (producción) ──────────────────────── */
if (fs.existsSync(DIST_PATH)) {
  app.use(express.static(DIST_PATH));
}

/* ─── Nodemailer transporter ─────────────────────────────── */
const transporter = nodemailer.createTransport({
  host:   process.env.VITE_EMAIL_HOST,
  port:   parseInt(process.env.VITE_EMAIL_PORT || '587', 10),
  secure: false,           // STARTTLS en port 587
  auth: {
    user: process.env.VITE_EMAIL_USER,
    pass: process.env.VITE_EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

/* ─── POST /api/send-email ───────────────────────────────── */
app.post('/api/send-email', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Email inválido' });
  }

  try {
    // Leer template HTML
    let htmlBody = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
    htmlBody = htmlBody.replace(/\{\{AMAZON_LINK\}\}/g,     process.env.VITE_AMAZON_LINK || '#');
    htmlBody = htmlBody.replace(/\{\{UNSUBSCRIBE_LINK\}\}/g, '#');

    // Adjuntar PDF
    const pdfBuffer = fs.readFileSync(PDF_PATH);

    await transporter.sendMail({
      from:    `"Nelson Ramos" <${process.env.VITE_EMAIL_USER}>`,
      to:      email,
      subject: '📘 Tu primer capítulo gratis — Prompt Engineering para Ingenieros',
      html:    htmlBody,
      attachments: [{
        filename:    'primer_capitulo_gratis.pdf',
        content:     pdfBuffer,
        contentType: 'application/pdf',
      }],
    });

    console.log(`✅ Email enviado a ${email}`);
    res.json({ ok: true });

  } catch (err) {
    console.error('❌ Error enviando email:', err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
});

/* ─── Fallback: sirve index.html para rutas del SPA ─────── */
if (fs.existsSync(DIST_PATH)) {
  app.get('/{*path}', (req, res) => {
    res.sendFile(path.join(DIST_PATH, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
