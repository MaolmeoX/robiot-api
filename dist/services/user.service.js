"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const bcrypt_nodejs_1 = __importDefault(require("bcrypt-nodejs"));
const jwt = __importStar(require("jsonwebtoken"));
const secrets_1 = require("../util/secrets");
const logger_1 = __importDefault(require("../util/logger"));
function register(name, email, password, notifications) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = bcrypt_nodejs_1.default.hashSync(password, bcrypt_nodejs_1.default.genSaltSync(10));
        const user = yield User_1.User.create({
            email,
            password: hashedPassword,
            name,
            notifications
        });
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