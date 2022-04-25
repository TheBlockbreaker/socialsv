"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_service_1 = require("./users.service");
const mongoose_2 = require("mongoose");
let FriendsService = class FriendsService {
    constructor(friendRequestModel, friendshipModel, usersService) {
        this.friendRequestModel = friendRequestModel;
        this.friendshipModel = friendshipModel;
        this.usersService = usersService;
    }
    isPartOfFriendRequest(userId, friendRequest) {
        return (String(friendRequest.from) === userId ||
            String(friendRequest.to) === userId);
    }
    isFriedRequestRecepient(userId, friendRequest) {
        return String(friendRequest.to) === userId;
    }
};
FriendsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("FriendRequest")),
    __param(1, (0, mongoose_1.InjectModel)("Friendship")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        users_service_1.default])
], FriendsService);
exports.default = FriendsService;
//# sourceMappingURL=friends.service.js.map