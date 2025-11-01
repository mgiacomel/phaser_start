// main.js

import Phaser from "phaser";

// Importa la tua scena usando il percorso relativo e l'estensione .js
import { GameScene } from "./src/game_scene.js";

// Definisci la configurazione principale
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "app", // L'ID del div nel tuo index.html
  scale: {
    mode: Phaser.Scale.FIT, // Modalità: Adatta il gioco alla dimensione disponibile
    autoCenter: Phaser.Scale.CENTER_BOTH, // Centra orizzontalmente e verticalmente
    zoom: 1, // Puoi lasciare a 1 se usi FIT
  },
  // Array delle scene da caricare. La prima sarà avviata.
  scene: [
    GameScene,
    // Aggiungerai qui altre scene (MenuScene, GameOverScene, ecc.)
  ],
};

// Crea e avvia l'istanza del gioco
const game = new Phaser.Game(config);

console.log("Gioco Phaser avviato con la scena GameScene.");
