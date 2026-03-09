#!/usr/bin/env node

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0' // Écouter sur toutes les interfaces
const port = process.env.PORT || 3000

// Création de l'app Next.js
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Erreur lors du traitement de la requête:', err)
      res.statusCode = 500
      res.end('Erreur interne du serveur')
    }
  })
  .once('error', (err) => {
    console.error('Erreur du serveur:', err)
    process.exit(1)
  })
  .listen(port, () => {
    console.log(`🚀 Application lancée sur le port ${port}`)
    console.log(`🌐 Environnement: ${dev ? 'développement' : 'production'}`)
  })
})