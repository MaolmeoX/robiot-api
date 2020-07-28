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
const CategoryService = __importStar(require("../services/category.service"));
require("../config/passport");
/**
 * POST /api/v1/category/create
 * Creates a category
 */
exports.postCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.body;
    res.status(200).json(yield CategoryService.create(category));
});
/**
 * GET /api/v1/category
 * Gets all categories
 */
exports.getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(yield CategoryService.findAll());
});
/**
 * GET /api/v1/category/:cat_id
 * Gets category by id
 */
exports.getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(yield CategoryService.findById(Number(req.params.catId)));
});
/**
 * DEL /api/v1/category/:cat_id
 * Deletes category by id
 */
exports.deleteCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json(yield CategoryService.deleteById(Number(req.params.catId)));
});
/**
 * PUT /api/v1/category/:cat_id
 * Updates category by id
 */
exports.updateCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = req.body;
    res.status(200).json(yield CategoryService.updateById(category));
});
//# sourceMappingURL=category.controller.js.map