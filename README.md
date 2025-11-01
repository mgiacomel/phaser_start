# 🚀 Gioco Phaser 4 (Bun + Vite + JavaScript)

Questo progetto è un template di gioco minimale basato sul framework **Phaser 4**, configurato con **Bun** per la gestione delle dipendenze e **Vite** per l'ambiente di sviluppo e il bundling.

## Requisiti

Per eseguire questo progetto, devi avere installato il runtime e package manager **Bun**.

### 1. Installazione di Bun

Se non hai ancora Bun sulla tua macchina, installalo globalmente.

**Linux/macOS (con curl):**
```bash
curl -fsSL [https://bun.sh/install](https://bun.sh/install) | bash
````

**Windows (con PowerShell):**

```bash
powershell -c "irm [https://bun.sh/install.ps1](https://bun.sh/install.ps1) | iex"
```

*(Per altre opzioni di installazione, consulta la [documentazione ufficiale di Bun](https://bun.sh/docs/installation)).*

-----

## Avvio del Progetto

Segui questi passaggi per installare le dipendenze e avviare l'ambiente di sviluppo.

### 2\. Installazione delle Dipendenze

Entra nella directory del progetto e usa Bun per installare Phaser 4 e Vite, come specificato in `package.json`.

```bash
# Entra nella cartella del progetto
cd nome-del-progetto/

# Installa tutte le dipendenze
bun install
```

### 3\. Avvio del Server di Sviluppo

Il comando `dev` nel tuo `package.json` è configurato per avviare Vite.

```bash
bun run dev
```

Il server di sviluppo verrà avviato (tipicamente su `http://localhost:5173/`). Apri questo indirizzo nel tuo browser. Le modifiche ai file `.js` e `.html` saranno applicate automaticamente (HMR).

```

---
