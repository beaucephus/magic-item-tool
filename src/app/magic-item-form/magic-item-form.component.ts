import { environment } from '../../environments/environment';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MagicItem, Rarity } from '../magic-item';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface MagicItemData {
  magicItem: string;
}

export interface DialogData {
}

@Component({
  selector: 'app-magic-item-form',
  templateUrl: './magic-item-form.component.html',
  styleUrls: ['./magic-item-form.component.scss']
})
export class MagicItemFormComponent implements OnInit {

  ngOnInit() { }
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  rarities: Rarity[] = [
    {value: '', viewValue: 'None'},
    {value: 'Common', viewValue: 'Common'},
    {value: 'Uncommon', viewValue: 'Uncommon'},
    {value: 'Rare', viewValue: 'Rare'},
    {value: 'Very Rare', viewValue: 'Very Rare'},
    {value: 'Legendary', viewValue: 'Legendary'}
  ];
  model = new MagicItem("", "", this.rarities[0], "", false, "", null);

  //
  // Opens the dialog modal to create a custom magic item image.
  //
  openCustomImageDialog(): void {
    const dialogRef = this.dialog.open(CustomImageDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //
  // Submits magic item for processing to the backend.
  // Displays the returned image.
  //
  submitMagicItem() {
    console.log(JSON.stringify(this.model));

    this.dimImage();

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

//
// Represents the Custom Image Dialog modal.
//
@Component({
  selector: 'custom-image-dialog',
  templateUrl: 'custom-image-dialog.html',
})
export class CustomImageDialog {

  constructor(
    public dialogRef: MatDialogRef<CustomImageDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
