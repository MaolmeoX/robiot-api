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
exports.postReset = exports.deleteAccount = exports.postUpdatePassword = exports.postUpdateProfile = exports.postSignup = exports.getLogout = exports.postLogin = void 0;
const secrets_1 = require("../util/secrets");
const jwt = __importStar(require("jsonwebtoken"));
require("../config/passport");
const user_service_1 = require("../services/user.service");
const logger_1 = __importDefault(require("../util/logger"));
const passport_1 = __importDefault(require("passport"));
/**
 * POST /login
 * Sign in using email and password.
 */
exports.postLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.debug(req.body);
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            logger_1.default.debug('errors', { msg: info.message });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            const token = jwt.sign({ email: user.email }, secrets_1.JWT_SECRET);
            res.status(200).send({ token: token });
        });
    })(req, res, next);
});
/**
 * GET /logout
 * Log out.
 */
exports.getLogout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.logOut();
    res.status(200).send({ message: 'you have been disconected' });
});
/**
 * POST /signup
 * Create a new local account.
 */
exports.postSignup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield user_service_1.register(req.body.name, req.body.email, req.body.password, req.body.notifications);
    res.status(200).send({ token });
});
/**
 * POST /account/profile
 * Update profile information.
 */
exports.postUpdateProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //TODO Post update
});
/**
 * POST /account/password
 * Update current password.
 */
exports.postUpdatePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //TODO Post Update
});
/**
 * DEL /delete
 * Delete user account.
 */
exports.deleteAccount = (req, res, next) => {
    // TODO Delete
};
/**
 * POST /reset/:token
 * Process the reset password request.
 */
exports.postReset = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //TODO generate random token and update user
});
//# sourceMappingURL=user.controller.js.map