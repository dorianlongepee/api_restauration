import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcrypt'


const userSchema = new Schema({
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model("User", userSchema);

export class User {
    public static async insertUser(mail, hash) {
        const user = new UserModel({
            mail: mail,
            password: hash
        })
        return await user.save()
    }

    public static async getUser(mail: string) : Promise<any> {
    return new Promise(async (resolve) => {
        resolve(await UserModel.findOne({mail: mail}));
    })
    }
}