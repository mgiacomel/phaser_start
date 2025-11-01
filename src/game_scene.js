// src/GameScene.js

// Usa l'istruzione 'export' per rendere la classe disponibile in main.js
export class GameScene extends Phaser.Scene {
  // Assegna un nome alla scena nel costruttore
  constructor() {
    super("GameScene");
  }

  preload() {
    console.log("Preload della Scena avviato.");
    // Caricamento risorse
    this.load.setBaseURL("https://labs.phaser.io");
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
  }

  create() {
    console.log("Create della Scena avviato.");

    // Aggiungi sfondo
    this.add.image(400, 300, "sky");

    // Aggiungi logo (lo facciamo ruotare per dimostrazione)
    const logo = this.add.image(400, 150, "logo");
    logo.setDepth(1); // Per assicurarsi che sia sopra l'immagine sky

    // Aggiungi testo
    this.add
      .text(400, 300, "Phaser 4 - Scena Strutturata", {
        font: "32px Arial",
        fill: "#ffffff",
      })
      .setOrigin(0.5);

    // Aggiunge l'animazione al logo
    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
  }

  update(time, delta) {
    // Logica eseguita ad ogni frame del gioco
  }
}
