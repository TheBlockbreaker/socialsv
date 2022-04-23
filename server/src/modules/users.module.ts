import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "../schemas/user.schema";
import { UsersController } from "../controllers/users.controller";
import UsersService from "../services/users.service";

@Module({
	imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [MongooseModule, UsersService],
})
export class UsersModule {}