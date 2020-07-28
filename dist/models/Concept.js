"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const conceptSchema = new mongoose_1.default.Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    categories: [{
            type: String
        }],
    description: String,
    website: String,
    picturePath: String,
    state: Number
}, { timestamps: true });
exports.Concept = mongoose_1.default.model("Concept", conceptSchema);
//# sourceMappingURL=Concept.js.map