import { useState } from 'react'
import { ArrowRight, BookOpen, CircleHelp, DoorOpen, Gem, Settings, Shield, Sparkles, Volume2, VolumeX } from 'lucide-react'
import { elements } from './data/elements'

type Screen = 'title' | 'codex' | 'settings' | 'new-game'

function App() {
  const [screen, setScreen] = useState<Screen>('title')
  const [selected, setSelected] = useState(0)
  const [soundOn, setSoundOn] = useState(false)
  const [notice, setNotice] = useState('')
  const element = elements[selected]

  const startNewGame = () => {
    setSelected(0)
    setScreen('new-game')
    setNotice('')
  }

  const continueGame = () => setNotice('No save data found. Begin your legend with a new game.')

  return (
    <main className={screen === 'title' ? 'app-shell title-shell' : 'app-shell'}>
      {screen === 'title' && (
        <section className="title-screen">
          <div className="title-backdrop" />
          <div className="title-vignette" />
          <div className="title-topline"><span><span className="title-status-dot" /> AN ORIGINAL FANTASY RPG</span><button className="sound-button" onClick={() => setSoundOn(!soundOn)} aria-label={soundOn ? 'Mute ambience' : 'Enable ambience'}>{soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />} <span>{soundOn ? 'SOUND ON' : 'SOUND OFF'}</span></button></div>
          <div className="title-layout">
            <div className="title-menu-column">
              <div className="title-brand-lockup"><div className="title-brand-icon"><Gem size={28} strokeWidth={1.2} /></div><div className="title-brand-name">CORE<span>BOUND</span></div><div className="title-brand-subtitle">CHRONICLES OF THE ELEMENTS</div><div className="title-brand-rule"><i /></div></div>
              <p className="title-tagline">A WORLD ON THE EDGE OF AWAKENING</p>
              <div className="title-story"><span>YOUR DESTINY</span><span>IS UNWRITTEN.</span><p>Ten forces. One fractured world.<br />Discover the power that binds you<br />to something greater.</p></div>
              <nav className="main-menu" aria-label="Main menu">
                <button className="main-menu-item featured" onClick={startNewGame}><span className="menu-icon"><Sparkles size={19} /></span><span>New Game<small>Begin your journey</small></span><ArrowRight className="menu-arrow" size={18} /></button>
                <button className="main-menu-item" onClick={continueGame}><span className="menu-icon"><BookOpen size={19} /></span><span>Continue<small>Return to your adventure</small></span><ArrowRight className="menu-arrow" size={18} /></button>
                <button className="main-menu-item" onClick={() => { setScreen('codex'); setNotice('') }}><span className="menu-icon"><Gem size={19} /></span><span>Element Codex<small>Discover the ten elements</small></span><ArrowRight className="menu-arrow" size={18} /></button>
                <button className="main-menu-item" onClick={() => { setScreen('settings'); setNotice('') }}><span className="menu-icon"><Settings size={19} /></span><span>Settings<small>Make it your own</small></span><ArrowRight className="menu-arrow" size={18} /></button>
                <button className="main-menu-item" onClick={() => setNotice('Thanks for playing the CoreBound prototype. You can safely close this browser tab.')}><span className="menu-icon"><DoorOpen size={19} /></span><span>Exit Game<small>Leave this world for now</small></span><ArrowRight className="menu-arrow" size={18} /></button>
              </nav>
              {notice && <div className="title-notice" role="status">{notice}<button onClick={() => setNotice('')} aria-label="Dismiss message">×</button></div>}
              <div className="title-footer"><span>v0.1.0 · EARLY ACCESS</span><span><Shield size={12} /> SAVE SYSTEM IN DEVELOPMENT</span></div>
            </div>
            <div className="title-character-stage" aria-label="Flame element hero artwork"><div className="title-character-glow" /><img src="/assets/hero/flame/d-rank.png" alt="Flame element D-rank hero" /><div className="character-nameplate"><span>D-RANK AWAKENED</span><strong>THE FIRST SPARK</strong></div></div>
          </div>
          <div className="title-bottomline"><span>✦</span><i /> THE FIRST AGE <i /><span>CHOOSE YOUR PATH</span><i /><span>✦</span></div>
        </section>
      )}

      {screen === 'new-game' && (
        <section className="subpage new-game-page">
          <button className="back-link" onClick={() => setScreen('title')}>← BACK TO TITLE</button>
          <div className="eyebrow"><span className="eyebrow-line" /> CHAPTER ZERO · THE AWAKENING</div>
          <h1 className="subpage-title">CHOOSE YOUR <span className="gradient-text">ELEMENT.</span></h1>
          <p className="subpage-intro">Every legend begins with a spark. Choose the force that will shape your first steps into a fractured world.</p>
          <div className="new-game-grid">{elements.map((item, index) => <button key={item.id} onClick={() => setSelected(index)} className={selected === index ? 'new-game-element chosen' : 'new-game-element'} style={{ '--element': item.color } as React.CSSProperties}><img src={item.art} alt="" /><strong>{item.name}</strong><span>{item.subtitle}</span></button>)}</div>
          <div className="chosen-element-panel" style={{ '--element': element.color } as React.CSSProperties}><img src={element.hero} alt={`${element.name} D-rank hero`} /><div><span className="detail-kicker">YOUR FIRST AFFINITY · D-RANK</span><h2>{element.name}</h2><p>{element.description}</p></div><button className="primary-button" onClick={() => setNotice('Your ' + element.name + ' affinity is selected. The full gameplay and save system are the next development phase.')}>Begin awakening <ArrowRight size={16} /></button></div>
          {notice && <p className="game-notice" role="status">{notice}</p>}
        </section>
      )}

      {screen === 'codex' && (
        <section className="subpage">
          <button className="back-link" onClick={() => setScreen('title')}>← BACK TO TITLE</button>
          <div className="eyebrow"><span className="eyebrow-line" /> ARCHIVES OF THE FIRST AGE</div><h1 className="subpage-title">THE ELEMENT <span className="gradient-text">CODEX.</span></h1><p className="subpage-intro">Every force leaves a mark upon the world. Choose an entry to reveal its doctrine.</p>
          <div className="codex-layout"><div className="codex-list">{elements.map((item, index) => <button key={item.id} onClick={() => setSelected(index)} className={selected === index ? 'codex-row chosen' : 'codex-row'} style={{ '--element': item.color } as React.CSSProperties}><span>{String(index + 1).padStart(2, '0')}</span><img src={item.art} alt="" /><strong>{item.name}</strong><small>{item.subtitle}</small><ArrowRight size={15} /></button>)}</div><div className="codex-detail" style={{ '--element': element.color } as React.CSSProperties}><div className="codex-hero-frame"><img src={element.hero} alt={`${element.name} D-rank hero artwork`} /></div><span className="detail-kicker">ELEMENTAL ENTRY · {String(selected + 1).padStart(2, '0')} · D-RANK</span><h2>{element.name}</h2><p>{element.description}</p><div className="codex-divider" /><div className="codex-fact"><span>KNOWN AS</span><strong>{element.subtitle}</strong></div><div className="codex-fact"><span>RANK</span><strong>D — AWAKENED</strong></div><button className="secondary-button" onClick={() => setScreen('title')}>Return to title <ArrowRight size={15} /></button></div></div>
        </section>
      )}

      {screen === 'settings' && (
        <section className="subpage settings-page"><button className="back-link" onClick={() => setScreen('title')}>← BACK TO TITLE</button><div className="eyebrow"><span className="eyebrow-line" /> YOUR JOURNEY, YOUR RULES</div><h1 className="subpage-title">GAME <span className="gradient-text">SETTINGS.</span></h1><p className="subpage-intro">Configure your experience. Some options are visual prototypes and do not persist between sessions yet.</p><div className="settings-card"><div className="setting-row"><div><strong>Ambient sound</strong><p>Audio playback is not implemented in this prototype.</p></div><button className={soundOn ? 'toggle enabled' : 'toggle'} onClick={() => setSoundOn(!soundOn)} aria-pressed={soundOn}><span /></button></div><div className="setting-row"><div><strong>Interface theme</strong><p>Obsidian, antique gold and elemental accents.</p></div><span className="theme-chip">OBSIDIAN</span></div><div className="setting-row"><div><strong>Save system</strong><p>Continue and persistent saves will be connected in a later phase.</p></div><span className="coming-soon">IN DEVELOPMENT</span></div></div></section>
      )}
      {screen !== 'title' && <footer className="footer"><div className="footer-brand"><Gem size={16} /> COREBOUND <span>© 2026</span></div><div className="footer-center">A WORLD SHAPED BY WHAT YOU BECOME.</div><div className="footer-right"><Shield size={13} /> PROTOTYPE <button onClick={() => setScreen('codex')}><CircleHelp size={14} /></button></div></footer>}
    </main>
  )
}

export default App
