"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
const router = express_1.Router();
const API_URL = "/api/v1/category/";
router.route(`${API_URL}create`).post(category_controller_1.postCreate);
router.route(`${API_URL}delete/:catId`).delete(category_controller_1.deleteCategoryById);
router.route(`${API_URL}:catId`).get(category_controller_1.getCategoryById);
router.route(`${API_URL}`).get(category_controller_1.getAllCategories);
exports.default = router;
//# sourceMappingURL=category.route.js.map