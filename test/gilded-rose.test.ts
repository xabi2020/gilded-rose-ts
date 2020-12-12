import { Item, GildedRose } from "../app/gilded-rose";

describe("Normal item", function () {
  it("SellIn must decremented by one when calling updateQuality", function () {
    let normalItem = new Item("Elixir of the Mongoose", 10, 5);
    const gildedRose = new GildedRose([normalItem]);
    [normalItem] = gildedRose.updateQuality();
    expect(normalItem.sellIn).toEqual(9);
  });

  it("Must decrement its quality before sellIn date", function () {
    let normalItem = new Item("Elixir of the Mongoose", 10, 5);
    const gildedRose = new GildedRose([normalItem]);
    [normalItem] = gildedRose.updateQuality();
    expect(normalItem.quality).toEqual(4);
  });
});