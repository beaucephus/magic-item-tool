export interface Rarity {
  value: string;
  viewValue: string;
}

export class MagicItem {

  constructor(
    public title: string,
    public type: string,
    public rarity: Rarity,
    public value: string,
    public requiresAttunement: boolean,
    public description: string,
    public customImage: any
  ){}

}

