#!/bin/bash

# Créer le répertoire pour les icônes Devicon
mkdir -p public/devicons

# Liste des icônes à télécharger
ICONS=(
  "html5/html5-original.svg"
  "css3/css3-original.svg"
  "javascript/javascript-original.svg"
  "typescript/typescript-original.svg"
  "php/php-original.svg"
  "mysql/mysql-original.svg"
  "csharp/csharp-original.svg"
  "java/java-original.svg"
  "vuejs/vuejs-original.svg"
  "react/react-original.svg"
  "nextjs/nextjs-original.svg"
  "symfony/symfony-original.svg"
  "codeigniter/codeigniter-plain.svg"
  "playwright/playwright-original.svg"
  "dotnetcore/dotnetcore-original.svg"
  "git/git-original.svg"
  "github/github-original.svg"
  "azure/azure-original.svg"
  "docker/docker-original.svg"
  "linux/linux-original.svg"
  "jira/jira-original.svg"
  "trello/trello-plain.svg"
  "confluence/confluence-original.svg"
  "microsoftoffice/microsoftoffice-original.svg"
)

# URL de base du dépôt Devicon
BASE_URL="https://raw.githubusercontent.com/devicons/devicon/master/icons"

# Télécharger chaque icône
for icon in "${ICONS[@]}"; do
  # Créer le répertoire parent si nécessaire
  mkdir -p "public/devicons/$(dirname $icon)"
  
  # Télécharger l'icône
  echo "Téléchargement de $icon..."
  curl -s "$BASE_URL/$icon" -o "public/devicons/$icon"
done

echo "Téléchargement des icônes Devicon terminé !" 