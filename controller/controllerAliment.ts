import { Aliment } from '../models/aliments';

export class ControllerAliment {
  public static async getAliments(req, res) {
    let listeAliments = await Aliment.getAllAliments()
    res.send(listeAliments)
  }

  public static async getOneAliments(req, res) {
    let alimentId: string = req.params.id
    let alimentDetail = await Aliment.getOneAliment(alimentId)
    res.send(alimentDetail)
  }

  public static async getAlimentsFromType(req, res){
    let alimentType: string = req.params.type
    let listeAliments = await Aliment.getAlimentsFromType(alimentType)
    res.send(listeAliments)
  }

  public static async insertAliment(req, res){
    await Aliment.insertAliment(req.body)
    res.status(201)
    res.send()
  }

  public static async removeAliment(req, res){
    let alimentId: any = req.params.id
    await Aliment.removeAliment(alimentId)
    res.status(204)
    res.send()
  }

  public static async updateAliment(req, res){
    let alimentId: any = req.params.id
    let detailsToUpdate: any = req.body
    await Aliment.updateAliment(alimentId, detailsToUpdate)
    res.status(204)
    res.send()
  }


  private static verifierAcces(req) {
    if (req.authorization == true) {
      return true
    }
    return false
  }
}