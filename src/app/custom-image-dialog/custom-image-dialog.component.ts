import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
}

//
// Represents the Custom Image Dialog modal.
//
@Component({
  selector: 'app-custom-image-dialog',
  templateUrl: './custom-image-dialog.component.html',
  styleUrls: ['./custom-image-dialog.component.scss']
})
export class CustomImageDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CustomImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
