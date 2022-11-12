"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
module.exports = function (req, res, next) {
    try {
        var token = req.headers.authorization.split(' ')[1];
        var decodedToken = jsonwebtoken_1.default.verify(token, 'RANDOM_TOKEN_SECRET');
        var userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        next();
    }
    catch (error) {
        res.status(401).json({ error: error });
    }
};
//# sourceMappingURL=auth.js.map