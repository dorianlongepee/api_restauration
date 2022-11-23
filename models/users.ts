import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    }
})

const UserModel = mongoose.model("User", userSchema);

export class User {
    public static async insertUser(body, hash) {
        const user = new UserModel({
            mail: body.mail,
            password: hash,
            nom: body.nom,
            prenom: body.prenom,
            admin: body.admin
        })
        return await user.save()
    }

    public static async getUser(mail: string) : Promise<any> {
    return new Promise(async (resolve) => {
        resolve(await UserModel.findOne({mail: mail}));
    })
    }
}