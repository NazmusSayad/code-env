import * as vscode from 'vscode'
import { IDE_TYPES } from './ide-types'

export function activate() {
  const { appName, uriScheme } = vscode.env
  console.log(`App Name: "${appName}", URI Scheme: "${uriScheme}"`)
  setContext('app', appName)
  setContext('uri', uriScheme)

  const version = vscode.version
  const versionNum = parseFloat(version)
  console.log(`IDE Version: "${version}", Parsed: ${versionNum}`)
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

  console.log(`Detected IDE: "${env.key}", Name: "${env.name}"`)
  setContext('name', env.name)
  setContext(env.key, true)
}

function setContext(key: string, value: string | boolean | number) {
  console.log(`Setting context: ${key} = ${value}`)
  vscode.commands.executeCommand('setContext', `editor.${key}`, value)
}
