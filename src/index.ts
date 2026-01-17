import * as vscode from 'vscode'
import { IDE_TYPES } from './ide-types'

export function activate() {
  const { appName, uriScheme } = vscode.env
  console.log(`App Name: "${appName}", URI Scheme: "${uriScheme}"`)
  setContext('code-env.appName', appName)
  setContext(`code-env.${uriScheme}`, uriScheme)

  const version = vscode.version
  const versionNum = parseFloat(version)
  console.log(`IDE Version: "${version}", Parsed: ${versionNum}`)
  setContext('code-env.version', versionNum)

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
    setContext('code-env.unsupported', true)
    return
  }

  console.log(`Detected IDE: "${env.key}", Name: "${env.name}"`)
  setContext('code-env', env.name)
  setContext(`code-env.${env.key}`, true)
}

function setContext(key: string, value: string | boolean | number) {
  console.log(`Setting context: ${key} = ${value}`)
  vscode.commands.executeCommand('setContext', key, value)
}
