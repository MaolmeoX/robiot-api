"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController = __importStar(require("../controllers/user.controller"));
const auth_controller_1 = require("../controllers/auth.controller");
const router = express_1.Router();
const API_URL = "/api/v1/users/";
const authController = new auth_controller_1.AuthController();
router.route(`${API_URL}login`).post(UserController.postLogin);
router.route(`${API_URL}logout`).get(authController.authenticateJWT, UserController.getLogout);
router.route(`${API_URL}signup`).post(UserController.postSignup);
router.route(`${API_URL}update`).post(authController.authenticateJWT, UserController.postUpdateProfile);
router.route(`${API_URL}password`).post(authController.authenticateJWT, UserController.postUpdatePassword);
router.route(`${API_URL}delete`).delete(authController.authenticateJWT, UserController.deleteAccount);
exports.default = router;
//# sourceMappingURL=user.route.js.map