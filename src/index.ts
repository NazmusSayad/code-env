import * as vscode from 'vscode'
import { IDE_TYPES } from './ide-types'

export function activate() {
  const appName = vscode.env.appName
  const uriScheme = vscode.env.uriScheme

  const version = vscode.version
  const versionNum = parseFloat(version)

  console.log(`App Name: "${appName}", URI Scheme: "${uriScheme}"`)
  console.log(`IDE Version: "${version}", Parsed: ${versionNum}`)

  setContext('app', appName)
  setContext('uri', uriScheme)
  setContext('version', versionNum)

  const env = IDE_TYPES.find((ide) => {
    const appNameMatch =
      ide.matcher.appName instanceof RegExp
        ? ide.matcher.appName.test(appName)
        : ide.matcher.appName === appName

    const uriSchemeMatch =
      ide.matcher.uriScheme instanceof RegExp
        ? ide.matcher.uriScheme.test(uriScheme)
        : ide.matcher.uriScheme === uriScheme

    return appNameMatch && uriSchemeMatch
  })

  if (!env) {
    console.error('Unable to determine IDE environment')
    setContext('unsupported', true)
    return
  }

  console.log(`Detected IDE: "${env.keys.join(', ')}"`)
  env.keys.forEach((key) => setContext(key, true))
}

function setContext(key: string, value: string | boolean | number) {
  console.log(`Setting context: ${key} = ${value}`)
  vscode.commands.executeCommand('setContext', `editor.${key}`, value)
}
