# Editor Context

A VS Code extension that automatically detects and exposes your IDE environment information as context variables. Perfect for creating cross-editor compatible extensions and configurations.

## Features

- **Automatic IDE Detection**: Identifies which VS Code-based editor you're using (VSCode, Cursor, Windsurf, VSCodium, Trae, Kiro, Antigravity, and more)
- **Version Detection**: Provides IDE version information for version-specific configurations
- **URI Scheme Support**: Exposes the IDE's URI scheme for deep linking and protocol handling
- **Context Variables**: Sets `editor` context variables that can be used in:
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

- `editor.app` - The full application name
- `editor.uri` - The URI scheme used by the IDE
- `editor.version` - The IDE version number (e.g., 1.60)
- `editor.${key}` - Set to `true` for the specific IDE (e.g., `editor.cursor`, `editor.windsurf`)
- `editor.unsupported` - Set to `true` if the IDE is not recognized

<img width="1332" height="487" alt="image" src="https://github.com/user-attachments/assets/21991f90-4f80-4a19-8714-1f038734ed74" />


### Example: Conditional Keybindings

```json
{
  "key": "ctrl+shift+p",
  "command": "cursor.command",
  "when": "editor.cursor"
}
```

### Example: Settings per IDE

```json
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "when": "editor.vscode"
  }
}
```
