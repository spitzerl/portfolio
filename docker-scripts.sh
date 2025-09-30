#!/bin/bash

# Scripts utiles pour Docker Portfolio

echo "🐳 Scripts Docker pour Portfolio"
echo "================================"

case "$1" in
  "build")
    echo "🏗️  Construction de l'image Docker..."
    docker build -t portfolio:latest .
    ;;
  "run")
    echo "🚀 Lancement du conteneur en production..."
    docker run -d -p 3000:3000 --name portfolio-app portfolio:latest
    ;;
  "dev")
    echo "🛠️  Lancement en mode développement..."
    docker-compose --profile dev up portfolio-dev
    ;;
  "prod")
    echo "🏭 Lancement en mode production..."
    docker-compose up portfolio -d
    ;;
  "stop")
    echo "🛑 Arrêt des conteneurs..."
    docker-compose down
    docker stop portfolio-app 2>/dev/null || true
    ;;
  "logs")
    echo "📋 Logs du conteneur..."
    docker-compose logs -f portfolio
    ;;
  "clean")
    echo "🧹 Nettoyage des images et conteneurs..."
    docker-compose down
    docker container rm portfolio-app 2>/dev/null || true
    docker image rm portfolio:latest 2>/dev/null || true
    docker system prune -f
    ;;
  "shell")
    echo "💻 Accès shell au conteneur..."
    docker exec -it portfolio-app sh
    ;;
  *)
    echo "Usage: $0 {build|run|dev|prod|stop|logs|clean|shell}"
    echo ""
    echo "Commandes disponibles :"
    echo "  build  - Construire l'image Docker"
    echo "  run    - Lancer le conteneur en production"
    echo "  dev    - Lancer en mode développement avec hot reload"
    echo "  prod   - Lancer en mode production avec docker-compose"
    echo "  stop   - Arrêter tous les conteneurs"
    echo "  logs   - Voir les logs du conteneur"
    echo "  clean  - Nettoyer les images et conteneurs"
    echo "  shell  - Accéder au shell du conteneur"
    exit 1
    ;;
esac
