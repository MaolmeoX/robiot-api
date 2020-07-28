"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.register = void 0;
const User_1 = require("../models/User");
const bcrypt_nodejs_1 = __importDefault(require("bcrypt-nodejs"));
const jwt = __importStar(require("jsonwebtoken"));
const secrets_1 = require("../util/secrets");
const logger_1 = __importDefault(require("../util/logger"));
function register(name, email, password, notifications) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = bcrypt_nodejs_1.default.hashSync(password, bcrypt_nodejs_1.default.genSaltSync(10));
        const user = new User_1.User({
            email,
            password: hashedPassword,
            name,
            notifications,
        });
        yield user.save();
        logger_1.default.debug(JSON.stringify(user));
        return jwt.sign({ email }, secrets_1.JWT_SECRET);
    });
}
exports.register = register;
function comparePassword(candidatePassword, password, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        bcrypt_nodejs_1.default.compare(candidatePassword, password, (err, isMatch) => {
            callback(err, isMatch);
        });
    });
}
exports.comparePassword = comparePassword;
//# sourceMappingURL=user.service.js.map