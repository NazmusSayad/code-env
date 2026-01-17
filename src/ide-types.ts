type IdeTypeObject = {
  key: string
  name: string
  matcher: {
    appName: string | RegExp
    uriScheme: string | RegExp
  }
}

export const IDE_TYPES: IdeTypeObject[] = [
  {
    key: 'vscode',
    name: 'VSCode',
    matcher: {
      appName: 'Visual Studio Code',
      uriScheme: 'vscode',
    },
  },
  {
    key: 'vscodeInsiders',
    name: 'VSCode',
    matcher: {
      appName: 'Visual Studio Code - Insiders',
      uriScheme: 'vscode-insiders',
    },
  },

  {
    key: 'vscodium',
    name: 'VSCodium',
    matcher: {
      appName: 'VSCodium',
      uriScheme: 'vscodium',
    },
  },

  {
    key: 'cursor',
    name: 'Cursor',
    matcher: {
      appName: 'Cursor',
      uriScheme: 'cursor',
    },
  },

  {
    key: 'windsurf',
    name: 'Windsurf',
    matcher: {
      appName: 'Windsurf',
      uriScheme: 'windsurf',
    },
  },

  {
    key: 'antigravity',
    name: 'Antigravity',
    matcher: {
      appName: 'Antigravity',
      uriScheme: 'antigravity',
    },
  },

  {
    key: 'trae',
    name: 'Trae',
    matcher: {
      appName: 'Trae',
      uriScheme: 'trae',
    },
  },

  {
    key: 'kiro',
    name: 'Kiro',
    matcher: {
      appName: 'Kiro',
      uriScheme: 'kiro',
    },
  },
]
