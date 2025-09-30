#!/bin/bash

# Script de déploiement optimisé pour la production
# Usage: ./deploy.sh

set -e

echo "🚀 Début du déploiement en production..."

# Couleurs pour les logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour logger avec couleur
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] ⚠️  $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ❌ $1${NC}"
}

# Vérification des prérequis
log "Vérification des prérequis..."

if ! command -v node &> /dev/null; then
    error "Node.js n'est pas installé"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    error "npm n'est pas installé"
    exit 1
fi

# Vérification de la version Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    error "Node.js version 18+ requis (actuellement: $(node -v))"
    exit 1
fi

log "✅ Prérequis validés"

# Nettoyage
log "🧹 Nettoyage des fichiers temporaires..."
rm -rf .next
rm -rf out
npm cache clean --force || true

# Installation des dépendances
log "📦 Installation des dépendances..."
npm ci --production=false

# Vérifications de qualité
log "🔍 Vérification TypeScript..."
npm run type-check

log "🔍 Linting du code..."
npm run lint

# Build de production
log "🏗️  Build de production..."
NODE_ENV=production npm run build

# Test du build
log "🧪 Test du build..."
timeout 30s npm run start:prod &
SERVER_PID=$!

# Attente que le serveur démarre
sleep 10

# Test de santé
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    log "✅ Serveur de test fonctionnel"
else
    error "❌ Le serveur de test ne répond pas"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi

# Arrêt du serveur de test
kill $SERVER_PID 2>/dev/null || true
sleep 2

# Build Docker (si Docker est disponible)
if command -v docker &> /dev/null; then
    log "🐳 Build de l'image Docker..."
    docker build -t portfolio:latest -t portfolio:$(date +%Y%m%d-%H%M%S) .
    
    # Test de l'image Docker
    log "🧪 Test de l'image Docker..."
    CONTAINER_ID=$(docker run -d -p 3001:3000 portfolio:latest)
    
    # Attente que le conteneur démarre
    sleep 15
    
    if curl -f http://localhost:3001 > /dev/null 2>&1; then
        log "✅ Image Docker fonctionnelle"
    else
        warn "⚠️  L'image Docker ne répond pas correctement"
    fi
    
    # Nettoyage du conteneur de test
    docker stop $CONTAINER_ID > /dev/null 2>&1 || true
    docker rm $CONTAINER_ID > /dev/null 2>&1 || true
else
    warn "Docker n'est pas installé, build Docker ignoré"
fi

# Statistiques du build
if [ -d ".next" ]; then
    log "📊 Statistiques du build:"
    echo "   - Taille du dossier .next: $(du -sh .next | cut -f1)"
    echo "   - Nombre de pages: $(find .next/server/pages -name "*.js" 2>/dev/null | wc -l || echo "N/A")"
    echo "   - Fichiers statiques: $(find .next/static -type f 2>/dev/null | wc -l || echo "N/A")"
fi

log "🎉 Déploiement terminé avec succès!"
log "📝 Prochaines étapes:"
echo "   1. Vérifiez les logs pour d'éventuelles alertes"
echo "   2. Déployez sur votre plateforme de production"
echo "   3. Configurez les variables d'environnement avec .env.example"
echo "   4. Mettez à jour le DNS si nécessaire"

log "🚀 Ready for production!"