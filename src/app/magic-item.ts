export interface Font {
  value: string;
  viewValue: string;
}

export interface Rarity {
  value: string;
  viewValue: string;
}

export class MagicItem {

  constructor(
    public font: string,
    public title?: string,
    public type?: string,
    public rarity?: string,
    public value?: string,
    public requiresAttunement?: boolean,
    public description?: string,
    public customImage?: string
  ){}

}

