#!/bin/bash

# Script pour démarrer Next.js sans aucun indicateur de développement

# Variables d'environnement pour désactiver tous les indicateurs
export NEXT_TELEMETRY_DISABLED=1
export __NEXT_DISABLE_BUILD_INDICATOR=true
export __NEXT_DISABLE_OVERLAY=true
export NEXT_BUILD_INDICATOR=false
export __NEXT_DISABLE_ERROR_OVERLAY=true

# Démarrer Next.js
echo "🚀 Démarrage de Next.js sans indicateurs..."
npx next dev --port 3003
