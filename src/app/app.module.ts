import config from '../core-bundle-adapter';
import { AppComponent } from './app.component';


@config._NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    config._BrowserModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule { }
