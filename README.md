# API RESTful pour une WebApp de restauration
J'aurais aimé un peu plus de temps afin d'ajouter certaines fonctionnalités comme je suis arrivé plus tard que le reste de la promotion mais voici un état des lieux pour respecter la deadline 🙂 

## Fait
- Affichage des plats et des aliments
- Ajout à un panier
- Création de compte
- Login
- le back développé (sauf commandes)

## À faire
- Stockage cookie/localStorage utilisateur
- CRUD graphique pour les admins
- Panier + commande

# Lancer le projet
Commencer par cloner le repository

```
git clone git@github.com:dorianlongepee/api_restauration.git
// OR
git clone https://github.com/dorianlongepee/api_restauration.git
```

Se positionner dans le dossier et lancer l'installation des dépendances

```
cd api_restauration
npm install
```

Puis, lancer le serveur mongodb + la compilation des fichiers typescript
```
supervisor app
sh compile.sh
```

L'api est désormais fonctionnelle et peut être visualisée via [Swagger](http://localhost:3000/docs)
