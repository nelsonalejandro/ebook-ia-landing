require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const express    = require('express');
const cors       = require('cors');
const nodemailer = require('nodemailer');
const path       = require('path');
const fs         = require('fs');

const app  = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(cors());
app.use(express.json());

/* ─── Nodemailer transporter ─────────────────────────────── */
const transporter = nodemailer.createTransport({
  host:   process.env.VITE_EMAIL_HOST,
  port:   parseInt(process.env.VITE_EMAIL_PORT || '587', 10),
  secure: false,          // STARTTLS on port 587
  auth: {
    user: process.env.VITE_EMAIL_USER,
    pass: process.env.VITE_EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false }, // tolera certificados autofirmados
});

/* ─── POST /api/send-email ───────────────────────────────── */
app.post('/api/send-email', async (req, res) => {
  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Email inválido' });
  }

  try {
    // Read HTML template
    const templatePath = path.resolve(__dirname, '../email_template.html');
    let htmlBody = fs.readFileSync(templatePath, 'utf-8');
    htmlBody = htmlBody.replace(/\{\{AMAZON_LINK\}\}/g, process.env.VITE_AMAZON_LINK || '#');
    htmlBody = htmlBody.replace(/\{\{UNSUBSCRIBE_LINK\}\}/g, '#');

    // Read PDF attachment
    const pdfPath = path.resolve(__dirname, '../public/assets/primer_capitulo_gratis.pdf');
    const pdfBuffer = fs.readFileSync(pdfPath);

    await transporter.sendMail({
      from:    `"Nelson Ramos" <${process.env.VITE_EMAIL_USER}>`,
      to:      email,
      subject: '📘 Tu primer capítulo gratis — Prompt Engineering para Ingenieros',
      html:    htmlBody,
      attachments: [
        {
          filename:    'primer_capitulo_gratis.pdf',
          content:     pdfBuffer,
          contentType: 'application/pdf',
        },
      ],
    });

    console.log(`✅ Email enviado a ${email}`);
    res.json({ ok: true });

  } catch (err) {
    console.error('❌ Error enviando email:', err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Email server corriendo en http://localhost:${PORT}`);
});
