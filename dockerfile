FROM node:14 AS build

# Copier les fichiers de dépendances
WORKDIR /app
COPY ./my-api/package*.json ./

# Installer les dépendances explicitement
RUN npm install
RUN npm install dotenv @types/dotenv typescript @types/express @types/pg --save-dev

# Copier le reste du code source
COPY ./my-api .

# Modifier db.ts pour utiliser le nom du service Docker au lieu de localhost
RUN sed -i 's/localhost/mysql/g' src/db.ts

# Compiler le projet TypeScript
RUN npx tsc

FROM node:14

WORKDIR /app

# Copier les fichiers compilés
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Exposer le port de l'API
EXPOSE 8080

# Variable d'environnement pour le port
ENV PORT=8080

# Commande pour lancer l'application
CMD ["node", "dist/src/app.js"]