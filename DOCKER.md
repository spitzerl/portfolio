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

## Définir l'environnement de production

Créez un fichier .env.production à la racine du projet (ne le commitez pas). Exemple minimal :

```
# .env.production
APP_ENV=production
PORT=3002
NEXT_PUBLIC_BASE_URL=https://mon-domaine.example
```

Le script de build utilise ces variables si le fichier existe. Les scripts fournis :
- ./docker-scripts.sh build      -> passe les build-args au docker build
- ./docker-scripts.sh run        -> lance le conteneur avec --env-file .env.production

En alternative, fournissez les mêmes variables via l'interface Portainer (env vars) ou via un registre d'images.

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
netstat -tulpn | grep :3002
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

## Déploiement simple via Portainer (recommandé)

1. Pousser ton dépôt sur GitHub (git push).
2. Copier `.env.production.example` -> `.env.production` et ajuster (ne pas committer).
3. Dans Portainer → Stacks → Add stack:
   - Select "Git repository"
   - Repository URL: https://github.com/TON_USER/portfolio.git
   - Compose path: /docker-compose.yml
   - Branch: main (ou ta branche)
   - Cliquer sur "Deploy the stack"
4. Dans la page du container, vérifier que le port Host 3002 → Container 3002 est bien configuré et que la variable PORT=3002 est appliquée (ou fournie via .env.production).
5. Vérifier logs et endpoint: http://<host>:3002

Remarque: si tu préfères builder localement et transférer l'image sur le VPS, tu peux aussi
- docker build -t portfolio:latest .
- docker save portfolio:latest -o portfolio.tar
- scp portfolio.tar user@vps:/tmp ; sur VPS docker load -i /tmp/portfolio.tar ; docker run ...
