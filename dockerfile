FROM node:20 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer toutes les dépendances (dev + prod) pour la compilation
RUN npm install

# Copier le reste du code source
COPY . .

# Modifier db.ts pour utiliser le nom du service Docker PostgreSQL au lieu de localhost
RUN sed -i 's/localhost/postgres/g' src/db.ts

# Compiler le projet TypeScript
RUN npx tsc

# Étape de production
FROM node:20

WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer uniquement les dépendances de production
RUN npm install --only=production

# Copier les fichiers compilés depuis l'étape de build
COPY --from=build /app/dist ./dist

# Exposer le port de l'API
EXPOSE 8080

# Variable d'environnement pour le port
ENV PORT=8080

# Commande pour lancer l'application
CMD ["node", "dist/src/app.js"]