import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { MagicItem }    from '../magic-item';
import { HttpClient } from '@angular/common/http';

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

  rarities = ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary']
  model = new MagicItem("", "", this.rarities[0], false, "");
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
    const be_host = "localhost";
    const be_port = 4201;
    const be_base_url = "http://" + be_host + ":" + be_port

    this.http.post<MagicItemData>(be_base_url + "/createmagicitem", this.model).subscribe((data: MagicItemData)  => {
      console.log(data);
      document.getElementById("magic-item-image")["src"] = be_base_url + "/magicitem/" + data.magicItem;
      document.getElementById("magic-item-link")["href"] = be_base_url + "/download/" + data.magicItem;
      document.getElementById("magic-item-link")["download"] = data.magicItem;
    });
  }

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
