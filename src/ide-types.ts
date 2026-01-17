type IdeTypeObject = {
  keys: string[]
  matcher: {
    appName: string | RegExp
    uriScheme: string | RegExp
  }
}

export const IDE_TYPES: IdeTypeObject[] = [
  {
    keys: ['vscode', 'vscodeStable'],
    matcher: {
      appName: 'Visual Studio Code',
      uriScheme: 'vscode',
    },
  },
  {
    keys: ['vscode', 'vscodeInsiders'],
    matcher: {
      appName: 'Visual Studio Code - Insiders',
      uriScheme: 'vscode-insiders',
    },
  },

  {
    keys: ['vscodium'],
    matcher: {
      appName: 'VSCodium',
      uriScheme: 'vscodium',
    },
  },

  {
    keys: ['cursor'],
    matcher: {
      appName: 'Cursor',
      uriScheme: 'cursor',
    },
  },

  {
    keys: ['windsurf'],
    matcher: {
      appName: 'Windsurf',
      uriScheme: 'windsurf',
    },
  },

  {
    keys: ['antigravity'],
    matcher: {
      appName: 'Antigravity',
      uriScheme: 'antigravity',
    },
  },

  {
    keys: ['trae'],
    matcher: {
      appName: 'Trae',
      uriScheme: 'trae',
    },
  },

  {
    keys: ['kiro'],
    matcher: {
      appName: 'Kiro',
      uriScheme: 'kiro',
    },
  },
]
