# testing-pp README
# VSCodePackageManager

VSCodePackageManager is a Visual Studio Code extension that allows you to easily manage file packaging and unpacking within the editor.

## Features

Core Features:
Seamless Integration: The extension integrates flawlessly with VS Code, providing an intuitive and accessible user interface directly within the editor.

File Packaging: Users can easily package multiple files into a single compressed file directly from the VS Code environment, streamlining the process of file management.

File Unpacking: The extension allows for quick unpacking of compressed files, supporting various formats, thus enhancing productivity by reducing the need for external tools.

Customizable Settings: Offers customizable settings to tailor the packing and unpacking processes to individual user needs, such as setting compression levels or choosing specific file types to include or exclude.

Preview Options: Before packaging, users can preview the files to be included, giving them the confidence that they're compressing the correct data.

Drag-and-Drop Functionality: Users can drag and drop files or folders directly into the panel to add them to a package or to extract them, providing a user-friendly experience.

Efficient File Handling: Optimized for performance, the extension handles large files and multiple operations without hindering the editor's performance.

Cross-Platform Support: Works across different operating systems, ensuring a consistent experience whether you're using Windows, Linux, or macOS.

Automation Support: Offers command-line features that can be integrated into scripts for automated packing and unpacking, fitting seamlessly into DevOps workflows.

Unique Selling Points:
Context-Aware Operations: The extension can intelligently suggest files for packaging based on the user's current project context, saving time and reducing the likelihood of errors.

Real-Time Compression Estimation: It provides real-time updates on the estimated compression size and ratio, helping users make informed decisions about their file packaging.

Integrated File Conflict Resolution: Automatically detects and helps resolve file conflicts during unpacking, ensuring a smooth workflow.

History and Undo Functionality: Maintains a history of packaging/unpacking actions with the ability to undo recent changes, providing a safety net for accidental operations.

Extension Personalization: Allows users to personalize the look and feel of the panel interface, creating a comfortable and productive environment.

Security Features: Offers encryption options for packaged files, ensuring secure distribution and storage of sensitive data.

Multi-language Support: Localized in several languages, this feature makes the extension accessible to a global audience, breaking down language barriers.

## Installation

To install VSCodePackageManager:

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for "VSCodePackageManager".
4. Click on the Install button.

Alternatively, you can install it via the Command Palette:

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
2. Type `ext install` followed by the extension's name, like `ext install vscodepackagemanager`.

## Compilation

To compile the extension from the source:

1. Clone the repository:

   ```bash
   git clone https://github.com/Vert86/VSCodePackageManager.git

Navigate to the cloned directory:

cd VSCodePackageManager
Install dependencies:

npm install
Compile the TypeScript files (if applicable):

npm run compile

Activation
To activate the extension:

Open a project in Visual Studio Code.
Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on Mac).
Type testing-pp.showPanel and hit Enter.
This will open the webview panel where you can use the features of the VSCodePackageManager.

Screenshot
VSCodePackageManager Extension Panel
## Screenshot

![VSCodePackageManager Panel](extension_screenshot.png "VSCodePackageManager Extension Panel")
