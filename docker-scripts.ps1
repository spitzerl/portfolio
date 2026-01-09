param(
  [string]$Command = $(if ($args) { $args[0] } else { "help" })
)

function Load-EnvFile($path) {
  if (Test-Path $path) {
    Get-Content $path | ForEach-Object {
      if ($_ -and -not $_.Trim().StartsWith('#')) {
        $parts = $_ -split '=', 2
        if ($parts.Count -eq 2) {
          $k = $parts[0].Trim()
          $v = $parts[1].Trim()
          Set-Item -Path "Env:$k" -Value $v
        }
      }
    }
  }
}

switch ($Command.ToLower()) {
  "build" {
    Write-Host "🏗️  Construction de l'image Docker (Windows)..."
    Load-EnvFile ".env.production"
    $appEnv = $env:APP_ENV -or "production"
    $baseUrl = $env:NEXT_PUBLIC_BASE_URL -or "http://localhost:3002"
    $port   = $env:PORT -or "3002"
    docker build --build-arg APP_ENV=$appEnv `
                 --build-arg NEXT_PUBLIC_BASE_URL=$baseUrl `
                 --build-arg PORT=$port `
                 -t portfolio:latest .
  }
  "run" {
    Write-Host "🚀 Lancement du conteneur en production (Windows)..."
    if (Test-Path ".env.production") {
      Load-EnvFile ".env.production"
      $port = $env:PORT -or "3002"
      docker run -d --env-file .env.production -p "$port:$port" --name portfolio-app portfolio:latest
    } else {
      $port = $env:PORT -or "3002"
      docker run -d -p "$port:$port" --name portfolio-app portfolio:latest
    }
  }
  "standalone" {
    Write-Host "⚙️  Lancement local du serveur standalone (.next/standalone) (Windows)..."
    Load-EnvFile ".env.production"
    $port = $env:PORT -or "3002"
    $serverPath = ".\.next\standalone\server.js"
    if (Test-Path $serverPath) {
      Write-Host "▶️  Démarrage : PORT=$port node $serverPath"
      Set-Item -Path "Env:PORT" -Value $port
      $proc = Start-Process -FilePath "node" -ArgumentList $serverPath -PassThru
      Write-Host "PID $($proc.Id)"
    } else {
      Write-Error "❌ Aucun build standalone trouvé. Lancez 'npm run build' d'abord."
      exit 1
    }
  }
  "stop" {
    Write-Host "🛑 Arrêt des conteneurs..."
    docker-compose down
    docker stop portfolio-app 2>$null | Out-Null
    docker rm portfolio-app 2>$null | Out-Null
  }
  "clean" {
    Write-Host "🧹 Nettoyage des images et conteneurs..."
    docker-compose down
    docker container rm portfolio-app 2>$null | Out-Null
    docker image rm portfolio:latest 2>$null | Out-Null
    docker system prune -f
  }
  "help" {
    Write-Host "Usage: .\docker-scripts.ps1 <build|run|standalone|stop|clean>"
  }
  default {
    Write-Host "Commande inconnue. Usage: .\docker-scripts.ps1 <build|run|standalone|stop|clean>"
  }
}
