"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const concept_controller_1 = require("../controllers/concept.controller");
const router = express_1.Router();
const API_URL = "/api/v1/concept/";
router.route(`${API_URL}create`).post(concept_controller_1.createConcepts);
router.route(`${API_URL}update/:catId`).post(concept_controller_1.updateConceptById);
router.route(`${API_URL}delete/:catId`).delete(concept_controller_1.deleteConceptyId);
router.route(`${API_URL}:catId`).get(concept_controller_1.getConceptById);
router.route(`${API_URL}`).get(concept_controller_1.getAllConcepts);
exports.default = router;
//# sourceMappingURL=concept.route.js.map