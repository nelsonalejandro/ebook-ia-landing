import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Download, ShoppingCart, CheckCircle, ExternalLink, Mail, Loader, Globe, Linkedin, Github } from 'lucide-react';

const VITE_PRICE        = import.meta.env.VITE_PRICE        || '9.99';
const VITE_AMAZON_LINK  = import.meta.env.VITE_AMAZON_LINK  || '#';


/* ─── Glitch Game Modal ───────────────────────────────────── */
const GAME_DURATION = 10;

function getRank(clicks) {
  if (clicks >= 120) return { label: '\u26a1 GLITCH MASTER', color: '#F5C211', videoId: 'LjXWqKKLW6g', videoExtra: '&list=RDLjXWqKKLW6g&start_radio=1' };
  if (clicks >= 80)  return { label: '\ud83d\udd25 OVERCLOCKER',  color: '#ff7c3a', videoId: 'Gw-rUCwLoQ0', videoExtra: '' };
  if (clicks >= 50)  return { label: '\ud83d\udcbb INGENIERO',    color: '#4ade80', videoId: 'Hse_HTX6KGs', videoExtra: '' };
  if (clicks >= 25)  return { label: '\ud83d\udc4d HUMANO',       color: '#94a3b8', videoId: '22z31vdqnWI', videoExtra: '' };
  return               { label: '\ud83d\udc0c TORTUGA',          color: '#64748b', videoId: '856GA_JWVoU', videoExtra: '' };
}

