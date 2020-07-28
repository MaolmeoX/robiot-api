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
const Category_1 = require("../models/Category");
function findAll() {
    return __awaiter(this, void 0, void 0, function* () {
        return Category_1.Category.find();
    });
}
exports.findAll = findAll;
function findById(catId) {
    return __awaiter(this, void 0, void 0, function* () {
        return Category_1.Category.findById(catId);
    });
}
exports.findById = findById;
function create(cat) {
    return __awaiter(this, void 0, void 0, function* () {
        return Category_1.Category.create(cat);
    });
}
exports.create = create;
function deleteById(catId) {
    return __awaiter(this, void 0, void 0, function* () {
        return Category_1.Category.findByIdAndDelete(catId);
    });
}
exports.deleteById = deleteById;
function updateById(cat) {
    return __awaiter(this, void 0, void 0, function* () {
        return Category_1.Category.findByIdAndUpdate(cat.id, cat);
    });
}
exports.updateById = updateById;
//# sourceMappingURL=category.service.js.map