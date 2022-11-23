import {User} from "../models/users";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export class ControllerUsers{
    public static async signup(req, res, next) {
        await bcrypt.hash(req.body.password, 10)
            .then( hash => { User.insertUser(req.body, hash)
                    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                    .catch(
                        error => res.status(400).json({ error })
                    );
            })
            .catch(error => res.status(500).json({ error }))
    }

    public static async login(req, res, next){

        await User.getUser(req.body.mail).then(user => {
                if (user === null) {
                    res.status(401).json({message: "Couple mail/mot de passe incorrect"});
                } else {
                    bcrypt.compare(req.body.password, user.password)
                        .then(valid => {
                            if (!valid) {
                                res.status(401).json({message: "Couple mail/mot de passe incorrect"});
                            }
                            res.status(200).json({
                                userId: user._id,
                                nom:user.nom,
                                prenom:user.prenom,
                                admin: user.admin,
                                accessToken: jwt.sign(
                                    {userId: user._id},
                                    "SCHEMA_TOKEN",
                                    {expiresIn: "24h"}
                                )
                            })
                        })
                        .catch(error => res.status(500).json({error}))
                }
            }).catch(error => res.status(500).json({error}))
    }
}