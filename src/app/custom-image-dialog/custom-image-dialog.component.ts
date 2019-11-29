import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  custom_image:any;
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  image: HTMLImageElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  ngOnInit() {
    // this.image = <HTMLImageElement> document.getElementById("custom-image");
    //
    // this.canvas = <HTMLCanvasElement> document.getElementById("custom-image-canvas");
    // this.ctx = this.canvas.getContext("2d");
    // this.drawCustomImageCanvas();
  }

  updateCustomImage(event) {
    console.log("Updating Custom Image.");

    var image:HTMLImageElement = <HTMLImageElement> document.getElementById("custom-image");
    var reader = new FileReader();
    var selectedFile = event.target.files[0];

    reader.onload = function(event :any) {
      image.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);
  }

  closeCustomImageDialog() {
    var image:HTMLImageElement = <HTMLImageElement> document.getElementById("custom-image");
    var base64Image:string = image.src.split(',')[1] // Strips the Data-URL declaration from the string.
    this.dialogRef.close(base64Image);
  }

  drawCustomImageCanvas() {
    this.ctx.drawImage(this.image, 0, 0);
  }
}
