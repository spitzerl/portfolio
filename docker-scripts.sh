#!/bin/bash

# Scripts utiles pour Docker Portfolio

echo "🐳 Scripts Docker pour Portfolio"
echo "================================"

case "$1" in
  "build")
    echo "🏗️  Construction de l'image Docker..."
    # Charger .env.production si présent pour fournir build-args
    if [ -f .env.production ]; then
      export $(grep -v '^#' .env.production | xargs)
    fi
    docker build --build-arg APP_ENV=${APP_ENV:-production} \
                 --build-arg NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL:-http://localhost:3002} \
                 --build-arg PORT=${PORT:-3002} \
                 -t portfolio:latest .
    ;;
  "run")
    echo "🚀 Lancement du conteneur en production..."
    # Utiliser .env.production si présent pour les variables d'environnement
    if [ -f .env.production ]; then
      docker run -d --env-file .env.production -p ${PORT:-3002}:${PORT:-3002} --name portfolio-app portfolio:latest
    else
      docker run -d -p ${PORT:-3002}:${PORT:-3002} --name portfolio-app portfolio:latest
    fi
    ;;
  "standalone")
    echo "⚙️  Lancement local du serveur standalone (.next/standalone)..."
    # Charger .env.production si présent pour définir PORT et autres vars
    if [ -f .env.production ]; then
      export $(grep -v '^#' .env.production | xargs)
    fi
    PORT=${PORT:-3002}
    if [ -f ./.next/standalone/server.js ]; then
      echo "▶️  Démarrage : PORT=$PORT node ./.next/standalone/server.js"
      PORT=$PORT node ./.next/standalone/server.js &
      echo "PID $! — voir les logs via 'docker-scripts.sh logs' ou directement sur la console"
    else
      echo "❌ Aucun build standalone trouvé. Lancez 'npm run build' (ou ./docker-scripts.sh build) d'abord."
      exit 1
    fi
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
