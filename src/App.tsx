import { useState } from 'react'
import { ArrowDown, ArrowRight, AudioLines, CircleHelp, Compass, Flame, Gem, Menu, Settings2, Shield, Sparkles, Swords, X } from 'lucide-react'

const elements = [
  { name: 'Flame', subtitle: 'THE UNYIELDING', color: '#ff744f', symbol: '✦', description: 'Power born from the heart of a dying star.' },
  { name: 'Tide', subtitle: 'THE ETERNAL', color: '#55c8f2', symbol: '◈', description: 'Patience is an ocean that moves worlds.' },
  { name: 'Nature', subtitle: 'THE AWAKENED', color: '#9ddc83', symbol: '❋', description: 'All things return to the roots.' },
  { name: 'Volt', subtitle: 'THE UNBOUND', color: '#d9e66e', symbol: 'ϟ', description: 'A single spark can rewrite fate.' },
  { name: 'Frost', subtitle: 'THE SILENT', color: '#a7dcff', symbol: '❄', description: 'Stillness is its own kind of strength.' },
  { name: 'Light', subtitle: 'THE RADIANT', color: '#f5d995', symbol: '✧', description: 'Even the darkest age casts a shadow.' },
  { name: 'Stone', subtitle: 'THE ANCIENT', color: '#c5a68b', symbol: '⬡', description: 'Endure what others cannot.' },
  { name: 'Storm', subtitle: 'THE TEMPEST', color: '#b1a2ff', symbol: 'ϟ', description: 'The sky remembers every rebellion.' },
  { name: 'Toxic', subtitle: 'THE VEILED', color: '#c0e16b', symbol: '☷', description: 'Danger wears a thousand beautiful faces.' },
  { name: 'Void', subtitle: 'THE FORGOTTEN', color: '#ce9bff', symbol: '◉', description: 'Beyond the edge, something is waiting.' },
]

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
          <section className="hero">
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
            <div className="hero-art" aria-label="Abstract elemental crystal illustration">
              <div className="art-ring ring-outer" /><div className="art-ring ring-inner" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="crystal-glow" />
              <svg className="crystal" viewBox="0 0 300 380" role="img" aria-label="Luminous crystalline shard">
                <defs><linearGradient id="crystalMain" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f5e5c0" /><stop offset=".32" stopColor="#bd9a70" /><stop offset=".65" stopColor="#6b514e" /><stop offset="1" stopColor="#171923" /></linearGradient><linearGradient id="crystalSide" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d8b98d" /><stop offset="1" stopColor="#2e2a38" /></linearGradient></defs>
                <polygon points="148,18 212,103 231,227 173,350 106,284 79,151" fill="url(#crystalMain)" stroke="#e5cda8" strokeOpacity=".7" strokeWidth="1.2" />
                <polygon points="148,18 159,172 212,103" fill="#fff0d2" fillOpacity=".65" /><polygon points="159,172 231,227 212,103" fill="#9c7b70" fillOpacity=".85" /><polygon points="159,172 173,350 231,227" fill="url(#crystalSide)" /><polygon points="159,172 106,284 173,350" fill="#3a3442" /><polygon points="159,172 79,151 106,284" fill="#bba084" fillOpacity=".72" /><polygon points="148,18 79,151 159,172" fill="#e3d0b4" fillOpacity=".9" />
                <path d="M148 18L159 172L173 350M79 151L159 172L231 227" stroke="#fff1d9" strokeOpacity=".48" fill="none" />
              </svg>
              <div className="art-caption"><span>FIG. 001</span><span>THE PRIMORDIAL SHARD</span></div>
              <span className="art-star star-a">✧</span><span className="art-star star-b">·</span><span className="art-star star-c">✦</span>
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
                <button key={item.name} className={selected === index ? 'element-card selected' : 'element-card'} style={{ '--element': item.color } as React.CSSProperties} onClick={() => setSelected(index)}>
                  <span className="element-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="element-symbol">{item.symbol}</span>
                  <span className="element-name">{item.name}</span>
                  <span className="element-subtitle">{item.subtitle}</span>
                  <span className="element-card-line" />
                </button>
              ))}
            </div>
            <div className="element-detail" style={{ '--element': element.color } as React.CSSProperties}>
              <div className="detail-symbol">{element.symbol}</div>
              <div className="detail-copy"><span className="detail-kicker">SELECTED ELEMENT · {String(selected + 1).padStart(2, '0')}</span><h3>{element.name}</h3><p>{element.description}</p></div>
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
            <div className="codex-list">{elements.map((item, index) => <button key={item.name} onClick={() => setSelected(index)} className={selected === index ? 'codex-row chosen' : 'codex-row'} style={{ '--element': item.color } as React.CSSProperties}><span>{String(index + 1).padStart(2, '0')}</span><b>{item.symbol}</b><strong>{item.name}</strong><small>{item.subtitle}</small><ArrowRight size={15} /></button>)}</div>
            <div className="codex-detail" style={{ '--element': element.color } as React.CSSProperties}><div className="codex-big-symbol">{element.symbol}</div><span className="detail-kicker">ELEMENTAL ENTRY · {String(selected + 1).padStart(2, '0')}</span><h2>{element.name}</h2><p>{element.description}</p><div className="codex-divider" /><div className="codex-fact"><span>KNOWN AS</span><strong>{element.subtitle}</strong></div><div className="codex-fact"><span>DOCTRINE</span><strong>{element.name === 'Void' ? 'The unseen truth' : element.name === 'Light' ? 'Clarity through purpose' : 'Balance through change'}</strong></div><button className="secondary-button" onClick={() => setScreen('home')}>Return to overview <ArrowRight size={15} /></button></div>
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
