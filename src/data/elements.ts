export interface ElementDefinition {
  id: string
  name: string
  subtitle: string
  color: string
  symbol: string
  description: string
}

export const elements: ElementDefinition[] = [
  { id: 'flame', name: 'Flame', subtitle: 'The Unyielding', color: '#ff744f', symbol: '✦', description: 'Power born from the heart of a dying star.' },
  { id: 'tide', name: 'Tide', subtitle: 'The Eternal', color: '#55c8f2', symbol: '◈', description: 'Patience is an ocean that moves worlds.' },
  { id: 'nature', name: 'Nature', subtitle: 'The Awakened', color: '#9ddc83', symbol: '❋', description: 'All things return to the roots.' },
  { id: 'volt', name: 'Volt', subtitle: 'The Unbound', color: '#d9e66e', symbol: 'ϟ', description: 'A single spark can rewrite fate.' },
  { id: 'frost', name: 'Frost', subtitle: 'The Silent', color: '#a7dcff', symbol: '❄', description: 'Stillness is its own kind of strength.' },
  { id: 'light', name: 'Light', subtitle: 'The Radiant', color: '#f5d995', symbol: '✧', description: 'Even the darkest age casts a shadow.' },
  { id: 'stone', name: 'Stone', subtitle: 'The Ancient', color: '#c5a68b', symbol: '⬡', description: 'Endure what others cannot.' },
  { id: 'storm', name: 'Storm', subtitle: 'The Tempest', color: '#b1a2ff', symbol: 'ϟ', description: 'The sky remembers every rebellion.' },
  { id: 'toxic', name: 'Toxic', subtitle: 'The Veiled', color: '#c0e16b', symbol: '☷', description: 'Danger wears a thousand beautiful faces.' },
  { id: 'void', name: 'Void', subtitle: 'The Forgotten', color: '#ce9bff', symbol: '◉', description: 'Beyond the edge, something is waiting.' },
]
