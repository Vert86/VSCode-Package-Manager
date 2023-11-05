"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('yourExtension.showPanel', () => {
        const panel = vscode.window.createWebviewPanel('panel', // Identifies the type of the webview. Used internally
        'Panel', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {
            enableScripts: true, // Enable JavaScript in the webview
        });
        // Set the webview's HTML content
        panel.webview.html = getWebviewContent();
        // Handle messages from the webview
        panel.webview.onDidReceiveMessage((message) => {
            switch (message.type) {
                case 'uploadFiles':
                    // Handle the message by calling a function to process the data
                    uploadFiles(message.data);
                    return;
                // Handle other messages...
            }
        }, undefined, context.subscriptions);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// Ensure this function returns a string
function getWebviewContent() {
    const nonce = getNonce();
    // Your HTML content string here
    return `<!DOCTYPE html>
    <html lang="en">
    <!-- ... your HTML content ... -->
    <script nonce="${nonce}" src="path/to/your/bundled/react/app.js"></script>
    </html>`;
}
// This should be outside the getWebviewContent function
function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
// Specify the expected type of `data` if possible
function uploadFiles(data) {
    // Logic to handle the file upload
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map