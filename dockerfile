FROM node:20 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier le package.json du dossier my-api
COPY my-api/package*.json ./

# Installer toutes les dépendances (dev + prod) pour la compilation
RUN npm install

# Ajouter manuellement dotenv car il est utilisé mais pas déclaré dans package.json
RUN npm install dotenv

# Copier les fichiers sources du projet
COPY my-api/ ./

# Modifier db.ts pour utiliser le nom du service Docker PostgreSQL au lieu de localhost
RUN sed -i 's/localhost/postgres/g' src/db.ts

# Compiler le projet TypeScript
RUN npx tsc

# Étape de production
FROM node:20

WORKDIR /app

# Copier package.json depuis l'étape de build
COPY --from=build /app/package*.json ./

# Installer dépendances de production + dotenv explicitement
RUN npm install --omit=dev
RUN npm install dotenv

# Copier les fichiers compilés depuis l'étape de build
COPY --from=build /app/dist ./dist

# Exposer le port de l'API
EXPOSE 8080

# Variable d'environnement pour le port
ENV PORT=8080

# Commande pour lancer l'application
CMD ["node", "dist/src/app.js"]