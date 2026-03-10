import React, { useState, Suspense, lazy} from 'react'
import Header from '../components/header.js';
import Welcome from '../components/welcome.js';
import './home.css';


const Time = lazy(() => import('../components/time.js'));
const Story = lazy(() => import('../components/story.js'));
const Location = lazy(() => import('../components/location.js'));
const Thank = lazy(() => import('../components/thank.js'));

const PETAL_EMOJIS = ['🌸','🌺','🌷','✿','❀','🌼'];

const petals = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left:  `${Math.random() * 105 - 2}%`,
  size:  10 + Math.random() * 14,
  emoji: PETAL_EMOJIS[Math.floor(Math.random() * PETAL_EMOJIS.length)],
  dur:   `${7 + Math.random() * 9}s`,
  delay: `${Math.random() * 12}s`,
  sway:  `${(Math.random() - 0.5) * 120}px`,
  op:    0.3 + Math.random() * 0.45,
}));

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
        setShowLanding(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, 1600);
  };

  return (
    <div>

      {/* ── ENVELOPE OVERLAY ── */}
      {showLanding && (
        <div className={`landing-overlay ${opening ? 'fade-out' : ''}`}>
          {/* ── FALLING PETALS inside overlay ── */}
          <div className="petals">
            <style>{petals.map(p => `
              .petal-${p.id} {
                left: ${p.left};
                font-size: ${p.size}px;
                animation-duration: ${p.dur};
                animation-delay: ${p.delay};
                --sway: ${p.sway};
                --op: ${p.op};
              }
            `).join('')}</style>
            {petals.map(p => (
              <div key={p.id} className={`petal petal-${p.id}`}>
                {p.emoji}
              </div>
            ))}
          </div>

          <div className={`envelope-scene ${opening ? 'opened' : ''}`} onClick={handleOpen}>
            <div className="env-body">
              <div className="env-left" />
              <div className="env-right" />
              <div className="env-base" />
              <div className="inner-card">
                <div className="card-top-border" />
                <p className="card-label">We Are Married</p>
                <p className="card-names">Duy <span className="card-amp">&</span> Phuong</p>
                <div className="card-divider">✦</div>
                <p className="card-date">May · 31 · 2026</p>
              </div>
            </div>
            <div className="env-flap">
              <div className="env-flap-face" />
            </div>
            <div className="wax-seal">
              <div className="seal-circle">
                <div className="seal-pulse" />
                <span className="seal-text">D&P</span>
              </div>
            </div>
          </div>

          <p className="hint">tap to reveal our news</p>
        </div>
      )}

      {/* ── HOME PAGE CONTENT ── */}
      <div className={showLanding ? 'page-hidden' : 'page-visible'}>
        <div className='home'>
          <Header />
          <Welcome />
          <Suspense fallback={null}>
            <Time />
            <Story />
            <Location/>
            <Thank />
          </Suspense>
        </div>
      </div>

    </div>
  );
}