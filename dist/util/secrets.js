"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
if (fs_1.default.existsSync(".env")) {
    logger_1.default.debug("Using .env file to supply config environment variables");
    dotenv_1.default.config({ path: ".env" });
}
else {
    logger_1.default.debug("Using .env.dev file to supply config environment variables");
    dotenv_1.default.config({ path: ".env.dev" }); // you can delete this after you create your own .env file!
}
exports.ENVIRONMENT = process.env["ENV"];
const prod = exports.ENVIRONMENT === "production"; // Anything else is treated as 'dev'
exports.MONGODB_URI = prod ? process.env["MONGODB_URI"] : process.env["MONGODB_URI_LOCAL"];
logger_1.default.debug(exports.MONGODB_URI);
if (!exports.MONGODB_URI) {
    if (prod) {
        logger_1.default.error("No mongo connection string. Set MONGODB_URI environment variable.");
    }
    else {
        logger_1.default.error("No mongo connection string. Set MONGODB_URI_LOCAL environment variable.");
    }
    process.exit(1);
}
exports.JWT_SECRET = process.env["JWT_SECRET"];
if (!exports.JWT_SECRET) {
    logger_1.default.error("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map