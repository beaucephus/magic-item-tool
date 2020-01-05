import { environment } from '../../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MagicItem, Card, Font, Rarity } from '../magic-item';
import { CustomImageDialogComponent } from '../custom-image-dialog/custom-image-dialog.component';
import { MatDialog } from '@angular/material';


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
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  cards: Card[] = [
    {value: 'parchment_poker', viewValue: 'Parchment(Poker)'},
    {value: 'parchment_tarot', viewValue: 'Parchment(Tarot)'}
  ];

  fonts: Font[] = [
    {value: 'open_sans', viewValue: 'Open Sans'},
    {value: 'fantaisie_artistique', viewValue: 'Fantasy'},
    {value: 'moria_citadel', viewValue: 'Moria Citadel'},
  ];

  rarities: Rarity[] = [
    {value: null, viewValue: 'None'},
    {value: 'Common', viewValue: 'Common'},
    {value: 'Uncommon', viewValue: 'Uncommon'},
    {value: 'Rare', viewValue: 'Rare'},
    {value: 'Very Rare', viewValue: 'Very Rare'},
    {value: 'Legendary', viewValue: 'Legendary'}
  ];

  model = new MagicItem(this.cards[0].value, this.fonts[0].value);

  //
  // Opens the dialog modal to create a custom magic item image.
  //
  openCustomImageDialog(): void {
    const dialogRef = this.dialog.open(CustomImageDialogComponent, {
      maxWidth: '80%',
      maxHeight: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.model.customImage = result;
    });
  }

  //
  // Submits magic item for processing to the backend.
  // Displays the returned image.
  //
  submitMagicItem() {
    console.log(JSON.stringify(this.model));

    this.dimImage();
    document.getElementById("magic-item-download-button")["disabled"] = true;

    this.http.post<MagicItemData>(environment.backend_URL + "/createmagicitem", this.model)
    .subscribe((data: MagicItemData) => {
      console.log(data);
      document.getElementById("magic-item-image")["src"] = environment.backend_URL + "/magicitem/" + data.magicItem;
      document.getElementById("magic-item-link")["href"] = environment.backend_URL + "/download/" + data.magicItem;
      document.getElementById("magic-item-link")["download"] = data.magicItem;

      document.getElementById("magic-item-download-button")["disabled"] = false;
      this.brightenImage();
    });
  }

  dimImage() {
    console.log("Showing spinner.");
    document.getElementById("magic-item-image").style.filter = "brightness(50%)";
  }

  brightenImage() {
    console.log("Showing image.");
    document.getElementById("magic-item-image").style.filter = "brightness(100%)";
  }
}
