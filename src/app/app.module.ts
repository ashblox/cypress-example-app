import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ShadowViewComponent } from './shadow-view/shadow-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ShadowViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
