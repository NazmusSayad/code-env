# Code Env

A VS Code extension that automatically detects and exposes your IDE environment information as context variables. Perfect for creating cross-editor compatible extensions and configurations.

## Features

- **Automatic IDE Detection**: Identifies which VS Code-based editor you're using (VSCode, Cursor, Windsurf, VSCodium, Trae, Kiro, Antigravity, and more)
- **Version Detection**: Provides IDE version information for version-specific configurations
- **URI Scheme Support**: Exposes the IDE's URI scheme for deep linking and protocol handling
- **Context Variables**: Sets `code-env` context variables that can be used in:
  - Keybindings (`when` clauses)
  - Settings configurations
  - Extension conditions
  - Custom commands

## Supported IDEs (Actually any VS Code based IDE should work)

- Visual Studio Code
- Visual Studio Code - Insiders
- VSCodium
- Cursor
- Windsurf
- Antigravity
- Trae
- Kiro

## Usage

Once installed, the extension automatically sets context variables based on your detected IDE:

- `code-env` - The name of the detected IDE (e.g., "VSCode", "Cursor")
- `code-env.app` - The full application name
- `code-env.uri` - The URI scheme used by the IDE
- `code-env.version` - The IDE version number (e.g., "1.60")
- `code-env.${ideKey}` - Set to `true` for the specific IDE (e.g., `code-env.cursor`, `code-env.windsurf`)
- `code-env.unsupported` - Set to `true` if the IDE is not recognized

### Example: Conditional Keybindings

```json
{
  "key": "ctrl+shift+p",
  "command": "cursor.command",
  "when": "code-env.cursor"
}
```

### Example: Settings per IDE

```json
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "when": "code-env.vscode"
  }
}
```

## License

MIT
