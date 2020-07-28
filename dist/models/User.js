"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: String,
    role: Number,
    email: { type: String, unique: true, required: [true, "can't be blank"] },
    password: { type: String, required: [true, "can't be blank"] },
    notifications: Boolean,
    passwordResetToken: String,
    passwordResetExpires: Date,
}, { timestamps: true });
exports.User = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=User.js.map