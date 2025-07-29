# ProjetVantairo
System Foundry VTT pour le JDR Vantairo.

Projet Vantairo is a minimal custom game system for **Foundry VTT**. It provides basic Actor and Item sheets as a foundation for the Vantairo role‑playing game.

## Installation

1. Download the latest release from the [GitHub repository](https://github.com/username/ProjetVantairo) or clone this repository directly.
2. Place the `projetvantairo` folder inside your Foundry data directory under `systems`:
   `Data/systems/projetvantairo`.
3. Alternatively, from Foundry's **Add-on Modules > Install System** dialog you can supply the manifest URL:
   `https://raw.githubusercontent.com/username/ProjetVantairo/main/system.json`.

## Foundry VTT Compatibility

According to `system.json`, this system requires Foundry **V11** and has been verified with **V12**.

## Loading the System

After copying the files, restart Foundry and create a new world using the **Projet Vantairo** system. The custom actor and item sheets will be available automatically.

## Development

The project uses plain JavaScript modules located in the `module` directory with entry point `projetvantairo.mjs`.
When developing:

- Clone the repository into your `Data/systems` folder for a live development setup.
- Edit templates under `templates/` and styles in `css/`.
- Reload the Foundry window (F5) to see changes.

Pull requests and contributions are welcome!
