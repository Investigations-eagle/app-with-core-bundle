import core from '../core-bundle-adapter';
import { AppComponent } from './app.component';


@core._NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    core._BrowserModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
