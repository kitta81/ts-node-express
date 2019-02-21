"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const app = Express();
const PORT = 1234;
app.get('/', (req, res) => {
    const msg = 'Hello World x Typescript x Express x now (auto deploy)';
    res.send(msg);
});
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
exports.default = app;
//# sourceMappingURL=app.js.map