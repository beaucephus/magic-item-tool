import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material-module';
import { MagicItemFormComponent } from './magic-item-form/magic-item-form.component';
import { MagicItemImageComponent } from './magic-item-image/magic-item-image.component';
import { CustomImageDialogComponent } from './custom-image-dialog/custom-image-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    MagicItemFormComponent,
    MagicItemImageComponent,
    CustomImageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  entryComponents: [
    CustomImageDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
