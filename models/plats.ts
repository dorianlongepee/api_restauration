import mongoose, { Schema } from "mongoose";

const platSchema = new Schema({
    nom: String,
    type: String,
    aliments: Array,
    prix: Number,
})
const PlatModel = mongoose.model("Plat", platSchema);

export class Plat {
    public static async getAllPlats(): Promise<any> {
        return new Promise(async (resolve) => { 
            let listePlats: any[] = await PlatModel.find()
            resolve(listePlats)
        })
    }

    public static async getOnePlat(id: string): Promise<any> {
        return new Promise(async (resolve) => {
          resolve(await PlatModel.findOne({ _id: id }));
        });
      }

    public static async getPlatsFromType(type: any): Promise<any> {
        return new Promise(async (resolve) => {
          let listePlats: any[] = await PlatModel.find({type: type});
          resolve(listePlats);
        });
      }

    public static async insertPlat(body: {
        nom: string,
        type: string,
        aliments: {
            nom: string
            quantite: number
        }[],
        prix: number,
    }){
        const plat = new PlatModel({
            nom: body.nom,
            type: body.type,
            aliments: body.aliments,
            prix: body.prix,
        })
    
    return await plat.save()
    }

    public static async removePlat(id: string): Promise<any> {
        return new Promise(async (resolve) => {
          resolve(await PlatModel.deleteOne({ _id: id }));
        });
    }

    public static async updatePlat(
        id: string,
        body: {
          nom: string,
          type: string,
          aliments: {nom: string, quantite:number}[],
          prix: number,
        }
      ): Promise<any> {
        return new Promise(async (resolve) => {
          resolve(await PlatModel.updateOne({ _id: id }, body));
        });
      }
}