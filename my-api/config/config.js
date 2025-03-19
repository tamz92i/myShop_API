"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const config = {
    port: process.env.PORT || 3000,
    // ...autres configurations...
};
exports.default = config;
