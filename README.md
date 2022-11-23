# API RESTful pour une WebApp de restauration
Voici mon rendu pour ce projet, ci-dessous vous trouverez la liste de ce que j'ai réussi à produire dans le temps imparti et ce que j'aurais souhaité ajouter si le temps me l'avait permis car malheureusement arrivé un peu plus tard que le reste de la promotion dans la formation. Le temps perdu m'aura été quelque peu préjudiciable comme vous pourrez le constater, j'espère malgré tout que le code ayant été fait saura répondre aux attentes et vous souhaite bonne réception.

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
- Gestion stock

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
