"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Panel.tsx
const react_1 = require("react");
const Panel = () => {
    // Event handler for uploading files
    const handleUpload = () => {
        window.postMessage({ type: 'uploadFiles' }, '*');
    };
    // Event handler for packaging files
    const handlePackage = () => {
        window.postMessage({ type: 'packageFiles' }, '*');
    };
    // Event handler for unpacking files
    const handleUnpack = () => {
        window.postMessage({ type: 'unpackFiles' }, '*');
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("button", { onClick: handleUpload }, "Upload"),
        react_1.default.createElement("button", { onClick: handlePackage }, "Package"),
        react_1.default.createElement("button", { onClick: handleUnpack }, "Unpack")));
};
exports.default = Panel;
//# sourceMappingURL=Panel.js.map