import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'magic-item-tool';

  downloadMagicItem(){
    console.log("Downloading magic item.");
  }

  magicItemImageLoadError(image) {
    setTimeout(function (){
      image = document.getElementById("magic-item-image");
      image["src"] = image["src"];
    }, 10);
  }
}
