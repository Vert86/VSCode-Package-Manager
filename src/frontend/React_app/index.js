"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const App_1 = require("./App");
// Listen for messages sent from the extension host
window.addEventListener('message', event => {
    const message = event.data; // The JSON data our extension sent
    switch (message.command) {
        case 'doSomething':
            // Handle the message and perform actions
            break;
        // Handle other messages...
    }
});
react_dom_1.default.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(App_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map