#!/bin/bash

# Ce script exécute les tests unitaires du projet.

# Vérifie si Jest est installé
if ! command -v jest &> /dev/null
then
    echo "Jest n'est pas installé. Veuillez l'installer pour exécuter les tests."
    exit 1
fi

# Exécute les tests
jest --coverage

# Vérifie le résultat des tests
if [ $? -eq 0 ]; then
    echo "Tous les tests ont réussi."
else
    echo "Certains tests ont échoué."
    exit 1
fi