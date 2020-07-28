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
Object.defineProperty(exports, "__esModule", { value: true });
const MockConcepts_1 = require("../models/MockConcepts");
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        // const concepts = await Concept.find();
        const concepts = yield MockConcepts_1.MockConcepts();
        return concepts;
    });
}
exports.findAll = findAll;
function findById(conceptId) {
    return __awaiter(this, void 0, void 0, function* () {
        // const concepts = await Concept.findById(conceptId);
        const concepts = yield MockConcepts_1.MockConcepts();
        return concepts[conceptId];
    });
}
exports.findById = findById;
function create(concept) {
    return __awaiter(this, void 0, void 0, function* () {
        // return Concept.create(concept);
        return concept;
    });
}
exports.create = create;
function deleteById(conceptId) {
    return __awaiter(this, void 0, void 0, function* () {
        // Concept.findByIdAndDelete(conceptId);
    });
}
exports.deleteById = deleteById;
function updateById(concept) {
    return __awaiter(this, void 0, void 0, function* () {
        // return Concept.findByIdAndUpdate(concept.id, concept);
        return concept;
    });
}
exports.updateById = updateById;
//# sourceMappingURL=concept.service.js.map