export interface ElementDefinition {
  id: string
  name: string
  subtitle: string
  color: string
  symbol: string
  description: string
  art: string
  hero: string
}

export const elements: ElementDefinition[] = [
  { id: 'flame', name: 'Flame', subtitle: 'The Unyielding', color: '#ff744f', symbol: '✦', description: 'Power born from the heart of a dying star.', art: '/assets/elements/flame.png', hero: '/assets/hero/flame/d-rank.png' },
  { id: 'tide', name: 'Tide', subtitle: 'The Eternal', color: '#55c8f2', symbol: '◈', description: 'Patience is an ocean that moves worlds.', art: '/assets/elements/tide.png', hero: '/assets/hero/tide/d-rank.png' },
  { id: 'nature', name: 'Nature', subtitle: 'The Awakened', color: '#9ddc83', symbol: '❋', description: 'All things return to the roots.', art: '/assets/elements/nature.png', hero: '/assets/hero/nature/d-rank.png' },
  { id: 'volt', name: 'Volt', subtitle: 'The Unbound', color: '#d9e66e', symbol: 'ϟ', description: 'A single spark can rewrite fate.', art: '/assets/elements/volt.png', hero: '/assets/hero/volt/d-rank.png' },
  { id: 'frost', name: 'Frost', subtitle: 'The Silent', color: '#a7dcff', symbol: '❄', description: 'Stillness is its own kind of strength.', art: '/assets/elements/frost.png', hero: '/assets/hero/frost/d-rank.png' },
  { id: 'light', name: 'Light', subtitle: 'The Radiant', color: '#f5d995', symbol: '✧', description: 'Even the darkest age casts a shadow.', art: '/assets/elements/light.png', hero: '/assets/hero/light/d-rank.png' },
  { id: 'stone', name: 'Stone', subtitle: 'The Ancient', color: '#c5a68b', symbol: '⬡', description: 'Endure what others cannot.', art: '/assets/elements/stone.png', hero: '/assets/hero/stone/d-rank.png' },
  { id: 'storm', name: 'Storm', subtitle: 'The Tempest', color: '#b1a2ff', symbol: 'ϟ', description: 'The sky remembers every rebellion.', art: '/assets/elements/storm.png', hero: '/assets/hero/storm/d-rank.png' },
  { id: 'toxic', name: 'Toxic', subtitle: 'The Veiled', color: '#c0e16b', symbol: '☷', description: 'Danger wears a thousand beautiful faces.', art: '/assets/elements/toxic.png', hero: '/assets/hero/toxic/d-rank.png' },
  { id: 'void', name: 'Void', subtitle: 'The Forgotten', color: '#ce9bff', symbol: '◉', description: 'Beyond the edge, something is waiting.', art: '/assets/elements/void.png', hero: '/assets/hero/void/d-rank.png' },
]
