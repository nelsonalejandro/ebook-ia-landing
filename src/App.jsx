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

        <section className="section" id="contenido" style={{ padding: '6rem 0' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Tabla de Contenido Oficial</h2>
          <div className="toc-elaborate-grid">
            
            {/* Parte 1 */}
            <motion.div 
              className="toc-part-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="toc-part-header">
                <span className="part-number">Parte 1</span>
                <h3>Fundamentos y Optimización</h3>
                <p>Domina las bases de la IA Generativa, reduce tus costos de API dramáticamente y entiende la arquitectura de memoria.</p>
              </div>
              <ul className="chapter-list">
                <li><strong>Capítulo 1:</strong> El Costo Oculto de "Solo Usar ChatGPT"</li>
                <li><strong>Capítulo 2:</strong> Cómo Piensa un LLM</li>
                <li><strong>Capítulo 3:</strong> Setup del Entorno de Trabajo Profesional</li>
                <li><strong>Capítulo 4:</strong> Prompt Engineering Orientado a Eficiencia</li>
                <li><strong>Capítulo 5:</strong> Chain of Thought y Razonamiento Controlado</li>
                <li><strong>Capítulo 6:</strong> Prompt Caching</li>
                <li><strong>Capítulo 7:</strong> Selección Dinámica de Modelos</li>
              </ul>
            </motion.div>

            {/* Parte 2 */}
            <motion.div 
              className="toc-part-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="toc-part-header">
                <span className="part-number">Parte 2</span>
                <h3>Ecosistemas Multi-Agente</h3>
                <p>Aprende a diseñar, intercomunicar y desplegar agentes de software capaces de utilizar herramientas externas.</p>
              </div>
              <ul className="chapter-list">
                <li><strong>Capítulo 8:</strong> Fundamentos de Agentes de IA</li>
                <li><strong>Capítulo 9:</strong> Arquitecturas Multi-Agente</li>
                <li><strong>Capítulo 10:</strong> Frameworks Comparativos</li>
                <li><strong>Capítulo 11:</strong> Memoria y Contexto</li>
                <li><strong>Capítulo 12:</strong> Herramientas (Tools)</li>
                <li><strong>Capítulo 13:</strong> Arquitectura de Costos</li>
                <li><strong>Capítulo 14:</strong> Observabilidad de Agentes</li>
                <li><strong>Capítulo 15:</strong> Evaluación Automatizada</li>
              </ul>
            </motion.div>

            {/* Parte 3 */}
            <motion.div 
              className="toc-part-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="toc-part-header">
                <span className="part-number">Parte 3</span>
                <h3>Casos Reales y Producción</h3>
                <p>Conecta la teoría con la práctica implementando ecosistemas seguros en servidores de producción reales.</p>
              </div>
              <ul className="chapter-list">
                <li><strong>Capítulo 16:</strong> Codificación Asistida</li>
                <li><strong>Capítulo 17:</strong> Análisis de Datos Complejos</li>
                <li><strong>Capítulo 18:</strong> Resolución Autónoma</li>
                <li><strong>Capítulo 19:</strong> Seguridad y Guardrails</li>
                <li><strong>Capítulo 20:</strong> Despliegue en Producción</li>
                <li><strong>Capítulo 21:</strong> El Futuro del Ingeniero Prompt</li>
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
