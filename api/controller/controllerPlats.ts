import { Plat } from "../models/plats"

export class ControllerPlats {
    public static async getAllPlats(req, res){
        let listePlats = await Plat.getAllPlats()
        res.send(listePlats)
    }

    public static async getOnePlat(req, res) {
        let platId: string = req.params.id
        let platDetail = await Plat.getOnePlat(platId)
        res.send(platDetail)
      }

    public static async getPlatsFromType(req,res){
        let platType: string = req.params.type
        let listePlats = await Plat.getPlatsFromType(platType)
        res.send(listePlats)
    }

    public static async insertPlat(req, res){
        await Plat.insertPlat(req.body)
        res.status(201)
        res.send()
    }

    public static async removePlat(req, res){
        let platId: any = req.params.id
        await Plat.removePlat(platId)
        res.status(204)
        res.send()
    }

    public static async updatePlat(req, res){
        let platId: any = req.params.id
        let detailsToUpdate: any = req.body
        await Plat.updatePlat(platId, detailsToUpdate)
        res.status(204)
        res.send()
      }
}