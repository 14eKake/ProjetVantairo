/*
 * Item Sheet for Projet Vantairo
 *
 * This class defines a basic sheet for items within the Projet Vantairo
 * system. It provides a simple interface to edit an item's name, image,
 * and description. Like the actor sheet, it extends Foundry's core ItemSheet
 * class and specifies a custom template for rendering.
 */

export class ProjetVantairoItemSheet extends ItemSheet {
  /**
   * Specify default options for the item sheet. We adjust the template path
   * and some sheet dimensions here.
   */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["projetvantairo", "sheet", "item"],
      template: "systems/projetvantairo/templates/item-sheet.html",
      width: 500,
      height: 400,
    });
  }

  /**
   * Return data used to render the item sheet. This method could be
   * customized to inject system-specific information; for now we simply
   * delegate to the base implementation.
   */
  getData() {
    const data = super.getData();
    return data;
  }
}