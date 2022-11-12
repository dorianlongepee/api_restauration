import { Schema } from "mongoose";
const mongoose = require("mongoose");

const alimentSchema = new Schema({
  nom: String, // String isshorthandfor {type: String}
  type: String,
  quantite: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});
const AlimentModel = mongoose.model("Aliment", alimentSchema);

export class Aliment {
  public static async getAllAliments(): Promise<any> {
    return new Promise(async (resolve) => {
      let listeAliments: any[] = await AlimentModel.find();
      resolve(listeAliments);
    });
  }

  public static async getOneAliment(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.findOne({ _id: id }));
    });
  }

  public static async getAlimentsFromType(type: any): Promise<any> {
    return new Promise(async (resolve) => {
      let listeAliments: any[] = await AlimentModel.find({type: type});
      resolve(listeAliments);
    });
  }

  public static async insertAliment(body: {
    nom: string;
    type: string;
    quantite: number;
  }) {
    const aliment = new AlimentModel({
      nom: body.nom,
      type: body.type,
      quantite: body.quantite,
      date: new Date(),
    });
    return await aliment.save();
  }

  public static async removeAliment(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.deleteOne({ _id: id }));
    });
  }

  public static async updateAliment(
    id: string,
    body: {
      nom: string,
      type: string,
      quantite: number,
    }
  ): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.updateOne({ _id: id }, body));
    });
  }
}