function GlitchGame({ onClose }) {
  const [phase, setPhase]   = useState('idle');    // idle | countdown | playing | result
  const [count, setCount]   = useState(3);
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const intervalRef = useRef(null);
  const gameRef     = useRef(null);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Focus the tap area when playing
  useEffect(() => {
    if (phase === 'playing' && gameRef.current) gameRef.current.focus();
  }, [phase]);

  const startCountdown = useCallback(() => {
    setPhase('countdown');
    setCount(3);
    setClicks(0);
    setTimeLeft(GAME_DURATION);
    let c = 3;
    intervalRef.current = setInterval(() => {
      c -= 1;
      setCount(c);
      if (c <= 0) {
        clearInterval(intervalRef.current);
        startGame();
      }
    }, 1000);
  }, []);

  const startGame = useCallback(() => {
    setPhase('playing');
    let t = GAME_DURATION;
    intervalRef.current = setInterval(() => {
      t -= 1;
      setTimeLeft(t);
      if (t <= 0) {
        clearInterval(intervalRef.current);
        setPhase('result');
      }
    }, 1000);
  }, []);

  useEffect(() => () => clearInterval(intervalRef.current), []);

  const handleTap = useCallback(() => {
    if (phase === 'playing') setClicks(c => c + 1);
  }, [phase]);

  const cps   = (clicks / GAME_DURATION).toFixed(1);
  const rank  = getRank(clicks);
  const prog  = ((GAME_DURATION - timeLeft) / GAME_DURATION) * 100;

  return (
    <div className="glitch-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="glitch-modal">
        <button className="glitch-close" onClick={onClose} aria-label="Cerrar">×</button>

        {/* IDLE */}
        {phase === 'idle' && (
          <>
            <p className="glitch-tag">// easter_egg.exe</p>
            <h2 className="glitch-title" data-text="Nelson Ramos">
              Nelson<br/>Ramos
            </h2>
            <p className="glitch-desc">
              {GAME_DURATION} segundos.<br/>Haz click lo más rápido que puedas.
            </p>
            <button className="glitch-btn" onClick={startCountdown}>[ INICIAR ]</button>
          </>
        )}

        {/* COUNTDOWN */}
        {phase === 'countdown' && (
          <>
            <p className="glitch-tag">// iniciando_en...</p>
            <div className="glitch-countdown">{count === 0 ? '\u00a1YA!' : count}</div>
          </>
        )}

        {/* PLAYING */}
        {phase === 'playing' && (
          <>
            <div className="glitch-hud">
              <span className="glitch-tag">{timeLeft}s</span>
              <span className="glitch-tag" style={{ color: '#F5C211' }}>{clicks} TAP</span>
            </div>
            <div className="glitch-progress-bar">
              <div className="glitch-progress-fill" style={{ width: `${prog}%` }} />
            </div>
            <button
              ref={gameRef}
              className="glitch-tap-zone"
              onClick={handleTap}
              onKeyDown={(e) => e.code === 'Space' && handleTap()}
            >
              <span>TAP</span>
            </button>
          </>
        )}

        {/* RESULT */}
        {phase === 'result' && (
          <>
            <p className="glitch-tag">// resultado</p>
            <div className="glitch-result-score">{clicks}</div>
            <p style={{ color: '#94a3b8', margin: '0 0 0.25rem', fontSize: '0.9rem' }}>clicks en {GAME_DURATION}s — {cps} cps</p>
            <p className="glitch-rank" style={{ color: rank.color }}>{rank.label}</p>
            <div style={{ margin: '1.25rem 0 0', borderRadius: '0.5rem', overflow: 'hidden', lineHeight: 0 }}>
              <iframe
                width="100%"
                height="180"
                src={`https://www.youtube.com/embed/${rank.videoId}?autoplay=1&rel=0${rank.videoExtra}`}
                title="rank video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                style={{ border: 'none', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="glitch-btn" onClick={startCountdown}>[ RETRY ]</button>
              <button className="glitch-btn" style={{ background: 'transparent', color: '#94a3b8', border: '1px solid #94a3b833' }} onClick={onClose}>[ SALIR ]</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


const SOCIAL_LINKS = [
  { label: 'Portafolio',              href: 'https://www.nelsonramos.cl',               icon: Globe       },
  { label: 'AutoCreativa',            href: 'https://www.autocreativa.com',             icon: ExternalLink },
  { label: 'LinkedIn',                href: 'https://www.linkedin.com/in/nelsonalejandroramos/', icon: Linkedin  },
  { label: 'GitHub',                  href: 'https://github.com/nelsonalejandro',       icon: Github      },
  { label: 'contacto@nelsonramos.cl', href: 'mailto:contacto@nelsonramos.cl',           icon: Mail        },
];

/* ─── Email via backend (nodemailer) ───────────────────── */
async function sendEmail(email) {
  const base  = import.meta.env.VITE_API_URL || '';
  const token = import.meta.env.VITE_API_TOKEN;
  const res = await fetch(`${base}/api/send-email`, {
    method:  'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-token':  token || '',
    },
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok || !data.ok) throw new Error(data.error || 'Error enviando email');
}

/* ─── Bio page ───────────────────────────────────────────────── */

function BiographyPage({ onBack, onOpenGame }) {
  return (
    <div className="bio-page app-container">
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      <main className="container">
        <div className="bio-wrapper">
          <button className="bio-back-btn" onClick={onBack}>
            <ArrowLeft size={16} />
            Volver
          </button>
          
          <div className="bio-layout">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bio-left"
            >
              <div className="bio-image-card">
                <img src="/assets/nelson_author.png" alt="Nelson Ramos" />
                <div className="bio-image-glow"></div>
              </div>
              <div className="bio-social-row">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="bio-social-link"
                    title={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bio-right"
            >
              <span className="bio-label">Sobre el autor</span>
              <h1>Nelson Ramos</h1>
              <p className="bio-role">Ingeniero Informático · Desarrollador Full-Stack · Autor</p>

              <p>Nací en Talca, Chile, el 28 de septiembre de 1990. Desde muy joven desarrollé una curiosidad insaciable por las ciencias de la computación, enraizada desde mis primeros contactos con videoconsolas hacia el año 1998. Me titulé como Ingeniero en Ejecución Informática del I.P. Santo Tomás sede Talca en el año 2015 y, tras explorar diversas áreas de la informática, en 2019 tomé la decisión definitiva de enfocarme de lleno en el desarrollo de software.</p>

              <p>El periodo 2019–2020 fue un verdadero punto de inflexión. Viví el estallido social a pasos del metro, luego la pandemia mundial cambió todo radicalmente. Tomé la decisión de volver a Talca, donde aquella mudanza forzada se transformó en una etapa de reinvención total: formación continua, teletrabajo, deporte y hábitos conscientes. Un cambio de <em>mindset</em> que me otorgar una vida más plena y profesional.</p>

              <p>En el ámbito laboral, participé en proyectos tecnológicos de gran envergadura: <strong>Bolsa de Comercio de Santiago</strong>, <strong>Gasconnet</strong>, <strong>RedPay</strong> y proyectos asociados a <strong>Indra</strong> y <strong>Subtel</strong>. Desde 2022 opero al 100% en teletrabajo a través de mi emprendimiento <strong>AutoCreativa</strong>, donde desarrollo productos digitales aplicando enfoques modernos como el <em>vibe coding</em> y arquitecturas generativas de IA.</p>

              <p>Este libro nació de esas notas que tomé aquella noche mirando una factura de AWS de $890 USD. Lo escribí para que otros ingenieros de Chile y Latinoamérica no repitan los mismos errores que cometí.</p>
            </motion.div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <button className="glitch-footer-link" onClick={() => onOpenGame()}>© 2026 — Nelson Ramos</button>
      </footer>
    </div>
  );
}

/* ─── Main App ───────────────────────────────────────────────── */

function App() {
  const [email, setEmail]     = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [showGame, setShowGame]       = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError('');

    try {
      await sendEmail(email);
      setSuccess(true);
    } catch (err) {
      console.error('Email error:', err);
      setError('No pudimos enviar el correo. Por favor intenta nuevamente o escríbenos a contacto@nelsonramos.cl');

    } finally {
      setLoading(false);
    }
  };

  if (currentPage === 'bio') {
    return (
      <>
        <BiographyPage onBack={() => setCurrentPage('home')} onOpenGame={() => setShowGame(true)} />
        {showGame && <GlitchGame onClose={() => setShowGame(false)} />}
      </>
    );
  }


  return (
    <>
    <div className="app-container">
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

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

            <div className="glass-card download-card" style={{ marginBottom: '2.5rem', marginTop: '2.5rem', border: '1px solid rgba(245, 194, 17, 0.3)', background: 'rgba(20, 30, 45, 0.6)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)', fontSize: '1.4rem' }}>Recibe el 1º Capítulo Gratis</h3>

                  {success ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontWeight: 'bold' }}
                >
                  <CheckCircle size={24} style={{ color: 'var(--accent-color)' }} />
                  <span>¡Enviado! Revisa tu bandeja de entrada en breve...</span>
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
                      disabled={loading}
                    />
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader size={20} style={{ animation: 'spin 1s linear infinite' }} />
                          Enviando PDF…
                        </>
                      ) : (
                        <>
                          <Download size={20} />
                          Envíame el Capítulo
                        </>
                      )}
                    </button>
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{ fontSize: '0.85rem', margin: '0.5rem 0 0 0', color: '#f59e0b' }}
                    >
                      {error}
                    </motion.p>
                  )}

                  <p style={{ fontSize: '0.85rem', margin: '0.5rem 0 0 0', color: 'var(--text-secondary)' }}>
                    *Te enviaremos el PDF directamente a tu correo. Sin spam.
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
                onError={(e) => { e.target.onerror = null; e.target.src = '/assets/lectora.png'; }}
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
              <p>Vivimos en la era de los videos rápidos y los tutoriales fragmentados, donde consumimos información a ciegas sin consolidar fundamentos reales. Este libro nació con un propósito: darte el espacio y la tranquilidad para estructurar tu conocimiento.</p>
              <p>La diferencia entre un consumidor superficial y una ingeniera o ingeniero capaz de orquestar ecosistemas de agentes autónomos, radica en la <strong>lectura profunda</strong>. Detente, asimila y descubre cómo evitar los costosos errores del ensayo y error.</p>
              <p className="highlight-text">No se trata solo de hablarle a la máquina; se trata de dominar la infraestructura del futuro.</p>
            </motion.div>
          </div>
        </section>

        <section className="section" id="contenido" style={{ padding: '6rem 0' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Tabla de Contenido Oficial</h2>
          <div className="toc-elaborate-grid">

            <motion.div className="toc-part-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
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

            <motion.div className="toc-part-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
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

            <motion.div className="toc-part-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
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
              <BookOpen size={18} style={{ marginRight: '6px' }} /> Biografía
            </button>
            <a href="https://www.nelsonramos.cl" target="_blank" rel="noreferrer">
              <ExternalLink size={18} style={{ marginRight: '6px' }} /> Portafolio
            </a>
            <a href="https://www.autocreativa.com" target="_blank" rel="noreferrer">
              <ExternalLink size={18} style={{ marginRight: '6px' }} /> AutoCreativa
            </a>
            <a href="mailto:contacto@nelsonramos.cl">
              <Mail size={18} style={{ marginRight: '6px' }} /> Contacto
            </a>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <button className="glitch-footer-link" onClick={() => setShowGame(true)}>© 2026 — Nelson Ramos</button>
      </footer>
    </div>

    {showGame && <GlitchGame onClose={() => setShowGame(false)} />}
    </>
  );
}

export default App;
