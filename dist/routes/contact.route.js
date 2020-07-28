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
const contactController = __importStar(require("../controllers/contact.controller"));
const router = express_1.Router();
const API_URL = "/api/v1/contact/";
router.route(`${API_URL}`).post(contactController.postContact);
exports.default = router;
//# sourceMappingURL=contact.route.js.map