import { ControllerAliment } from './controller/controllerAliment';
import { ControllerPlats } from './controller/controllerPlats';
import {ControllerUsers} from "./controller/controllerUsers";

const mongoose = require('mongoose');
const express = require('express');

/**
 * On créé une nouvelle "application" express
 */
const app = express();
const bodyParser = require('body-parser');
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );

  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );

  next();
});

/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// Aliments
app.get('/', (req, res) => res.send('🏠👌'));
app.get('/aliments', (req, res) => ControllerAliment.getAliments(req, res));
app.get('/aliments/:id', (req, res) => ControllerAliment.getOneAliments(req, res));

app.get('/aliments/types/:type', (req, res) => ControllerAliment.getAlimentsFromType(req, res));

app.post('/aliments', (req,res) => ControllerAliment.insertAliment(req, res));

app.put('/aliments/:id', (req,res) => ControllerAliment.updateAliment(req, res));

app.delete('/aliments/:id', (req,res) => ControllerAliment.removeAliment(req, res));


// Plats
app.get('/plats', (req, res) => ControllerPlats.getAllPlats(req, res));
app.get('/plats/:id', (req, res) => ControllerPlats.getOnePlat(req, res));
app.get('/plats/types/:type', (req, res) => ControllerPlats.getPlatsFromType(req, res));

app.post('/plats', (req,res) => ControllerPlats.insertPlat(req, res));

app.put('/plats/:id', (req,res) => ControllerPlats.updatePlat(req, res));

app.delete('/plats/:id', (req,res) => ControllerPlats.removePlat(req, res));


// Users
app.post("/auth/signup", (req, res, next) => ControllerUsers.signup(req, res, next));
app.post("/auth/login", (req, res, next) => ControllerUsers.login(req, res, next));


app.listen(3000, () => {
  'Serveur listening on port :3000';
});

async function main() {
  try {
    await mongoose.connect('mongodb://localhost/Gestion_stock');
    console.log('Connection mongodb ok');
  } catch (e) {
    console.log(e);
  }
}

main();