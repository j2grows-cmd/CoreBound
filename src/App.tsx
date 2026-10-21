import { useState } from 'react'
import { ArrowDown, ArrowRight, AudioLines, CircleHelp, Compass, Gem, Menu, Settings2, Shield, Sparkles, X } from 'lucide-react'
import { elements } from './data/elements'

type Screen = 'home' | 'codex' | 'settings'

function App() {
  const [selected, setSelected] = useState(0)
  const [screen, setScreen] = useState<Screen>('home')
  const [showMenu, setShowMenu] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const element = elements[selected]

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <button className="brand" onClick={() => setScreen('home')} aria-label="CoreBound home">
          <span className="brand-mark"><Gem size={19} strokeWidth={1.5} /></span>
          <span>CORE<span className="brand-light">BOUND</span><small>CHRONICLES OF THE ELEMENTS</small></span>
        </button>
        <nav className={showMenu ? 'nav-links nav-open' : 'nav-links'}>
          <button className={screen === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => { setScreen('home'); setShowMenu(false) }}>Overview</button>
          <button className={screen === 'codex' ? 'nav-link active' : 'nav-link'} onClick={() => { setScreen('codex'); setShowMenu(false) }}>Element Codex</button>
          <button className={screen === 'settings' ? 'nav-link active' : 'nav-link'} onClick={() => { setScreen('settings'); setShowMenu(false) }}>Settings</button>
        </nav>
        <div className="top-actions">
          <button className="icon-button" title="Toggle ambience indicator" onClick={() => setSoundOn(!soundOn)}><AudioLines size={17} /><span className={soundOn ? 'status-dot on' : 'status-dot'} /></button>
          <button className="menu-toggle icon-button" onClick={() => setShowMenu(!showMenu)} aria-label="Toggle menu">{showMenu ? <X size={20} /> : <Menu size={20} />}</button>
          <button className="profile-button" onClick={() => setScreen('settings')}><span className="profile-orb">?</span><span>Wayfarer</span><ArrowDown size={13} /></button>
        </div>
      </header>

      {screen === 'home' && (
        <>
          <section className="hero hero-with-title-art">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> A WORLD ON THE EDGE OF AWAKENING</div>
              <h1>YOUR DESTINY<br />IS <span className="gradient-text">UNWRITTEN.</span></h1>
              <p className="hero-description">Ten forces. One fractured world. Discover the power that binds you to something greater — and decide what comes next.</p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => setScreen('codex')}><Sparkles size={16} /> Explore the elements <ArrowRight size={16} /></button>
                <button className="secondary-button" onClick={() => setScreen('codex')}><Compass size={16} /> Enter the codex</button>
              </div>
              <div className="hero-meta"><span className="live-pip" /> <span>THE FIRST AGE</span><i /> <span>VOL. 01 — THE AWAKENING</span></div>
            </div>
            <div className="hero-art" aria-label={`Selected element: ${element.name}`}>
              <div className="hero-art-halo" />
              <img className="hero-character" src={element.hero} alt={`${element.name} element D-rank hero artwork`} />
              <div className="hero-art-overlay"><span>D-RANK AWAKENED</span><b>{element.name.toUpperCase()}</b></div>
              <div className="art-caption"><span>FIG. {String(selected + 1).padStart(3, '0')}</span><span>{element.subtitle.toUpperCase()}</span></div>
              <span className="art-star star-a">✧</span><span className="art-star star-c">✦</span>
            </div>
            <div className="hero-side-note"><span>THE KNOWN WORLD</span><span className="vertical-rule" /><span>BEYOND THE VEIL</span></div>
          </section>

          <section className="elements-section">
            <div className="section-heading">
              <div><div className="eyebrow"><span className="eyebrow-line" /> THE ELEMENTAL ORDER</div><h2>Ten paths. <span>Infinite possibility.</span></h2></div>
              <button className="text-link" onClick={() => setScreen('codex')}>VIEW FULL CODEX <ArrowRight size={15} /></button>
            </div>
            <div className="element-grid">
              {elements.map((item, index) => (
                <button key={item.id} className={selected === index ? 'element-card selected' : 'element-card'} style={{ '--element': item.color } as React.CSSProperties} onClick={() => setSelected(index)} aria-pressed={selected === index}>
                  <span className="element-number">{String(index + 1).padStart(2, '0')}</span>
                  <img className="element-art" src={item.art} alt="" loading="lazy" />
                  <span className="element-name">{item.name}</span>
                  <span className="element-subtitle">{item.subtitle}</span>
                  <span className="element-card-line" />
                </button>
              ))}
            </div>
            <div className="element-detail" style={{ '--element': element.color } as React.CSSProperties}>
              <img className="detail-hero-thumb" src={element.hero} alt={`${element.name} D-rank hero`} loading="lazy" />
              <div className="detail-copy"><span className="detail-kicker">SELECTED ELEMENT · {String(selected + 1).padStart(2, '0')} · D-RANK</span><h3>{element.name}</h3><p>{element.description}</p></div>
              <button className="detail-button" onClick={() => setScreen('codex')}>Discover this path <ArrowRight size={16} /></button>
            </div>
          </section>
        </>
      )}

      {screen === 'codex' && (
        <section className="subpage">
          <div className="eyebrow"><span className="eyebrow-line" /> ARCHIVES OF THE FIRST AGE</div>
          <h1 className="subpage-title">THE ELEMENT <span className="gradient-text">CODEX.</span></h1>
          <p className="subpage-intro">Every force leaves a mark upon the world. Choose an entry to reveal its doctrine.</p>
          <div className="codex-layout">
            <div className="codex-list">{elements.map((item, index) => <button key={item.id} onClick={() => setSelected(index)} className={selected === index ? 'codex-row chosen' : 'codex-row'} style={{ '--element': item.color } as React.CSSProperties}><span>{String(index + 1).padStart(2, '0')}</span><img src={item.art} alt="" /><strong>{item.name}</strong><small>{item.subtitle}</small><ArrowRight size={15} /></button>)}</div>
            <div className="codex-detail" style={{ '--element': element.color } as React.CSSProperties}>
              <div className="codex-hero-frame"><img src={element.hero} alt={`${element.name} D-rank hero artwork`} /></div>
              <span className="detail-kicker">ELEMENTAL ENTRY · {String(selected + 1).padStart(2, '0')} · D-RANK</span><h2>{element.name}</h2><p>{element.description}</p><div className="codex-divider" /><div className="codex-fact"><span>KNOWN AS</span><strong>{element.subtitle}</strong></div><div className="codex-fact"><span>RANK</span><strong>D — AWAKENED</strong></div><div className="codex-fact"><span>DOCTRINE</span><strong>{element.name === 'Void' ? 'The unseen truth' : element.name === 'Light' ? 'Clarity through purpose' : 'Balance through change'}</strong></div><button className="secondary-button" onClick={() => setScreen('home')}>Return to overview <ArrowRight size={15} /></button>
            </div>
          </div>
        </section>
      )}

      {screen === 'settings' && (
        <section className="subpage settings-page">
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR JOURNEY, YOUR RULES</div><h1 className="subpage-title">GAME <span className="gradient-text">SETTINGS.</span></h1>
          <p className="subpage-intro">Your personal preferences. These are prototype settings and are not saved between sessions yet.</p>
          <div className="settings-card"><div className="setting-row"><div><strong>Ambient sound indicator</strong><p>Visual toggle only; audio has not been implemented.</p></div><button className={soundOn ? 'toggle enabled' : 'toggle'} onClick={() => setSoundOn(!soundOn)} aria-pressed={soundOn}><span /></button></div><div className="setting-row"><div><strong>Interface theme</strong><p>CoreBound obsidian · antique gold · elemental accents.</p></div><span className="theme-chip">OBSIDIAN</span></div><div className="setting-row"><div><strong>Progression</strong><p>Player profiles and saves are planned for a later phase.</p></div><span className="coming-soon">IN DEVELOPMENT</span></div></div>
        </section>
      )}

      <footer className="footer"><div className="footer-brand"><Gem size={16} /> COREBOUND <span>© 2026</span></div><div className="footer-center">A WORLD SHAPED BY WHAT YOU BECOME.</div><div className="footer-right"><Shield size={13} /> EARLY FOUNDATION <span className="footer-dot" /> <button onClick={() => setScreen('settings')}><Settings2 size={13} /> PREFERENCES</button><button title="About this prototype" onClick={() => setScreen('codex')}><CircleHelp size={14} /></button></div></footer>
    </main>
  )
}

export default App
