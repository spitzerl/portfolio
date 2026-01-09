# Guide Docker - Portfolio

## 🐳 Configuration Docker

Ce projet est maintenant containerisé avec Docker pour faciliter le déploiement et le développement.

### Structure des fichiers Docker

- `Dockerfile` - Image de production optimisée
- `Dockerfile.dev` - Image de développement avec hot reload
- `docker-compose.yml` - Orchestration des services
- `.dockerignore` - Fichiers à exclure du contexte Docker
- `docker-scripts.sh` - Scripts utilitaires pour Docker
- `.env.example` - Variables d'environnement exemple

## 🚀 Utilisation

### Méthode rapide avec les scripts

```bash
# Rendre le script exécutable (déjà fait)
chmod +x docker-scripts.sh

# Construction et lancement en production
./docker-scripts.sh build
./docker-scripts.sh prod

# Développement avec hot reload
./docker-scripts.sh dev

# Voir les logs
./docker-scripts.sh logs

# Arrêter les conteneurs
./docker-scripts.sh stop
```

### Méthode manuelle

#### Production

```bash
# Construction de l'image
docker build -t portfolio:latest .

# Lancement du conteneur
docker run -d -p 3000:3000 --name portfolio-app portfolio:latest
```

#### Développement

```bash
# Lancement avec docker-compose en mode dev
docker-compose --profile dev up portfolio-dev
```

#### Avec docker-compose (production)

```bash
# Lancement en arrière-plan
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêt
docker-compose down
```

## 🔧 Configuration

### Variables d'environnement

Copiez `.env.example` vers `.env.local` et ajustez les valeurs :

```bash
cp .env.example .env.local
```

### Ports

- **Production** : `http://localhost:3002`
- **Développement** : `http://localhost:3001` (si lancé avec le profil dev)

## 📋 Commandes utiles

```bash
# Accéder au shell du conteneur
docker exec -it portfolio-app sh

# Voir les logs en temps réel
docker logs -f portfolio-app

# Redémarrer le conteneur
docker restart portfolio-app

# Nettoyer les images non utilisées
docker system prune -f
```

## 🏗️ Optimisations Docker

- **Multi-stage build** : Image finale optimisée (~150MB)
- **Output standalone** : Next.js génère une version autonome
- **Non-root user** : Sécurité renforcée
- **Cache layers** : Construction rapide lors des modifications

## 🐛 Dépannage

### Le conteneur ne démarre pas
```bash
# Vérifier les logs
docker logs portfolio-app

# Vérifier que le port n'est pas occupé
netstat -tulpn | grep :3000
```

### Erreurs de permissions
```bash
# Reconstruire l'image
docker build --no-cache -t portfolio:latest .
```

### Problèmes de cache
```bash
# Nettoyer et reconstruire
./docker-scripts.sh clean
./docker-scripts.sh build
```
