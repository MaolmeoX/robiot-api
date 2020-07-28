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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConceptService = __importStar(require("../services/concept.service"));
/**
 * POST /api/v1/concept/create
 * Creates a concept
 */
exports.createConcepts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const concept = req.body;
    res.status(200).json(yield ConceptService.create(concept));
});
/**
 * GET /api/v1/concept
 * Gets all concepts
 */
exports.getAllConcepts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(yield ConceptService.findAll());
});
/**
 * GET /api/v1/concept/:concept_id
 * Gets concept by id
 */
exports.getConceptById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(yield ConceptService.findById(Number(req.params.conceptId)));
});
/**
 * DEL /api/v1/concept/:concept_id
 * Deletes concept by id
 */
exports.deleteConceptyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(yield ConceptService.deleteById(Number(req.params.conceptId)));
});
/**
 * PUT /api/v1/concept/:concept_id
 * Updates concept by id
 */
exports.updateConceptById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const concept = req.body;
    res.status(200).json(yield ConceptService.updateById(concept));
});
//# sourceMappingURL=concept.controller.js.map