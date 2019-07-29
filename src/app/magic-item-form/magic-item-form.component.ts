import { environment } from '../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MagicItem, Rarity } from '../magic-item';

export interface MagicItemData {
  magicItem: string;
}

@Component({
  selector: 'app-magic-item-form',
  templateUrl: './magic-item-form.component.html',
  styleUrls: ['./magic-item-form.component.scss']
})
export class MagicItemFormComponent implements OnInit {

  ngOnInit() { }
  constructor(
    private http: HttpClient,
  ) {}

  rarities: Rarity[] = [
    {value: '', viewValue: 'None'},
    {value: 'Common', viewValue: 'Common'},
    {value: 'Uncommon', viewValue: 'Uncommon'},
    {value: 'Rare', viewValue: 'Rare'},
    {value: 'Very Rare', viewValue: 'Very Rare'},
    {value: 'Legendary', viewValue: 'Legendary'}
  ];
  model = new MagicItem("", "", this.rarities[0], "", false, "");
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.model));

    this.http.post<MagicItemData>(environment.backend_URL + "/createmagicitem", this.model)
    .subscribe((data: MagicItemData) => {
      console.log(data);
      document.getElementById("magic-item-image")["src"] = environment.backend_URL + "/magicitem/" + data.magicItem;
      document.getElementById("magic-item-link")["href"] = environment.backend_URL + "/download/" + data.magicItem;
      document.getElementById("magic-item-link")["download"] = data.magicItem;
      document.getElementById("magic-item-download-button")["disabled"] = false;
    });
  }
}
