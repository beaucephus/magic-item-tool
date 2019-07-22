import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
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
    private _ngZone: NgZone
  ) {}

  rarities: Rarity[] = [
    {value: '', viewValue: 'None'},
    {value: 'Common', viewValue: 'Common'},
    {value: 'Uncommon', viewValue: 'Uncommon'},
    {value: 'Rare', viewValue: 'Rare'},
    {value: 'Very Rare', viewValue: 'Very Rare'},
    {value: 'Legendary', viewValue: 'Legendary'}
  ];
  model = new MagicItem("", "", this.rarities[0], false, "");
  submitted = false;

  onSubmit() {
    this.submitted = true;

    console.log(JSON.stringify(this.model));
    const be_host = "magic-item-tool-be.herokuapp.com";
    const be_port = 443;
    const be_base_url = "https://" + be_host + ":" + be_port

    this.http.post<MagicItemData>(be_base_url + "/createmagicitem", this.model).subscribe((data: MagicItemData)  => {
      console.log(data);
      document.getElementById("magic-item-image")["src"] = be_base_url + "/magicitem/" + data.magicItem;
      document.getElementById("magic-item-link")["href"] = be_base_url + "/download/" + data.magicItem;
      document.getElementById("magic-item-link")["download"] = data.magicItem;
      document.getElementById("magic-item-download-button")["disabled"] = false;
    });
  }

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
