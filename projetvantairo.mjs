/*
 * Projet Vantairo
 *
 * This file initializes the Projet Vantairo system for Foundry VTT. It
 * registers custom Actor and Item sheet classes defined in the module
 * directory and assigns them as the default sheets for all Actors and Items
 * within this system. If you wish to extend the system further you can
 * split these classes out into separate modules or import additional
 * functionality here.
 */

import { ProjetVantairoActorSheet } from "./module/actor-sheet.js";
import { ProjetVantairoItemSheet } from "./module/item-sheet.js";

/**
 * Initialize the Projet Vantairo system once Foundry is ready. This hook
 * fires early in the Foundry initialization process and is the appropriate
 * place to register custom classes and override configuration values.
 */
Hooks.once("init", async function () {
  console.log("Projet Vantairo | Initializing system");

  // Unregister the default sheets so our custom sheets can be the defaults.
  // The "core" sheets are provided by Foundry itself.
  Actors.unregisterSheet("core", ActorSheet);
  Items.unregisterSheet("core", ItemSheet);

  // Register the custom actor sheet as the default for all actor types.
  Actors.registerSheet("projetvantairo", ProjetVantairoActorSheet, {
    makeDefault: true,
    label: "Projet Vantairo Actor Sheet",
  });

  // Register the custom item sheet as the default for all item types.
  Items.registerSheet("projetvantairo", ProjetVantairoItemSheet, {
    makeDefault: true,
    label: "Projet Vantairo Item Sheet",
  });
});