export interface Card {
  value: string;
  viewValue: string;
}

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
    public card: string,
    public font: string,
    public title?: string,
    public type?: string,
    public rarity?: string,
    public value?: string,
    public requires_attunement?: boolean,
    public description?: string,
    public custom_image?: string
  ){}

}

