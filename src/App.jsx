import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, ShoppingCart, CheckCircle, ExternalLink, Mail } from 'lucide-react';

const VITE_PRICE = import.meta.env.VITE_PRICE || '9.99';
const VITE_AMAZON_LINK = import.meta.env.VITE_AMAZON_LINK || '#';

function App() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

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

  if (currentPage === 'bio') {
    return (
      <div className="app-container">
        <div className="bg-glow"></div>
        <div className="bg-glow-2"></div>
        <main className="container" style={{ padding: '2rem 0 4rem 0', minHeight: '60vh' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card" 
            style={{ maxWidth: '900px', margin: '0 auto', padding: 0, overflow: 'hidden' }}
          >
            <div style={{ width: '100%', height: 'auto' }}>
              <img 
                src="/assets/nelson_author.png" 
                alt="Nelson Ramos" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
            <div style={{ padding: '3.5rem', textAlign: 'left' }}>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'none', WebkitTextFillColor: 'white' }}>Nelson Ramos</h1>
              <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '2rem' }}>Autor de "Economía de la IA" y Desarrollador Full-Stack</p>
              
              <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#e2e8f0' }}>
                <p style={{ marginBottom: '1.5rem' }}>Nací en Talca, Chile, el 28 de septiembre de 1990. Desde muy joven desarrollé una curiosidad insaciable y una gran pasión por las ciencias de la computación. Me llamaba mucho la atención aquello que no podía controlar, lo que comúnmente llamamos magia... Me titulé como Ingeniero en Ejecución Informática del I.P. Santo Tomás sede Talca en el año 2015. Tras explorar diversas áreas de la informática, en 2019 tomé la decisión definitiva de enfocarme de lleno en el desarrollo de software.</p>
                <p style={{ marginBottom: '1.5rem' }}>Ese periodo (2019-2020) fue un verdadero punto de inflexión profesional y personal. Durante la pandemia, tomé la decisión de volver a Talca, a la casa de mis padres. Aquella mudanza forzada terminó transformándose en una etapa de reinvención total: me sumergí de lleno en la formación continua, abrazando el teletrabajo y el deporte como mi nuevo estilo de vida y comprendiendo la importancia de la salud mental y los hábitos conscientes y positivos.</p>
                <p style={{ marginBottom: '1.5rem' }}>En el ámbito laboral, he tenido el enorme privilegio de participar en proyectos tecnológicos de gran envergadura a nivel nacional en Chile, colaborando en soluciones para la <strong>Bolsa de Comercio de Santiago</strong>, <strong>Gasconnet</strong>, <strong>RedPay</strong> y proyectos asociados a <strong>Indra</strong> y <strong>Subtel</strong>. Estas experiencias me permitieron consolidar conocimientos críticos en modularización de software, análisis profundo de sistemas y arquitectura avanzada de soluciones tecnológicas.</p>
                <p style={{ marginBottom: '1.5rem' }}>Desde el año 2022 opero al 100% en modalidad de teletrabajo. Paralelamente, me desempeño como freelance a través de mi emprendimiento tecnológico, <strong><a href="https://www.autocreativa.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>AutoCreativa</a></strong>. Desde allí, me dedico intensamente a crear proyectos y productos digitales de manera constante, aplicando enfoques de desarrollo modernos como el <em>vibe coding</em> y la integración de arquitecturas generativas de IA.</p>
              </div>
              
              <button className="btn btn-secondary" onClick={() => setCurrentPage('home')} style={{ marginTop: '1.5rem' }}>
                Volver a la portada
              </button>
            </div>
          </motion.div>
        </main>
        <footer style={{ textAlign: 'center', padding: '1.5rem 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)' }}>
          <p style={{ margin: 0 }}>&copy; 2026 Nelson Ramos. Publicado independiente (Amazon KDP).</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      <main className="container">
        <section className="hero" style={{ paddingTop: '2rem' }}>
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Domina la Economía de la IA. Multiplica tu Productividad.</h1>
            <p>La guía radical para estructurar prompts como ingeniero, desplegar ecosistemas de agentes autónomos y recortar tus costos de API en un 70%. Disponible ahora por solo ${VITE_PRICE} USD.</p>
            
            <div className="glass-card download-card" style={{ marginBottom: '2.5rem', marginTop: '2.5rem', border: '1px solid rgba(245, 194, 17, 0.3)', background: 'rgba(20, 30, 45, 0.6)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', fontSize: '1.4rem' }}>Recibe el 1º Capítulo Gratis</h3>
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
                    *Te enviaremos el PDF directamente a tu correo antes de realizar una compra
                  </p>
                </form>
              )}
            </div>

          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="/assets/book_cover.png" alt="Portada del libro de Economía de la IA y Prompt Engineering" className="main-book-cover float-animation" />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ textAlign: 'center', marginTop: '2.5rem' }}
            >
              <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '1rem', fontWeight: '500', letterSpacing: '0.5px' }}>Recibe tu copia digital en Kindle</h4>
              <a href={VITE_AMAZON_LINK} target="_blank" rel="noreferrer" className="btn amazon-btn-animated" style={{ display: 'inline-flex' }}>
                <ShoppingCart size={20} />
                Comprar en Amazon (${VITE_PRICE})
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="section" id="por-que-leer">
          <div className="pause-card-container">
            <motion.div 
              className="pause-image"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/assets/lectora_nueva.png" 
                onError={(e) => { e.target.onerror = null; e.target.src = "/assets/lectora.png"; }}
                alt="Ingeniera leyendo el libro de Prompt Engineering mientras trabaja" 
              />
            </motion.div>

            <motion.div 
              className="pause-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>¿Por qué hacer una pausa y leer este libro?</h2>
              <p>
                Vivimos en la era de los videos rápidos y los tutoriales fragmentados, donde consumimos información a ciegas sin consolidar fundamentos reales. Este libro nació con un propósito: darte el espacio y la tranquilidad para estructurar tu conocimiento.
              </p>
              <p>
                La diferencia entre un consumidor superficial y una ingeniera o ingeniero capaz de orquestar ecosistemas de agentes autónomos, radica en la <strong>lectura profunda</strong>. Detente, asimila y descubre cómo evitar los costosos errores del ensayo y error.
              </p>
              <p className="highlight-text">
                No se trata solo de hablarle a la máquina; se trata de dominar la infraestructura del futuro.
              </p>
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
            <button onClick={() => setCurrentPage('bio')} className="link-button">
              <BookOpen size={18} style={{ marginRight: '6px' }}/> Biografía
            </button>
            <a href="https://www.nelsonramos.cl" target="_blank" rel="noreferrer">
              <ExternalLink size={18} style={{ marginRight: '6px' }}/> Portfolio
            </a>
            <a href="https://www.autocreativa.com" target="_blank" rel="noreferrer">
              <ExternalLink size={18} style={{ marginRight: '6px' }}/> AutoCreativa
            </a>
            <a href="mailto:nelsonalejandroramosrivera@gmail.com">
              <Mail size={18} style={{ marginRight: '6px' }}/> Contacto
            </a>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '1.5rem 0 0.5rem 0', color: 'var(--text-secondary)', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)' }}>
        <p style={{ margin: 0 }}>&copy; 2026 Nelson Ramos. Publicado independiente (Amazon KDP).</p>
      </footer>
    </div>
  );
}

export default App;
