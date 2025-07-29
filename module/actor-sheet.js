/*
 * Actor Sheet for Projet Vantairo
 *
 * This class defines a very simple Actor sheet that displays an actor's name,
 * image, health pool, and description. It extends Foundry's built-in
 * ActorSheet class and overrides a handful of properties such as the
 * template path and default dimensions.
 */

export class ProjetVantairoActorSheet extends ActorSheet {
  /**
   * Provide default rendering options for the actor sheet. Here we specify
   * custom CSS classes, the Handlebars template to use, initial dimensions
   * and tab configuration.
   */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["projetvantairo", "sheet", "actor"],
      template: "systems/projetvantairo/templates/actor-sheet.html",
      width: 600,
      height: 600,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attributes",
        },
      ],
    });
  }

  /**
   * Prepare data for rendering the actor sheet. We simply return the data
   * provided by the superclass without modification, but this method is
   * available should you need to inject additional data for your templates.
   */
  getData() {
    const data = super.getData();
    return data;
  }

  /**
   * Add event listeners to the sheet after it has been rendered to the DOM.
   * For this minimal system we rely entirely on default behaviours.
   */
  activateListeners(html) {
    super.activateListeners(html);
    // Additional listeners could be added here.
  }
}