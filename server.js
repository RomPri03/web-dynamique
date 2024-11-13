const express = require('express');
const app = express();
const port = 3000; // Le port sur lequel votre serveur écoutera

// Route d'exemple
app.get('/', (req, res) => {
  res.send('Bonjour, ceci est un serveur web simple en utilisant Node.js et Express.js');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en écoute sur le port ${port}`);
});
// Route pour simuler une erreur 404 (page non trouvée)
app.get('*', (req, res) => {
  res.status(404).send(`
      <html>
      <head>
          <title>Erreur 404 - Not Found</title>
      </head>
      <body>
          <h1>Erreur 404 - Not Found</h1>
          <p>La page que vous recherchez n'a pas été trouvée.</p>
          <hr>
          <address>Apache/2.4.41 (Ubuntu) Server at example.com Port 80</address>
      </body>
      </html>
  `);
});