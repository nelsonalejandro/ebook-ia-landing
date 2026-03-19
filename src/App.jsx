import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ShoppingCart, CheckCircle, ExternalLink, Mail } from 'lucide-react';

const VITE_PRICE = import.meta.env.VITE_PRICE || '9.99';
const VITE_AMAZON_LINK = import.meta.env.VITE_AMAZON_LINK || '#';

function App() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      // Simulating email send and direct download for UX
      setTimeout(() => {
        window.open('/assets/primer_capitulo_gratis.pdf', '_blank');
      }, 1000);
    }
  };

  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      <nav style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontWeight: '800', fontSize: '1.25rem', letterSpacing: '1px' }}>
          AUTO<span style={{ color: 'var(--accent-color)' }}>CREATIVA</span>
        </div>
      </nav>

      <main className="container">
        <section className="hero">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Domina la Economía de la IA. Multiplica tu Productividad.</h1>
            <p>La guía radical para estructurar prompts como ingeniero, desplegar ecosistemas de agentes autónomos y recortar tus costos de API en un 70%. Disponible ahora por solo ${VITE_PRICE} USD.</p>
            
            <div className="glass-card" style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.25rem' }}>Recibe el Prólogo y 1º Capítulo Gratis</h3>
              {success ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#4ade80', fontWeight: 'bold' }}>
                  <CheckCircle size={24} />
                  <span>¡Revisa tu bandeja de entrada! Hemos iniciado la descarga del PDF.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleDownload}>
                  <div className="form-group">
                    <input 
                      type="email" 
                      className="input" 
                      placeholder="Tu mejor correo electrónico" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                      <Download size={20} />
                      Envíame el Capítulo
                    </button>
                  </div>
                  <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--text-secondary)' }}>
                    *Te enviaremos el PDF directamente y te avisaremos sobre recursos del libro.
                  </p>
                </form>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <a href={VITE_AMAZON_LINK} className="btn btn-secondary">
                <ShoppingCart size={20} />
                Comprar en Amazon (${VITE_PRICE})
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ position: 'relative' }}>
              <img src="/assets/book_cover.png" alt="Portada del libro de Economía de la IA y Prompt Engineering" />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                style={{ 
                  position: 'absolute', 
                  bottom: '-20px', 
                  left: '-20px', 
                  background: 'var(--card-bg)', 
                  backdropFilter: 'blur(10px)',
                  padding: '1.25rem', 
                  borderRadius: '0.75rem',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                }}
              >
                <BookOpen size={28} color="var(--accent-color)" />
                <div>
                  <div style={{ fontWeight: 'bold', color: 'white' }}>21 Capítulos Completos</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>+ Apéndices y Cheatsheets</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="section" id="por-que-leer">
          <div className="hero" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <motion.div 
              className="glass-card hero-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ padding: '3rem' }}
            >
              <h2 style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2rem' }}>¿Por qué hacer una pausa y leer este libro?</h2>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Vivimos en la era de los videos rápidos y los tutoriales fragmentados, donde consumimos información a ciegas sin consolidar fundamentos reales. Este libro nació con un propósito: darte el espacio y la tranquilidad para estructurar tu conocimiento.
              </p>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                La diferencia entre un consumidor superficial y una ingeniera o ingeniero capaz de orquestar ecosistemas de agentes autónomos, radica en la <strong>lectura profunda</strong>. Detente, asimila y descubre cómo evitar los costosos errores del ensayo y error.
              </p>
              <p style={{ color: 'var(--accent-color)', fontSize: '1.15rem', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: 0 }}>
                No se trata solo de hablarle a la máquina; se trata de dominar la infraestructura del futuro.
              </p>
            </motion.div>

            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <img 
                src="/assets/book_cover.png" 
                alt="Portada del libro de Economía de la IA y Prompt Engineering" 
                style={{ maxWidth: '400px', width: '100%', borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} 
              />
            </motion.div>
          </div>
        </section>

        <section className="section" id="contenido">
          <h2>Tabla de Contenido Principal</h2>
          <div className="toc-grid">
            <motion.div className="toc-item" whileHover={{ scale: 1.02 }}>
              <h3>1. Economía y Tokens</h3>
              <ul>
                <li>El Costo Oculto de "Solo Usar ChatGPT"</li>
                <li>Cómo Piensa un LLM Realmente</li>
                <li>El Ecosistema 2026: Llama 4 a Claude 4.5</li>
              </ul>
            </motion.div>
            <motion.div className="toc-item" whileHover={{ scale: 1.02 }}>
              <h3>2. Patrones Estructurales</h3>
              <ul>
                <li>Anatomía del Prompt Perfecto</li>
                <li>System Prompts y Context Caching</li>
                <li>Inyección Dinámica de Textos (RAG)</li>
              </ul>
            </motion.div>
            <motion.div className="toc-item" whileHover={{ scale: 1.02 }}>
              <h3>3. Autonomía y Agentes</h3>
              <ul>
                <li>Tool Use y Function Calling</li>
                <li>Despliegue de Múltiples Agentes</li>
                <li>Vibe Coding en la Práctica</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="section author-section">
          <h2>Sobre el Autor</h2>
          <p>Nelson Ramos es Ingeniero Informático y Desarrollador Full-Stack trabajando en arquitecturas modernas con modelos fundacionales generativos.</p>
          <div className="author-links">
            <a href="https://www.nelsonramos.cl" target="_blank" rel="noreferrer">
              <ExternalLink size={18} style={{ marginRight: '6px' }}/> Biografía y Portfolio
            </a>
            <a href="https://www.autocreativa.com" target="_blank" rel="noreferrer">
              <ExternalLink size={18} style={{ marginRight: '6px' }}/> AutoCreativa
            </a>
            <a href="mailto:contacto@nelsonramos.cl">
              <Mail size={18} style={{ marginRight: '6px' }}/> Contacto
            </a>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)' }}>
        <p>&copy; 2026 Nelson Ramos. Publicado independiente (Amazon KDP).</p>
      </footer>
    </div>
  );
}

export default App;
