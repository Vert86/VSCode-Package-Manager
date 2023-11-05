import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('testing-pp.showPanel', () => {
    // Create a new webview panel
    const panel = vscode.window.createWebviewPanel(
      'panel', // Identifies the type of the webview
      'Panel', // Title of the panel displayed to the user
      vscode.ViewColumn.One, // Editor column to show the new webview panel in.
      {
        // Webview options
        enableScripts: true
      }
    );

    // Get the path on disk for the bundled React app
    const scriptPathOnDisk = vscode.Uri.file(
      path.join(context.extensionPath, 'src', 'frontend', 'React_app', 'dist', 'bundle.js')
    );

    // Convert the disk path to a URI for use in the webview
    const scriptSrc = panel.webview.asWebviewUri(scriptPathOnDisk);

    // Set the HTML content for the webview with the script source
    panel.webview.html = getWebviewContent(scriptSrc, context.extensionUri);
  });

  context.subscriptions.push(disposable);
}

// You need to update the signature of getWebviewContent to accept scriptSrc
function getWebviewContent(scriptSrc: vscode.Uri, extensionUri: vscode.Uri): string {
  const nonce = getNonce();

  // The nonce and scriptSrc are used in the CSP and the script tag respectively
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <!-- Use the nonce in the Content-Security-Policy -->
      <meta http-equiv="Content-Security-Policy" content="script-src 'nonce-${nonce}';">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Panel</title>
    </head>
    <body>
      <h1 style="text-align:center">Welcome to Calvert's file Pack and Un-Pack Tool Extension</h1>
      <div id="root"></div>
      <!-- Use the scriptSrc for the React app's bundled script -->
      <script nonce="${nonce}" src="${scriptSrc}"></script>
    </body>
    </html>`;
}

function getNonce(): string {
  // Generates a nonce for the CSP
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
